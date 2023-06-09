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
import type { Region } from './Region';
import {
    RegionFromJSON,
    RegionFromJSONTyped,
    RegionToJSON,
} from './Region';

/**
 * The country
 * @export
 * @interface CurrentUserForProfileSettingsCountry
 */
export interface CurrentUserForProfileSettingsCountry {
    /**
     * 
     * @type {string}
     * @memberof CurrentUserForProfileSettingsCountry
     */
    countryName: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserForProfileSettingsCountry
     */
    countryShortCode: string;
    /**
     * 
     * @type {Array<Region>}
     * @memberof CurrentUserForProfileSettingsCountry
     */
    regions?: Array<Region>;
}

/**
 * Check if a given object implements the CurrentUserForProfileSettingsCountry interface.
 */
export function instanceOfCurrentUserForProfileSettingsCountry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "countryName" in value;
    isInstance = isInstance && "countryShortCode" in value;

    return isInstance;
}

export function CurrentUserForProfileSettingsCountryFromJSON(json: any): CurrentUserForProfileSettingsCountry {
    return CurrentUserForProfileSettingsCountryFromJSONTyped(json, false);
}

export function CurrentUserForProfileSettingsCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentUserForProfileSettingsCountry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryName': json['countryName'],
        'countryShortCode': json['countryShortCode'],
        'regions': !exists(json, 'regions') ? undefined : ((json['regions'] as Array<any>).map(RegionFromJSON)),
    };
}

export function CurrentUserForProfileSettingsCountryToJSON(value?: CurrentUserForProfileSettingsCountry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countryName': value.countryName,
        'countryShortCode': value.countryShortCode,
        'regions': value.regions === undefined ? undefined : ((value.regions as Array<any>).map(RegionToJSON)),
    };
}

