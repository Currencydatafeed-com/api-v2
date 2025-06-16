# Swagger\Client\GeneralApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAvailableSymbols**](GeneralApi.md#getavailablesymbols) | **GET** /available-symbols | Get available symbols list

# **getAvailableSymbols**
> \Swagger\Client\Model\InlineResponse200 getAvailableSymbols($section)

Get available symbols list

Returns a list of available symbols for forex, crypto, or crypto_extended. Requires an active subscription with symbol list access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\GeneralApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$section = "section_example"; // string | Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs

try {
    $result = $apiInstance->getAvailableSymbols($section);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeneralApi->getAvailableSymbols: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **string**| Section to list symbols from:   - **forex**: All available forex pairs   - **crypto**: All available crypto pairs   - **crypto_extended**: Extended crypto pairs |

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

