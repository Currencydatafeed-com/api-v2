# CryptoCurrencyApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCryptoExtendedHistory**](CryptoCurrencyApi.md#getCryptoExtendedHistory) | **GET** /crypto-extended-history | Get extended historical close prices for a specific crypto pair on an exchange
[**getCryptoExtendedMinuteHistory**](CryptoCurrencyApi.md#getCryptoExtendedMinuteHistory) | **GET** /crypto-extended-history-1m | Get intraday (minute-level) price history for a specific crypto pair on an exchange
[**getCryptoHistory**](CryptoCurrencyApi.md#getCryptoHistory) | **GET** /crypto-history | Get historical close prices for a cryptocurrency
[**getCryptoLive**](CryptoCurrencyApi.md#getCryptoLive) | **GET** /crypto-live | Get live data for one or more cryptocurrencies
[**getCryptoLiveByExchange**](CryptoCurrencyApi.md#getCryptoLiveByExchange) | **GET** /crypto-live-exchange | Get live crypto data for all pairs from a specific exchange
[**getCryptoLiveExtended**](CryptoCurrencyApi.md#getCryptoLiveExtended) | **GET** /crypto-live-extended | Get extended live data for one or more crypto pairs from specific exchanges
[**getCryptoMarketFearGreedIndex**](CryptoCurrencyApi.md#getCryptoMarketFearGreedIndex) | **GET** /crypto-fg | Get Crypto Market Fear &amp; Greed Index
[**getCryptoMinuteHistory**](CryptoCurrencyApi.md#getCryptoMinuteHistory) | **GET** /crypto-history-1m | Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
[**getCryptoOnchainMetrics**](CryptoCurrencyApi.md#getCryptoOnchainMetrics) | **GET** /crypto-onchain | Get on-chain metrics for Bitcoin and crypto markets
[**getCryptoPerformance**](CryptoCurrencyApi.md#getCryptoPerformance) | **GET** /crypto-performance | Get performance of a single cryptocurrency over various periods

<a name="getCryptoExtendedHistory"></a>
# **getCryptoExtendedHistory**
> InlineResponse20015 getCryptoExtendedHistory(symbol, period)

Get extended historical close prices for a specific crypto pair on an exchange

Returns the daily closing price history for a single cryptocurrency trading pair on a specific exchange (e.g. &#x60;LTCUSDT@binance&#x60;). Requires authentication and a subscription with historical access.  - &#x60;symbol&#x60; parameter accepts a single value, formatted as &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;). - &#x60;period&#x60; parameter is required, integer, maximum as supported (suggest up to 1825 for 5 years). 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | Trading pair and exchange in the format `PAIR@exchange` (e.g. `LTCUSDT@binance`). 
val period : kotlin.Int = 56 // kotlin.Int | Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years). 
try {
    val result : InlineResponse20015 = apiInstance.getCryptoExtendedHistory(symbol, period)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoExtendedHistory")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoExtendedHistory")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;LTCUSDT@binance&#x60;).  |
 **period** | **kotlin.Int**| Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years).  | [enum: 1, 1825]

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoExtendedMinuteHistory"></a>
# **getCryptoExtendedMinuteHistory**
> InlineResponse20016 getCryptoExtendedMinuteHistory(symbol, hours)

Get intraday (minute-level) price history for a specific crypto pair on an exchange

Returns minute-level price history (close prices and timestamps) for a single crypto trading pair on a specific exchange.   The &#x60;symbol&#x60; parameter expects the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;).  - Requires authentication and subscription with historical access. - &#x60;hours&#x60; parameter: Maximum 48 (last 48 hours). 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | Trading pair and exchange in the format `PAIR@exchange` (e.g. `BTCUSDT@binance`). 
val hours : kotlin.Int = 56 // kotlin.Int | Number of hours of minute-level data to return (max 48). 
try {
    val result : InlineResponse20016 = apiInstance.getCryptoExtendedMinuteHistory(symbol, hours)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoExtendedMinuteHistory")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoExtendedMinuteHistory")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;).  |
 **hours** | **kotlin.Int**| Number of hours of minute-level data to return (max 48).  | [enum: 1, 48]

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoHistory"></a>
# **getCryptoHistory**
> InlineResponse20013 getCryptoHistory(symbol, period)

Get historical close prices for a cryptocurrency

Returns the daily closing price history for a single cryptocurrency symbol for up to 5 years (max 1825 days). Requires authentication and a subscription with historical access.  The &#x60;symbol&#x60; parameter accepts a single cryptocurrency code (e.g., &#x60;XRP&#x60;, &#x60;BTC&#x60;, &#x60;ETH&#x60;). 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | The cryptocurrency symbol (e.g. XRP, BTC, ETH).
val period : kotlin.Int = 56 // kotlin.Int | Number of daily data points to return (up to 1825; 5 years). 
try {
    val result : InlineResponse20013 = apiInstance.getCryptoHistory(symbol, period)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoHistory")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoHistory")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| The cryptocurrency symbol (e.g. XRP, BTC, ETH). |
 **period** | **kotlin.Int**| Number of daily data points to return (up to 1825; 5 years).  | [enum: 1, 1825]

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoLive"></a>
# **getCryptoLive**
> InlineResponse20010 getCryptoLive(symbol)

Get live data for one or more cryptocurrencies

Returns the latest price and daily metrics for one or more cryptocurrencies. Requires authentication and a subscription with crypto access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | One or more cryptocurrency symbols, separated by commas (e.g. `BTC,ETH,XRP`) 
try {
    val result : InlineResponse20010 = apiInstance.getCryptoLive(symbol)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoLive")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoLive")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| One or more cryptocurrency symbols, separated by commas (e.g. &#x60;BTC,ETH,XRP&#x60;)  |

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoLiveByExchange"></a>
# **getCryptoLiveByExchange**
> InlineResponse20012 getCryptoLiveByExchange(exchange)

Get live crypto data for all pairs from a specific exchange

Returns the latest live data for all cryptocurrency pairs from a specified exchange (market). Requires authentication and an appropriate subscription with on-chain access.  **The &#x60;exchange&#x60; parameter is required.**   For example: &#x60;binance&#x60;, &#x60;bybit&#x60;, etc. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val exchange : kotlin.String = exchange_example // kotlin.String | The market or exchange to get all pairs from (e.g. `binance`, `bybit`, etc.). 
try {
    val result : InlineResponse20012 = apiInstance.getCryptoLiveByExchange(exchange)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoLiveByExchange")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoLiveByExchange")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **kotlin.String**| The market or exchange to get all pairs from (e.g. &#x60;binance&#x60;, &#x60;bybit&#x60;, etc.).  |

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoLiveExtended"></a>
# **getCryptoLiveExtended**
> InlineResponse20011 getCryptoLiveExtended(symbol)

Get extended live data for one or more crypto pairs from specific exchanges

Returns the latest extended data for one or more cryptocurrency pairs from specific exchanges or markets. Requires authentication and a subscription with crypto access.  The &#x60;symbol&#x60; parameter accepts one or more pair-market combinations, separated by commas. - Example: &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60; 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | One or more cryptocurrency pairs (with market), separated by commas.   Format: `PAIR@market`, e.g. `BTCUSDT@binance,XRPUSDT@bybit` 
try {
    val result : InlineResponse20011 = apiInstance.getCryptoLiveExtended(symbol)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoLiveExtended")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoLiveExtended")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| One or more cryptocurrency pairs (with market), separated by commas.   Format: &#x60;PAIR@market&#x60;, e.g. &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60;  |

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoMarketFearGreedIndex"></a>
# **getCryptoMarketFearGreedIndex**
> InlineResponse20018 getCryptoMarketFearGreedIndex()

Get Crypto Market Fear &amp; Greed Index

Returns the daily crypto market Fear &amp; Greed Index as a time series from 2021-04-10 to today. Authentication and on-chain access subscription required. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
try {
    val result : InlineResponse20018 = apiInstance.getCryptoMarketFearGreedIndex()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoMarketFearGreedIndex")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoMarketFearGreedIndex")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoMinuteHistory"></a>
# **getCryptoMinuteHistory**
> InlineResponse20014 getCryptoMinuteHistory(symbol, hours)

Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)

Returns the 1-minute interval closing price history for a single cryptocurrency symbol for up to 48 hours. Requires authentication and a subscription with historical access.  - &#x60;symbol&#x60; parameter accepts a single cryptocurrency code (e.g., &#x60;ETH&#x60;, &#x60;BTC&#x60;). - &#x60;hours&#x60; parameter is required, integer, max 48. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | The cryptocurrency symbol (e.g. ETH, BTC, XRP).
val hours : kotlin.Int = 56 // kotlin.Int | Number of hours of minute-level historical data to return (up to 48 hours back). 
try {
    val result : InlineResponse20014 = apiInstance.getCryptoMinuteHistory(symbol, hours)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoMinuteHistory")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoMinuteHistory")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| The cryptocurrency symbol (e.g. ETH, BTC, XRP). |
 **hours** | **kotlin.Int**| Number of hours of minute-level historical data to return (up to 48 hours back).  | [enum: 1, 48]

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoOnchainMetrics"></a>
# **getCryptoOnchainMetrics**
> InlineResponse20017 getCryptoOnchainMetrics(type)

Get on-chain metrics for Bitcoin and crypto markets

Returns daily on-chain indicators as time series for Bitcoin and major crypto assets.   The &#x60;type&#x60; parameter selects the indicator to retrieve (e.g. whale flows, SOPR, Puell Multiple, MVRV, open interest, leverage, funding, active address ratio).  **Available types:**   - whale   - sopr   - puell   - mvrv   - open_interest   - leverage   - funding   - active_address  Requires authentication and subscription with on-chain access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val type : kotlin.String = type_example // kotlin.String | The type of on-chain metric to fetch
try {
    val result : InlineResponse20017 = apiInstance.getCryptoOnchainMetrics(type)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoOnchainMetrics")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoOnchainMetrics")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **kotlin.String**| The type of on-chain metric to fetch | [enum: whale, sopr, puell, mvrv, open_interest, leverage, funding, active_address]

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCryptoPerformance"></a>
# **getCryptoPerformance**
> InlineResponse20019 getCryptoPerformance(symbol)

Get performance of a single cryptocurrency over various periods

Returns the percentage change in price for a specified cryptocurrency (e.g., BTC, ETH) over several timeframes, including 1d, 7d, 15d, 30d, 90d, 180d, 270d, 365d, and 720d.   Authentication and a subscription with crypto performance access are required. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = CryptoCurrencyApi()
val symbol : kotlin.String = symbol_example // kotlin.String | Cryptocurrency symbol (e.g., BTC, ETH, XRP)
try {
    val result : InlineResponse20019 = apiInstance.getCryptoPerformance(symbol)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CryptoCurrencyApi#getCryptoPerformance")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CryptoCurrencyApi#getCryptoPerformance")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| Cryptocurrency symbol (e.g., BTC, ETH, XRP) |

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

