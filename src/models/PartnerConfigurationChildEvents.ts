/* tslint:disable */
/* eslint-disable */
/**
 * Chaster
 * Chaster Public API  API documentation: [https://docs.chaster.app/api-introduction](https://docs.chaster.app/api-introduction) 
 *
 * The version of the OpenAPI document: 0.12.54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PartnerConfigurationChildEventEnum } from './PartnerConfigurationChildEventEnum';
import {
    PartnerConfigurationChildEventEnumFromJSON,
    PartnerConfigurationChildEventEnumFromJSONTyped,
    PartnerConfigurationChildEventEnumToJSON,
} from './PartnerConfigurationChildEventEnum';
import type { PartnerConfigurationChildEventsPayload } from './PartnerConfigurationChildEventsPayload';
import {
    PartnerConfigurationChildEventsPayloadFromJSON,
    PartnerConfigurationChildEventsPayloadFromJSONTyped,
    PartnerConfigurationChildEventsPayloadToJSON,
} from './PartnerConfigurationChildEventsPayload';

/**
 * 
 * @export
 * @interface PartnerConfigurationChildEvents
 */
export interface PartnerConfigurationChildEvents {
    /**
     * 
     * @type {PartnerConfigurationChildEventEnum}
     * @memberof PartnerConfigurationChildEvents
     */
    event: PartnerConfigurationChildEventEnum;
    /**
     * 
     * @type {PartnerConfigurationChildEventsPayload}
     * @memberof PartnerConfigurationChildEvents
     */
    payload: PartnerConfigurationChildEventsPayload;
}

/**
 * Check if a given object implements the PartnerConfigurationChildEvents interface.
 */
export function instanceOfPartnerConfigurationChildEvents(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "event" in value;
    isInstance = isInstance && "payload" in value;

    return isInstance;
}

export function PartnerConfigurationChildEventsFromJSON(json: any): PartnerConfigurationChildEvents {
    return PartnerConfigurationChildEventsFromJSONTyped(json, false);
}

export function PartnerConfigurationChildEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerConfigurationChildEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'event': PartnerConfigurationChildEventEnumFromJSON(json['event']),
        'payload': PartnerConfigurationChildEventsPayloadFromJSON(json['payload']),
    };
}

export function PartnerConfigurationChildEventsToJSON(value?: PartnerConfigurationChildEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event': PartnerConfigurationChildEventEnumToJSON(value.event),
        'payload': PartnerConfigurationChildEventsPayloadToJSON(value.payload),
    };
}

