import * as express from 'express';
import { addAsync } from '@awaitjs/express';
import { DataStore, DbTx } from '../../datastore/common';
import { getTxFromDataStore } from '../controllers/db-controller';
import { timeout, waiter } from '../../helpers';

export function createTxRouter(): express.Router {
  const router = addAsync(express.Router());

  router.getAsync('/', async (req, res) => {
    const db: DataStore = req.app.get('db');
    try {
      const transactions = await db.getTxList();
      return res.json(transactions);
    } catch (e) {
      res.sendStatus(500);
    }
  });

  router.getAsync('/stream', async (req, res) => {
    const protocol = req.query['protocol'];
    const useEventSource = protocol === 'eventsource';
    const useWebSocket = protocol === 'websocket';
    if (!useEventSource && !useWebSocket) {
      throw new Error(`Unsupported stream protocol "${protocol}"`);
    }

    if (useEventSource) {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      });
    } else if (useWebSocket) {
      throw new Error('WebSocket stream not yet implemented');
    }

    const db: DataStore = req.app.get('db');
    const dbTxUpdate = async (tx: DbTx): Promise<void> => {
      try {
        // TODO: timeout is temp hack until atomic db updates are implemented
        await timeout(1);
        const fullTx = await getTxFromDataStore(tx.tx_id, db);
        if (useEventSource) {
          res.write(`event: tx\ndata: ${JSON.stringify(fullTx)}\n\n`);
          res.flush();
        }
      } catch (error) {
        // TODO: real error handling
        console.error(error);
      }
    };

    // EventEmitters don't like being passed Promise functions so wrap the async handler
    const onTxUpdate = (tx: DbTx): void => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dbTxUpdate(tx);
    };

    const endWaiter = waiter();
    db.addListener('txUpdate', onTxUpdate);
    res.on('close', () => {
      endWaiter.finish();
      db.removeListener('txUpdate', onTxUpdate);
    });
    await endWaiter;
  });

  router.getAsync('/:tx_id', async (req, res) => {
    const db: DataStore = req.app.get('db');
    const { tx_id } = req.params;
    const txResponse = await getTxFromDataStore(tx_id, db);
    res.json(txResponse);
  });

  return router;
}
