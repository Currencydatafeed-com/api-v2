# GeneralApi

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
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.GeneralApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();


GeneralApi apiInstance = new GeneralApi();
String section = "section_example"; // String | Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs 
try {
    InlineResponse200 result = apiInstance.getAvailableSymbols(section);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling GeneralApi#getAvailableSymbols");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **String**| Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs  | [enum: forex, crypto, crypto_extended]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

