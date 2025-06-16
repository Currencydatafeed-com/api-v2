# Swagger\Client\ForexApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertAmount**](ForexApi.md#convertamount) | **GET** /convert | Convert an amount between two currencies
[**getHistoricalOHLC**](ForexApi.md#gethistoricalohlc) | **GET** /history | Get historical OHLC data for a currency pair on a given date
[**getIntradayOHLC**](ForexApi.md#getintradayohlc) | **GET** /intraday | Get intraday (minute/hour) OHLC data for a symbol with flexible time selection
[**getLevels**](ForexApi.md#getlevels) | **GET** /levels | Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol
[**getLiveRates**](ForexApi.md#getliverates) | **GET** /live-rates | Get live forex prices
[**getOHLCByTimeframe**](ForexApi.md#getohlcbytimeframe) | **GET** /timeframe | Get historical OHLC data for a currency pair within a date range
[**getPerformance**](ForexApi.md#getperformance) | **GET** /performance | Get percentage changes for a symbol for different periods
[**getRatesBySource**](ForexApi.md#getratesbysource) | **GET** /source | Get rates with other currencies using a custom base currency
[**getTechnicalAnalysis**](ForexApi.md#gettechnicalanalysis) | **GET** /ta | Get technical analysis indicators for a symbol (Ema &amp; Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

# **convertAmount**
> \Swagger\Client\Model\InlineResponse2003 convertAmount($from, $to, $amount)

Convert an amount between two currencies

Converts a specified amount from one currency to another, returning the latest available rate and result. Direct, reverse, or USD-intermediate conversion is used as needed. All parameters are required.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$from = "from_example"; // string | The source currency code (e.g., `EUR`).
$to = "to_example"; // string | The target currency code (e.g., `TRY`).
$amount = 1.2; // float | The amount to convert.

try {
    $result = $apiInstance->convertAmount($from, $to, $amount);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->convertAmount: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **string**| The source currency code (e.g., &#x60;EUR&#x60;). |
 **to** | **string**| The target currency code (e.g., &#x60;TRY&#x60;). |
 **amount** | **float**| The amount to convert. |

### Return type

[**\Swagger\Client\Model\InlineResponse2003**](../Model/InlineResponse2003.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getHistoricalOHLC**
> \Swagger\Client\Model\InlineResponse2005 getHistoricalOHLC($symbol, $date)

Get historical OHLC data for a currency pair on a given date

Returns historical open, high, low, and close values for one or more currency pairs on a specific date. If direct data is not available for a pair, the system attempts to reverse the pair. Returns an error if the date is more than 4 years in the past. Requires authentication and a subscription with historical access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | One or more currency pairs, separated by spaces.   Example: `EURUSD USDTRY`
$date = new \DateTime("2013-10-20"); // \DateTime | The date to query in YYYY-MM-DD format.

try {
    $result = $apiInstance->getHistoricalOHLC($symbol, $date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getHistoricalOHLC: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| One or more currency pairs, separated by spaces.   Example: &#x60;EURUSD USDTRY&#x60; |
 **date** | **\DateTime**| The date to query in YYYY-MM-DD format. |

### Return type

[**\Swagger\Client\Model\InlineResponse2005**](../Model/InlineResponse2005.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getIntradayOHLC**
> \Swagger\Client\Model\InlineResponse2007 getIntradayOHLC($symbol, $interval, $last, $hours, $from, $to)

Get intraday (minute/hour) OHLC data for a symbol with flexible time selection

Returns intraday open, high, low, and close (OHLC) data for a symbol, supporting multiple time selection modes: - **last:** Most recent N records - **hours:** Records for the last N hours - **from/to:** Records between custom date ranges The `interval` parameter is required (valid values: 1, 5, 15, 60 for minutes/hours). You must specify **exactly one** of the following: `last`, `hours`, or both `from` and `to`. Requires authentication and subscription with intraday/minute OHLC access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | The symbol/pair to query (e.g. `EURUSD`)
$interval = 56; // int | Data interval in minutes: - 1 = 1 minute - 5 = 5 minutes - 15 = 15 minutes - 60 = 1 hour
$last = 56; // int | Number of most recent records to return (exclusive with hours/from/to)
$hours = 56; // int | Records for the last N hours (exclusive with last/from/to)
$from = new \DateTime("2013-10-20"); // \DateTime | Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than `to`
$to = new \DateTime("2013-10-20"); // \DateTime | End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than `from`

try {
    $result = $apiInstance->getIntradayOHLC($symbol, $interval, $last, $hours, $from, $to);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getIntradayOHLC: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) |
 **interval** | **int**| Data interval in minutes: - 1 &#x3D; 1 minute - 5 &#x3D; 5 minutes - 15 &#x3D; 15 minutes - 60 &#x3D; 1 hour |
 **last** | **int**| Number of most recent records to return (exclusive with hours/from/to) | [optional]
 **hours** | **int**| Records for the last N hours (exclusive with last/from/to) | [optional]
 **from** | **\DateTime**| Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than &#x60;to&#x60; | [optional]
 **to** | **\DateTime**| End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than &#x60;from&#x60; | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse2007**](../Model/InlineResponse2007.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLevels**
> \Swagger\Client\Model\InlineResponse2008 getLevels($symbol)

Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol

Returns pivot points (pivot, support/resistance levels) and Bollinger Bands for the latest data of the specified symbol. Requires authentication and a subscription with technical analysis (TA) access. If not enough historical data is available for Bollinger Bands (minimum 20 periods), the endpoint returns an error for that calculation.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | The symbol/pair to query (e.g. `EURUSD`)

try {
    $result = $apiInstance->getLevels($symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getLevels: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) |

### Return type

[**\Swagger\Client\Model\InlineResponse2008**](../Model/InlineResponse2008.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLiveRates**
> \Swagger\Client\Model\InlineResponse2001 getLiveRates($symbol)

Get live forex prices

Returns the latest live rates for all supported forex currency pairs.  You can request specific pairs by providing a comma-separated list of symbols in the `symbol` parameter, e.g. `EURUSD,GBPUSD,USDSEK`.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | Comma-separated list of currency pairs to filter the results (e.g. `EURUSD,GBPUSD,USDSEK`). If not provided, all pairs are returned.

try {
    $result = $apiInstance->getLiveRates($symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getLiveRates: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| Comma-separated list of currency pairs to filter the results (e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;). If not provided, all pairs are returned. | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse2001**](../Model/InlineResponse2001.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOHLCByTimeframe**
> \Swagger\Client\Model\InlineResponse2006 getOHLCByTimeframe($currency, $from, $to)

Get historical OHLC data for a currency pair within a date range

Returns historical open, high, low, and close (OHLC) data for a currency pair over a specified date range. Maximum 8 years of data can be queried at once.   Requires authentication and a subscription with timeframe query access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$currency = "currency_example"; // string | Currency pair symbol (e.g. `EURUSD`)
$from = new \DateTime("2013-10-20"); // \DateTime | Start date (YYYY-MM-DD), must be older than `to`
$to = new \DateTime("2013-10-20"); // \DateTime | End date (YYYY-MM-DD), must be newer than `from`

try {
    $result = $apiInstance->getOHLCByTimeframe($currency, $from, $to);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getOHLCByTimeframe: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **string**| Currency pair symbol (e.g. &#x60;EURUSD&#x60;) |
 **from** | **\DateTime**| Start date (YYYY-MM-DD), must be older than &#x60;to&#x60; |
 **to** | **\DateTime**| End date (YYYY-MM-DD), must be newer than &#x60;from&#x60; |

### Return type

[**\Swagger\Client\Model\InlineResponse2006**](../Model/InlineResponse2006.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPerformance**
> \Swagger\Client\Model\InlineResponse2004 getPerformance($symbol)

Get percentage changes for a symbol for different periods

Returns the percentage change in price for the given symbol over several time intervals (1 hour, 4 hours, 1 day, 7 days, 30 days, 90 days, 180 days, 270 days, 365 days, 720 days). Requires authentication and an active subscription with gainers/losers access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | The symbol code to query (e.g. `EURUSD`).

try {
    $result = $apiInstance->getPerformance($symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getPerformance: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| The symbol code to query (e.g. &#x60;EURUSD&#x60;). |

### Return type

[**\Swagger\Client\Model\InlineResponse2004**](../Model/InlineResponse2004.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getRatesBySource**
> \Swagger\Client\Model\InlineResponse2002[] getRatesBySource($source, $target)

Get rates with other currencies using a custom base currency

Returns the latest exchange rates for one or more target currencies, using the specified base currency as the reference. Provide the base (source) and one or more target currencies (comma-separated) in the query string.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$source = "source_example"; // string | The base currency to use for conversion (e.g., `SEK`).
$target = array("target_example"); // string[] | One or more target currencies to return rates for, separated by a comma (e.g., `TRY,GBP`).

try {
    $result = $apiInstance->getRatesBySource($source, $target);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getRatesBySource: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **string**| The base currency to use for conversion (e.g., &#x60;SEK&#x60;). |
 **target** | [**string[]**](../Model/string.md)| One or more target currencies to return rates for, separated by a comma (e.g., &#x60;TRY,GBP&#x60;). |

### Return type

[**\Swagger\Client\Model\InlineResponse2002[]**](../Model/InlineResponse2002.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTechnicalAnalysis**
> \Swagger\Client\Model\InlineResponse2009 getTechnicalAnalysis($symbol, $days)

Get technical analysis indicators for a symbol (Ema & Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

Returns a range of daily technical analysis indicators for the specified symbol (up to 720 days). Includes MACD, RSI, moving averages, Stochastic, ADX, CCI, Williams %R, and more. Requires authentication and a subscription with technical analysis (TA) access.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');
    // Configure HTTP bearer authorization: bearerAuth
    $config = Swagger\Client\Configuration::getDefaultConfiguration()
    ->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new Swagger\Client\Api\ForexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$symbol = "symbol_example"; // string | The symbol/pair to query (e.g. `EURUSD`)
$days = 56; // int | Number of days to return (default: 365, max: 720)

try {
    $result = $apiInstance->getTechnicalAnalysis($symbol, $days);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ForexApi->getTechnicalAnalysis: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **string**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) |
 **days** | **int**| Number of days to return (default: 365, max: 720) | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse2009**](../Model/InlineResponse2009.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

