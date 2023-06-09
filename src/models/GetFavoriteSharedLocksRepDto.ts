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
import type { PublicLockForPublic } from './PublicLockForPublic';
import {
    PublicLockForPublicFromJSON,
    PublicLockForPublicFromJSONTyped,
    PublicLockForPublicToJSON,
} from './PublicLockForPublic';

/**
 * 
 * @export
 * @interface GetFavoriteSharedLocksRepDto
 */
export interface GetFavoriteSharedLocksRepDto {
    /**
     * 
     * @type {Array<PublicLockForPublic>}
     * @memberof GetFavoriteSharedLocksRepDto
     */
    results: Array<PublicLockForPublic>;
    /**
     * 
     * @type {string}
     * @memberof GetFavoriteSharedLocksRepDto
     */
    lastId: string;
    /**
     * 
     * @type {boolean}
     * @memberof GetFavoriteSharedLocksRepDto
     */
    hasMore: boolean;
    /**
     * 
     * @type {number}
     * @memberof GetFavoriteSharedLocksRepDto
     */
    count: number;
}

/**
 * Check if a given object implements the GetFavoriteSharedLocksRepDto interface.
 */
export function instanceOfGetFavoriteSharedLocksRepDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "results" in value;
    isInstance = isInstance && "lastId" in value;
    isInstance = isInstance && "hasMore" in value;
    isInstance = isInstance && "count" in value;

    return isInstance;
}

export function GetFavoriteSharedLocksRepDtoFromJSON(json: any): GetFavoriteSharedLocksRepDto {
    return GetFavoriteSharedLocksRepDtoFromJSONTyped(json, false);
}

export function GetFavoriteSharedLocksRepDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFavoriteSharedLocksRepDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': ((json['results'] as Array<any>).map(PublicLockForPublicFromJSON)),
        'lastId': json['lastId'],
        'hasMore': json['hasMore'],
        'count': json['count'],
    };
}

export function GetFavoriteSharedLocksRepDtoToJSON(value?: GetFavoriteSharedLocksRepDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': ((value.results as Array<any>).map(PublicLockForPublicToJSON)),
        'lastId': value.lastId,
        'hasMore': value.hasMore,
        'count': value.count,
    };
}

