# swagger_client.GeneralApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_available_symbols**](GeneralApi.md#get_available_symbols) | **GET** /available-symbols | Get available symbols list

# **get_available_symbols**
> InlineResponse200 get_available_symbols(section)

Get available symbols list

Returns a list of available symbols for forex, crypto, or crypto_extended. Requires an active subscription with symbol list access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.GeneralApi(swagger_client.ApiClient(configuration))
section = 'section_example' # str | Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs 

try:
    # Get available symbols list
    api_response = api_instance.get_available_symbols(section)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GeneralApi->get_available_symbols: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **str**| Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

