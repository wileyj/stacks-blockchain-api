/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer
 */
export interface MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer {
    /**
     * 
     * @type {number}
     * @memberof MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer
     */
    p25: number | null;
    /**
     * 
     * @type {number}
     * @memberof MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer
     */
    p50: number | null;
    /**
     * 
     * @type {number}
     * @memberof MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer
     */
    p75: number | null;
    /**
     * 
     * @type {number}
     * @memberof MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer
     */
    p95: number | null;
}

export function MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransferFromJSON(json: any): MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer {
    return MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransferFromJSONTyped(json, false);
}

export function MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'p25': json['p25'],
        'p50': json['p50'],
        'p75': json['p75'],
        'p95': json['p95'],
    };
}

export function MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransferToJSON(value?: MempoolTransactionStatsResponseTxSimpleFeeAveragesTokenTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'p25': value.p25,
        'p50': value.p50,
        'p75': value.p75,
        'p95': value.p95,
    };
}

