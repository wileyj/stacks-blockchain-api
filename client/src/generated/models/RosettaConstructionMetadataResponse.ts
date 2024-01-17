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
    RosettaAmount,
    RosettaAmountFromJSON,
    RosettaAmountFromJSONTyped,
    RosettaAmountToJSON,
    RosettaConstructionMetadataResponseMetadata,
    RosettaConstructionMetadataResponseMetadataFromJSON,
    RosettaConstructionMetadataResponseMetadataFromJSONTyped,
    RosettaConstructionMetadataResponseMetadataToJSON,
} from './';

/**
 * The ConstructionMetadataResponse returns network-specific metadata used for transaction construction. Optionally, the implementer can return the suggested fee associated with the transaction being constructed. The caller may use this info to adjust the intent of the transaction or to create a transaction with a different account that can pay the suggested fee. Suggested fee is an array in case fee payment must occur in multiple currencies.
 * @export
 * @interface RosettaConstructionMetadataResponse
 */
export interface RosettaConstructionMetadataResponse {
    /**
     * 
     * @type {RosettaConstructionMetadataResponseMetadata}
     * @memberof RosettaConstructionMetadataResponse
     */
    metadata: RosettaConstructionMetadataResponseMetadata;
    /**
     * 
     * @type {Array<RosettaAmount>}
     * @memberof RosettaConstructionMetadataResponse
     */
    suggested_fee?: Array<RosettaAmount>;
}

export function RosettaConstructionMetadataResponseFromJSON(json: any): RosettaConstructionMetadataResponse {
    return RosettaConstructionMetadataResponseFromJSONTyped(json, false);
}

export function RosettaConstructionMetadataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RosettaConstructionMetadataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': RosettaConstructionMetadataResponseMetadataFromJSON(json['metadata']),
        'suggested_fee': !exists(json, 'suggested_fee') ? undefined : ((json['suggested_fee'] as Array<any>).map(RosettaAmountFromJSON)),
    };
}

export function RosettaConstructionMetadataResponseToJSON(value?: RosettaConstructionMetadataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': RosettaConstructionMetadataResponseMetadataToJSON(value.metadata),
        'suggested_fee': value.suggested_fee === undefined ? undefined : ((value.suggested_fee as Array<any>).map(RosettaAmountToJSON)),
    };
}

