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
 * @interface AppFileForPublic
 */
export interface AppFileForPublic {
    /**
     * The file URL
     * @type {string}
     * @memberof AppFileForPublic
     */
    url: string;
}

/**
 * Check if a given object implements the AppFileForPublic interface.
 */
export function instanceOfAppFileForPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function AppFileForPublicFromJSON(json: any): AppFileForPublic {
    return AppFileForPublicFromJSONTyped(json, false);
}

export function AppFileForPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppFileForPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function AppFileForPublicToJSON(value?: AppFileForPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

