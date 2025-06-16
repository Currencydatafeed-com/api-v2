# Swagger\Client\CryptoCurrencyApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCryptoExtendedHistory**](CryptoCurrencyApi.md#getcryptoextendedhistory) | **GET** /crypto-extended-history | Get extended historical close prices for a specific crypto pair on an exchange
[**getCryptoExtendedMinuteHistory**](CryptoCurrencyApi.md#getcryptoextendedminutehistory) | **GET** /crypto-extended-history-1m | Get intraday (minute-level) price history for a specific crypto pair on an exchange
[**getCryptoHistory**](CryptoCurrencyApi.md#getcryptohistory) | **GET** /crypto-history | Get historical close prices for a cryptocurrency
[**getCryptoLive**](CryptoCurrencyApi.md#getcryptolive) | **GET** /crypto-live | Get live data for one or more cryptocurrencies
[**getCryptoLiveByExchange**](CryptoCurrencyApi.md#getcryptolivebyexchange) | **GET** /crypto-live-exchange | Get live crypto data for all pairs from a specific exchange
[**getCryptoLiveExtended**](CryptoCurrencyApi.md#getcryptoliveextended) | **GET** /crypto-live-extended | Get extended live data for one or more crypto pairs from specific exchanges
[**getCryptoMarketFearGreedIndex**](CryptoCurrencyApi.md#getcryptomarketfeargreedindex) | **GET** /crypto-fg | Get Crypto Market Fear &amp; Greed Index
[**getCryptoMinuteHistory**](CryptoCurrencyApi.md#getcryptominutehistory) | **GET** /crypto-history-1m | Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
[**getCryptoOnchainMetrics**](CryptoCurrencyApi.md#getcryptoonchainmetrics) | **GET** /crypto-onchain | Get on-chain metrics for Bitcoin and crypto markets
[**getCryptoPerformance**](CryptoCurrencyApi.md#getcryptoperformance) | **GET** /crypto-performance | Get performance of a single cryptocurrency over various periods

# **getCryptoExtendedHistory**
> \Swagger\Client\Model\InlineResponse20015 getCryptoExtendedHistory($symbol, $period)

Get extended historical close prices for a specific crypto pair on an exchange

Returns the daily closing price history for a single cryptocurrency trading pair on a specific exchange (e.g. `LTCUSDT@binance`). Requires authentication and a subscription with historical access.  - `symbol` parameter accepts a single value, formatted as `PAIR@exchange` (e.g. `BTCUSDT@binance`). - `period` parameter is required, integer, maximum as supported (suggest up to 1825 for 5 years).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | Trading pair and exchange in the format `PAIR@exchange` (e.g. `LTCUSDT@binance`).
$period = 56; // int | Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years).

try {
    $result = $apiInstance->getCryptoExtendedHistory($symbol, $period);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoExtendedHistory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;LTCUSDT@binance&#x60;). |
 **period** | **int**| Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years). |

### Return type

[**\Swagger\Client\Model\InlineResponse20015**](../Model/InlineResponse20015.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoExtendedMinuteHistory**
> \Swagger\Client\Model\InlineResponse20016 getCryptoExtendedMinuteHistory($symbol, $hours)

Get intraday (minute-level) price history for a specific crypto pair on an exchange

Returns minute-level price history (close prices and timestamps) for a single crypto trading pair on a specific exchange.   The `symbol` parameter expects the format `PAIR@exchange` (e.g. `BTCUSDT@binance`).  - Requires authentication and subscription with historical access. - `hours` parameter: Maximum 48 (last 48 hours).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | Trading pair and exchange in the format `PAIR@exchange` (e.g. `BTCUSDT@binance`).
$hours = 56; // int | Number of hours of minute-level data to return (max 48).

try {
    $result = $apiInstance->getCryptoExtendedMinuteHistory($symbol, $hours);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoExtendedMinuteHistory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;). |
 **hours** | **int**| Number of hours of minute-level data to return (max 48). |

### Return type

[**\Swagger\Client\Model\InlineResponse20016**](../Model/InlineResponse20016.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoHistory**
> \Swagger\Client\Model\InlineResponse20013 getCryptoHistory($symbol, $period)

Get historical close prices for a cryptocurrency

Returns the daily closing price history for a single cryptocurrency symbol for up to 5 years (max 1825 days). Requires authentication and a subscription with historical access.  The `symbol` parameter accepts a single cryptocurrency code (e.g., `XRP`, `BTC`, `ETH`).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | The cryptocurrency symbol (e.g. XRP, BTC, ETH).
$period = 56; // int | Number of daily data points to return (up to 1825; 5 years).

try {
    $result = $apiInstance->getCryptoHistory($symbol, $period);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoHistory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| The cryptocurrency symbol (e.g. XRP, BTC, ETH). |
 **period** | **int**| Number of daily data points to return (up to 1825; 5 years). |

### Return type

[**\Swagger\Client\Model\InlineResponse20013**](../Model/InlineResponse20013.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoLive**
> \Swagger\Client\Model\InlineResponse20010 getCryptoLive($symbol)

Get live data for one or more cryptocurrencies

Returns the latest price and daily metrics for one or more cryptocurrencies. Requires authentication and a subscription with crypto access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | One or more cryptocurrency symbols, separated by commas (e.g. `BTC,ETH,XRP`)

try {
    $result = $apiInstance->getCryptoLive($symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoLive: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| One or more cryptocurrency symbols, separated by commas (e.g. &#x60;BTC,ETH,XRP&#x60;) |

### Return type

[**\Swagger\Client\Model\InlineResponse20010**](../Model/InlineResponse20010.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoLiveByExchange**
> \Swagger\Client\Model\InlineResponse20012 getCryptoLiveByExchange($exchange)

Get live crypto data for all pairs from a specific exchange

Returns the latest live data for all cryptocurrency pairs from a specified exchange (market). Requires authentication and an appropriate subscription with on-chain access.  **The `exchange` parameter is required.**   For example: `binance`, `bybit`, etc.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$exchange = "exchange_example"; // string | The market or exchange to get all pairs from (e.g. `binance`, `bybit`, etc.).

try {
    $result = $apiInstance->getCryptoLiveByExchange($exchange);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoLiveByExchange: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **string**| The market or exchange to get all pairs from (e.g. &#x60;binance&#x60;, &#x60;bybit&#x60;, etc.). |

### Return type

[**\Swagger\Client\Model\InlineResponse20012**](../Model/InlineResponse20012.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoLiveExtended**
> \Swagger\Client\Model\InlineResponse20011 getCryptoLiveExtended($symbol)

Get extended live data for one or more crypto pairs from specific exchanges

Returns the latest extended data for one or more cryptocurrency pairs from specific exchanges or markets. Requires authentication and a subscription with crypto access.  The `symbol` parameter accepts one or more pair-market combinations, separated by commas. - Example: `BTCUSDT@binance,XRPUSDT@bybit`

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | One or more cryptocurrency pairs (with market), separated by commas.   Format: `PAIR@market`, e.g. `BTCUSDT@binance,XRPUSDT@bybit`

try {
    $result = $apiInstance->getCryptoLiveExtended($symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoLiveExtended: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| One or more cryptocurrency pairs (with market), separated by commas.   Format: &#x60;PAIR@market&#x60;, e.g. &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60; |

### Return type

[**\Swagger\Client\Model\InlineResponse20011**](../Model/InlineResponse20011.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoMarketFearGreedIndex**
> \Swagger\Client\Model\InlineResponse20018 getCryptoMarketFearGreedIndex()

Get Crypto Market Fear & Greed Index

Returns the daily crypto market Fear & Greed Index as a time series from 2021-04-10 to today. Authentication and on-chain access subscription required.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getCryptoMarketFearGreedIndex();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoMarketFearGreedIndex: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\InlineResponse20018**](../Model/InlineResponse20018.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoMinuteHistory**
> \Swagger\Client\Model\InlineResponse20014 getCryptoMinuteHistory($symbol, $hours)

Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)

Returns the 1-minute interval closing price history for a single cryptocurrency symbol for up to 48 hours. Requires authentication and a subscription with historical access.  - `symbol` parameter accepts a single cryptocurrency code (e.g., `ETH`, `BTC`). - `hours` parameter is required, integer, max 48.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | The cryptocurrency symbol (e.g. ETH, BTC, XRP).
$hours = 56; // int | Number of hours of minute-level historical data to return (up to 48 hours back).

try {
    $result = $apiInstance->getCryptoMinuteHistory($symbol, $hours);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoMinuteHistory: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| The cryptocurrency symbol (e.g. ETH, BTC, XRP). |
 **hours** | **int**| Number of hours of minute-level historical data to return (up to 48 hours back). |

### Return type

[**\Swagger\Client\Model\InlineResponse20014**](../Model/InlineResponse20014.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoOnchainMetrics**
> \Swagger\Client\Model\InlineResponse20017 getCryptoOnchainMetrics($type)

Get on-chain metrics for Bitcoin and crypto markets

Returns daily on-chain indicators as time series for Bitcoin and major crypto assets.   The `type` parameter selects the indicator to retrieve (e.g. whale flows, SOPR, Puell Multiple, MVRV, open interest, leverage, funding, active address ratio).  **Available types:**   - whale   - sopr   - puell   - mvrv   - open_interest   - leverage   - funding   - active_address  Requires authentication and subscription with on-chain access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$type = "type_example"; // string | The type of on-chain metric to fetch

try {
    $result = $apiInstance->getCryptoOnchainMetrics($type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoOnchainMetrics: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **string**| The type of on-chain metric to fetch |

### Return type

[**\Swagger\Client\Model\InlineResponse20017**](../Model/InlineResponse20017.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCryptoPerformance**
> \Swagger\Client\Model\InlineResponse20019 getCryptoPerformance($symbol)

Get performance of a single cryptocurrency over various periods

Returns the percentage change in price for a specified cryptocurrency (e.g., BTC, ETH) over several timeframes, including 1d, 7d, 15d, 30d, 90d, 180d, 270d, 365d, and 720d.   Authentication and a subscription with crypto performance access are required.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\CryptoCurrencyApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | Cryptocurrency symbol (e.g., BTC, ETH, XRP)

try {
    $result = $apiInstance->getCryptoPerformance($symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CryptoCurrencyApi->getCryptoPerformance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Cryptocurrency symbol (e.g., BTC, ETH, XRP) |

### Return type

[**\Swagger\Client\Model\InlineResponse20019**](../Model/InlineResponse20019.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

