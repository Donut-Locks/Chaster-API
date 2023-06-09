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
  ExtensionForPublic,
} from '../models';
import {
    ExtensionForPublicFromJSON,
    ExtensionForPublicToJSON,
} from '../models';

/**
 * 
 */
export class ExtensionsApi extends runtime.BaseAPI {

    /**
     * Returns the list of all extensions in memory
     * Get the list of extensions
     */
    async extensionListControllerGetExtensionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ExtensionForPublic>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/extensions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ExtensionForPublicFromJSON));
    }

    /**
     * Returns the list of all extensions in memory
     * Get the list of extensions
     */
    async extensionListControllerGetExtensions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ExtensionForPublic>> {
        const response = await this.extensionListControllerGetExtensionsRaw(initOverrides);
        return await response.value();
    }

}
