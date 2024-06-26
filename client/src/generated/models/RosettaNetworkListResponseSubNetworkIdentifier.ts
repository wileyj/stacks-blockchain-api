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
    RosettaNetworkListResponseSubNetworkIdentifierMetadata,
    RosettaNetworkListResponseSubNetworkIdentifierMetadataFromJSON,
    RosettaNetworkListResponseSubNetworkIdentifierMetadataFromJSONTyped,
    RosettaNetworkListResponseSubNetworkIdentifierMetadataToJSON,
} from './';

/**
 * In blockchains with sharded state, the SubNetworkIdentifier is required to query some object on a specific shard. This identifier is optional for all non-sharded blockchains.
 * @export
 * @interface RosettaNetworkListResponseSubNetworkIdentifier
 */
export interface RosettaNetworkListResponseSubNetworkIdentifier {
    /**
     * Network name
     * @type {string}
     * @memberof RosettaNetworkListResponseSubNetworkIdentifier
     */
    network: string;
    /**
     * 
     * @type {RosettaNetworkListResponseSubNetworkIdentifierMetadata}
     * @memberof RosettaNetworkListResponseSubNetworkIdentifier
     */
    metadata?: RosettaNetworkListResponseSubNetworkIdentifierMetadata;
}

export function RosettaNetworkListResponseSubNetworkIdentifierFromJSON(json: any): RosettaNetworkListResponseSubNetworkIdentifier {
    return RosettaNetworkListResponseSubNetworkIdentifierFromJSONTyped(json, false);
}

export function RosettaNetworkListResponseSubNetworkIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaNetworkListResponseSubNetworkIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'network': json['network'],
        'metadata': !exists(json, 'metadata') ? undefined : RosettaNetworkListResponseSubNetworkIdentifierMetadataFromJSON(json['metadata']),
    };
}

export function RosettaNetworkListResponseSubNetworkIdentifierToJSON(value?: RosettaNetworkListResponseSubNetworkIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'network': value.network,
        'metadata': RosettaNetworkListResponseSubNetworkIdentifierMetadataToJSON(value.metadata),
    };
}

