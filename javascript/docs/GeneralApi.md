# CurrencydatafeedcomApiV2.GeneralApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableSymbols**](GeneralApi.md#getAvailableSymbols) | **GET** /available-symbols | Get available symbols list

<a name="getAvailableSymbols"></a>
# **getAvailableSymbols**
> InlineResponse200 getAvailableSymbols(section)

Get available symbols list

Returns a list of available symbols for forex, crypto, or crypto_extended. Requires an active subscription with symbol list access. 

### Example
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.GeneralApi();
let section = "section_example"; // String | Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs 

apiInstance.getAvailableSymbols(section, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **String**| Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

