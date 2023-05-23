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
  AppSettingsDto,
} from '../models';
import {
    AppSettingsDtoFromJSON,
    AppSettingsDtoToJSON,
} from '../models';

/**
 * 
 */
export class SettingsApi extends runtime.BaseAPI {

    /**
     * 
     * Get app settings
     */
    async settingsControllerGetAppSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppSettingsDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppSettingsDtoFromJSON(jsonValue));
    }

    /**
     * 
     * Get app settings
     */
    async settingsControllerGetAppSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppSettingsDto> {
        const response = await this.settingsControllerGetAppSettingsRaw(initOverrides);
        return await response.value();
    }

}