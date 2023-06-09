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
 * 
 * @export
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    countryName: string;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    countryShortCode: string;
    /**
     * 
     * @type {Array<Region>}
     * @memberof Country
     */
    regions?: Array<Region>;
}

/**
 * Check if a given object implements the Country interface.
 */
export function instanceOfCountry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "countryName" in value;
    isInstance = isInstance && "countryShortCode" in value;

    return isInstance;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryName': json['countryName'],
        'countryShortCode': json['countryShortCode'],
        'regions': !exists(json, 'regions') ? undefined : ((json['regions'] as Array<any>).map(RegionFromJSON)),
    };
}

export function CountryToJSON(value?: Country | null): any {
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

