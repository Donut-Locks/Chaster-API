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


/**
 * 
 * @export
 */
export const PeerVerificationStatusEnum = {
    Ongoing: 'ongoing',
    Verified: 'verified',
    Rejected: 'rejected'
} as const;
export type PeerVerificationStatusEnum = typeof PeerVerificationStatusEnum[keyof typeof PeerVerificationStatusEnum];


export function PeerVerificationStatusEnumFromJSON(json: any): PeerVerificationStatusEnum {
    return PeerVerificationStatusEnumFromJSONTyped(json, false);
}

export function PeerVerificationStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerVerificationStatusEnum {
    return json as PeerVerificationStatusEnum;
}

export function PeerVerificationStatusEnumToJSON(value?: PeerVerificationStatusEnum | null): any {
    return value as any;
}

