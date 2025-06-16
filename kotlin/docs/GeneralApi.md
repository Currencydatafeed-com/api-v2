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
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = GeneralApi()
val section : kotlin.String = section_example // kotlin.String | Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs 
try {
    val result : InlineResponse200 = apiInstance.getAvailableSymbols(section)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GeneralApi#getAvailableSymbols")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GeneralApi#getAvailableSymbols")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **kotlin.String**| Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs  | [enum: forex, crypto, crypto_extended]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

