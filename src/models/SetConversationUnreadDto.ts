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
/**
 * 
 * @export
 * @interface SetConversationUnreadDto
 */
export interface SetConversationUnreadDto {
    /**
     * True if unread
     * @type {boolean}
     * @memberof SetConversationUnreadDto
     */
    unread: boolean;
}

/**
 * Check if a given object implements the SetConversationUnreadDto interface.
 */
export function instanceOfSetConversationUnreadDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "unread" in value;

    return isInstance;
}

export function SetConversationUnreadDtoFromJSON(json: any): SetConversationUnreadDto {
    return SetConversationUnreadDtoFromJSONTyped(json, false);
}

export function SetConversationUnreadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetConversationUnreadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unread': json['unread'],
    };
}

export function SetConversationUnreadDtoToJSON(value?: SetConversationUnreadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unread': value.unread,
    };
}

