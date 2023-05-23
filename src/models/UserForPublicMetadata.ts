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
 * User metadata
 * @export
 * @interface UserForPublicMetadata
 */
export interface UserForPublicMetadata {
    /**
     * 
     * @type {number}
     * @memberof UserForPublicMetadata
     */
    locktober2020Points: number;
    /**
     * 
     * @type {number}
     * @memberof UserForPublicMetadata
     */
    locktober2021Points: number;
    /**
     * 
     * @type {number}
     * @memberof UserForPublicMetadata
     */
    chastityMonth2022Points: number;
    /**
     * 
     * @type {number}
     * @memberof UserForPublicMetadata
     */
    locktober2022Points: number;
}

/**
 * Check if a given object implements the UserForPublicMetadata interface.
 */
export function instanceOfUserForPublicMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locktober2020Points" in value;
    isInstance = isInstance && "locktober2021Points" in value;
    isInstance = isInstance && "chastityMonth2022Points" in value;
    isInstance = isInstance && "locktober2022Points" in value;

    return isInstance;
}

export function UserForPublicMetadataFromJSON(json: any): UserForPublicMetadata {
    return UserForPublicMetadataFromJSONTyped(json, false);
}

export function UserForPublicMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserForPublicMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locktober2020Points': json['locktober2020Points'],
        'locktober2021Points': json['locktober2021Points'],
        'chastityMonth2022Points': json['chastityMonth2022Points'],
        'locktober2022Points': json['locktober2022Points'],
    };
}

export function UserForPublicMetadataToJSON(value?: UserForPublicMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locktober2020Points': value.locktober2020Points,
        'locktober2021Points': value.locktober2021Points,
        'chastityMonth2022Points': value.chastityMonth2022Points,
        'locktober2022Points': value.locktober2022Points,
    };
}
