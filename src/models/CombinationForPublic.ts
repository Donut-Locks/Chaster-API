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
 * @interface CombinationForPublic
 */
export interface CombinationForPublic {
    /**
     * Use imageFullUrl instead
     * @type {string}
     * @memberof CombinationForPublic
     * @deprecated
     */
    imageUrl?: string;
    /**
     * The combination id
     * @type {string}
     * @memberof CombinationForPublic
     */
    _id: string;
    /**
     * The user id
     * @type {string}
     * @memberof CombinationForPublic
     */
    user: string;
    /**
     * The review status, if the combination requires a manual review
from the moderators
     * @type {string}
     * @memberof CombinationForPublic
     */
    checkStatus: CombinationForPublicCheckStatusEnum;
    /**
     * The combination type
     * @type {string}
     * @memberof CombinationForPublic
     */
    type: CombinationForPublicTypeEnum;
    /**
     * The combination code, if the type is `code`
     * @type {string}
     * @memberof CombinationForPublic
     */
    code?: string;
    /**
     * The combination image, if the type is `image`
     * @type {string}
     * @memberof CombinationForPublic
     */
    imageFullUrl?: string;
    /**
     * Created at
     * @type {string}
     * @memberof CombinationForPublic
     */
    createdAt: string;
    /**
     * Updated at
     * @type {string}
     * @memberof CombinationForPublic
     */
    updatedAt: string;
    /**
     * Whether the combination requires a manual review from the moderators
     * @type {boolean}
     * @memberof CombinationForPublic
     */
    enableManualCheck: boolean;
}


/**
 * @export
 */
export const CombinationForPublicCheckStatusEnum = {
    Pending: 'pending',
    Verified: 'verified',
    Failed: 'failed'
} as const;
export type CombinationForPublicCheckStatusEnum = typeof CombinationForPublicCheckStatusEnum[keyof typeof CombinationForPublicCheckStatusEnum];

/**
 * @export
 */
export const CombinationForPublicTypeEnum = {
    Image: 'image',
    Code: 'code'
} as const;
export type CombinationForPublicTypeEnum = typeof CombinationForPublicTypeEnum[keyof typeof CombinationForPublicTypeEnum];


/**
 * Check if a given object implements the CombinationForPublic interface.
 */
export function instanceOfCombinationForPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_id" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "checkStatus" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "enableManualCheck" in value;

    return isInstance;
}

export function CombinationForPublicFromJSON(json: any): CombinationForPublic {
    return CombinationForPublicFromJSONTyped(json, false);
}

export function CombinationForPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): CombinationForPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        '_id': json['_id'],
        'user': json['user'],
        'checkStatus': json['checkStatus'],
        'type': json['type'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'imageFullUrl': !exists(json, 'imageFullUrl') ? undefined : json['imageFullUrl'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'enableManualCheck': json['enableManualCheck'],
    };
}

export function CombinationForPublicToJSON(value?: CombinationForPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageUrl': value.imageUrl,
        '_id': value._id,
        'user': value.user,
        'checkStatus': value.checkStatus,
        'type': value.type,
        'code': value.code,
        'imageFullUrl': value.imageFullUrl,
        'createdAt': value.createdAt,
        'updatedAt': value.updatedAt,
        'enableManualCheck': value.enableManualCheck,
    };
}

