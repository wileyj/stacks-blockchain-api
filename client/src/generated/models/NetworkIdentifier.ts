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
import {
    RosettaNetworkListResponseSubNetworkIdentifier,
    RosettaNetworkListResponseSubNetworkIdentifierFromJSON,
    RosettaNetworkListResponseSubNetworkIdentifierFromJSONTyped,
    RosettaNetworkListResponseSubNetworkIdentifierToJSON,
} from './';

/**
 * The network_identifier specifies which network a particular object is associated with.
 * @export
 * @interface NetworkIdentifier
 */
export interface NetworkIdentifier {
    /**
     * Blockchain name
     * @type {string}
     * @memberof NetworkIdentifier
     */
    blockchain: string;
    /**
     * If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.
     * @type {string}
     * @memberof NetworkIdentifier
     */
    network: string;
    /**
     * 
     * @type {RosettaNetworkListResponseSubNetworkIdentifier}
     * @memberof NetworkIdentifier
     */
    sub_network_identifier?: RosettaNetworkListResponseSubNetworkIdentifier;
}

export function NetworkIdentifierFromJSON(json: any): NetworkIdentifier {
    return NetworkIdentifierFromJSONTyped(json, false);
}

export function NetworkIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockchain': json['blockchain'],
        'network': json['network'],
        'sub_network_identifier': !exists(json, 'sub_network_identifier') ? undefined : RosettaNetworkListResponseSubNetworkIdentifierFromJSON(json['sub_network_identifier']),
    };
}

export function NetworkIdentifierToJSON(value?: NetworkIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockchain': value.blockchain,
        'network': value.network,
        'sub_network_identifier': RosettaNetworkListResponseSubNetworkIdentifierToJSON(value.sub_network_identifier),
    };
}

