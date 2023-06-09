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
 * @interface SetFreezeDto
 */
export interface SetFreezeDto {
    /**
     * Whether the lock is frozen
     * @type {boolean}
     * @memberof SetFreezeDto
     */
    isFrozen: boolean;
}

/**
 * Check if a given object implements the SetFreezeDto interface.
 */
export function instanceOfSetFreezeDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isFrozen" in value;

    return isInstance;
}

export function SetFreezeDtoFromJSON(json: any): SetFreezeDto {
    return SetFreezeDtoFromJSONTyped(json, false);
}

export function SetFreezeDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetFreezeDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isFrozen': json['isFrozen'],
    };
}

export function SetFreezeDtoToJSON(value?: SetFreezeDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isFrozen': value.isFrozen,
    };
}

