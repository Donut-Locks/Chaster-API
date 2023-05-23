# Chaster API Client

[![npm version](https://badge.fury.io/js/chaster-api.svg)](https://badge.fury.io/js/chaster-api)

## Description

chaster-api, a Node.js module providing methods for interacting with the Chaster API, allowing easy integration of Chaster's functionality into your applications. 
The package was auto-generated with `npx @openapitools/openapi-generator-cli generate` using the Chaster [Swagger specification](https://api.chaster.app/api-json)

## Installation

To install the chaster-api, use the following command:
```
npm install chaster-api
```

## Usage

Example on how to access a Chaster lock.

```javascript
const { Configuration, LocksApi } = require('chaster-api');

const config = new Configuration({accessToken: "<insert token>", fetchApi: fetch});

const locksApi = new LocksApi(config);

const lock = await locksApi.lockControllerFindOne({lockId: "<insert lockID>"})
```

## Chaster

For detailed information about the Chaster API, please refer to the [Chaster API Documentation](https://docs.chaster.app/api/basics/introduction/)
For detailed information about the endpoints, please refer to the [Swagger Documentation](https://api.chaster.app/api#/)