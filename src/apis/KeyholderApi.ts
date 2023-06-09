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


import * as runtime from '../runtime';
import type {
  KeyholderSearchLocksDto,
  KeyholderSearchLocksRepDto,
  LockForKeyholder,
} from '../models';
import {
    KeyholderSearchLocksDtoFromJSON,
    KeyholderSearchLocksDtoToJSON,
    KeyholderSearchLocksRepDtoFromJSON,
    KeyholderSearchLocksRepDtoToJSON,
    LockForKeyholderFromJSON,
    LockForKeyholderToJSON,
} from '../models';

export interface KeyholderControllerGetKeyholderWearersRequest {
    status?: KeyholderControllerGetKeyholderWearersStatusEnum;
}

export interface KeyholderControllerSearchLocksRequest {
    keyholderSearchLocksDto: KeyholderSearchLocksDto;
}

/**
 * 
 */
export class KeyholderApi extends runtime.BaseAPI {

    /**
     * Use POST /keyholder/locks/search
     * Return all locked users
     */
    async keyholderControllerGetKeyholderWearersRaw(requestParameters: KeyholderControllerGetKeyholderWearersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LockForKeyholder>>> {
        const queryParameters: any = {};

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["keyholder"]);
        }

        const response = await this.request({
            path: `/keyholder/wearers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LockForKeyholderFromJSON));
    }

    /**
     * Use POST /keyholder/locks/search
     * Return all locked users
     */
    async keyholderControllerGetKeyholderWearers(requestParameters: KeyholderControllerGetKeyholderWearersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LockForKeyholder>> {
        const response = await this.keyholderControllerGetKeyholderWearersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search locked users
     * Search locked users
     */
    async keyholderControllerSearchLocksRaw(requestParameters: KeyholderControllerSearchLocksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KeyholderSearchLocksRepDto>> {
        if (requestParameters.keyholderSearchLocksDto === null || requestParameters.keyholderSearchLocksDto === undefined) {
            throw new runtime.RequiredError('keyholderSearchLocksDto','Required parameter requestParameters.keyholderSearchLocksDto was null or undefined when calling keyholderControllerSearchLocks.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["keyholder"]);
        }

        const response = await this.request({
            path: `/keyholder/locks/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: KeyholderSearchLocksDtoToJSON(requestParameters.keyholderSearchLocksDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KeyholderSearchLocksRepDtoFromJSON(jsonValue));
    }

    /**
     * Search locked users
     * Search locked users
     */
    async keyholderControllerSearchLocks(requestParameters: KeyholderControllerSearchLocksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KeyholderSearchLocksRepDto> {
        const response = await this.keyholderControllerSearchLocksRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const KeyholderControllerGetKeyholderWearersStatusEnum = {
    Locked: 'locked',
    Unlocked: 'unlocked',
    Deserted: 'deserted',
    Archived: 'archived'
} as const;
export type KeyholderControllerGetKeyholderWearersStatusEnum = typeof KeyholderControllerGetKeyholderWearersStatusEnum[keyof typeof KeyholderControllerGetKeyholderWearersStatusEnum];
