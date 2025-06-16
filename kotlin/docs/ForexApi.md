# ForexApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertAmount**](ForexApi.md#convertAmount) | **GET** /convert | Convert an amount between two currencies
[**getHistoricalOHLC**](ForexApi.md#getHistoricalOHLC) | **GET** /history | Get historical OHLC data for a currency pair on a given date
[**getIntradayOHLC**](ForexApi.md#getIntradayOHLC) | **GET** /intraday | Get intraday (minute/hour) OHLC data for a symbol with flexible time selection
[**getLevels**](ForexApi.md#getLevels) | **GET** /levels | Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol
[**getLiveRates**](ForexApi.md#getLiveRates) | **GET** /live-rates | Get live forex prices
[**getOHLCByTimeframe**](ForexApi.md#getOHLCByTimeframe) | **GET** /timeframe | Get historical OHLC data for a currency pair within a date range
[**getPerformance**](ForexApi.md#getPerformance) | **GET** /performance | Get percentage changes for a symbol for different periods
[**getRatesBySource**](ForexApi.md#getRatesBySource) | **GET** /source | Get rates with other currencies using a custom base currency
[**getTechnicalAnalysis**](ForexApi.md#getTechnicalAnalysis) | **GET** /ta | Get technical analysis indicators for a symbol (Ema &amp; Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

<a name="convertAmount"></a>
# **convertAmount**
> InlineResponse2003 convertAmount(from, to, amount)

Convert an amount between two currencies

Converts a specified amount from one currency to another, returning the latest available rate and result. Direct, reverse, or USD-intermediate conversion is used as needed. All parameters are required. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val from : kotlin.String = from_example // kotlin.String | The source currency code (e.g., `EUR`).
val to : kotlin.String = to_example // kotlin.String | The target currency code (e.g., `TRY`).
val amount : java.math.BigDecimal = 1.2 // java.math.BigDecimal | The amount to convert.
try {
    val result : InlineResponse2003 = apiInstance.convertAmount(from, to, amount)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#convertAmount")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#convertAmount")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **kotlin.String**| The source currency code (e.g., &#x60;EUR&#x60;). |
 **to** | **kotlin.String**| The target currency code (e.g., &#x60;TRY&#x60;). |
 **amount** | **java.math.BigDecimal**| The amount to convert. |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricalOHLC"></a>
# **getHistoricalOHLC**
> InlineResponse2005 getHistoricalOHLC(symbol, date)

Get historical OHLC data for a currency pair on a given date

Returns historical open, high, low, and close values for one or more currency pairs on a specific date. If direct data is not available for a pair, the system attempts to reverse the pair. Returns an error if the date is more than 4 years in the past. Requires authentication and a subscription with historical access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val symbol : kotlin.String = symbol_example // kotlin.String | One or more currency pairs, separated by spaces.   Example: `EURUSD USDTRY` 
val date : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | The date to query in YYYY-MM-DD format.
try {
    val result : InlineResponse2005 = apiInstance.getHistoricalOHLC(symbol, date)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getHistoricalOHLC")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getHistoricalOHLC")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| One or more currency pairs, separated by spaces.   Example: &#x60;EURUSD USDTRY&#x60;  |
 **date** | **java.time.LocalDate**| The date to query in YYYY-MM-DD format. |

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIntradayOHLC"></a>
# **getIntradayOHLC**
> InlineResponse2007 getIntradayOHLC(symbol, interval, last, hours, from, to)

Get intraday (minute/hour) OHLC data for a symbol with flexible time selection

Returns intraday open, high, low, and close (OHLC) data for a symbol, supporting multiple time selection modes: - **last:** Most recent N records - **hours:** Records for the last N hours - **from/to:** Records between custom date ranges The &#x60;interval&#x60; parameter is required (valid values: 1, 5, 15, 60 for minutes/hours). You must specify **exactly one** of the following: &#x60;last&#x60;, &#x60;hours&#x60;, or both &#x60;from&#x60; and &#x60;to&#x60;. Requires authentication and subscription with intraday/minute OHLC access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val symbol : kotlin.String = symbol_example // kotlin.String | The symbol/pair to query (e.g. `EURUSD`)
val interval : kotlin.Int = 56 // kotlin.Int | Data interval in minutes: - 1 = 1 minute - 5 = 5 minutes - 15 = 15 minutes - 60 = 1 hour 
val last : kotlin.Int = 56 // kotlin.Int | Number of most recent records to return (exclusive with hours/from/to)
val hours : kotlin.Int = 56 // kotlin.Int | Records for the last N hours (exclusive with last/from/to)
val from : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than `to`
val to : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than `from`
try {
    val result : InlineResponse2007 = apiInstance.getIntradayOHLC(symbol, interval, last, hours, from, to)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getIntradayOHLC")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getIntradayOHLC")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) |
 **interval** | **kotlin.Int**| Data interval in minutes: - 1 &#x3D; 1 minute - 5 &#x3D; 5 minutes - 15 &#x3D; 15 minutes - 60 &#x3D; 1 hour  | [enum: 1, 5, 15, 60]
 **last** | **kotlin.Int**| Number of most recent records to return (exclusive with hours/from/to) | [optional] [enum: 1]
 **hours** | **kotlin.Int**| Records for the last N hours (exclusive with last/from/to) | [optional] [enum: 1]
 **from** | **java.time.LocalDate**| Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than &#x60;to&#x60; | [optional]
 **to** | **java.time.LocalDate**| End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than &#x60;from&#x60; | [optional]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLevels"></a>
# **getLevels**
> InlineResponse2008 getLevels(symbol)

Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol

Returns pivot points (pivot, support/resistance levels) and Bollinger Bands for the latest data of the specified symbol. Requires authentication and a subscription with technical analysis (TA) access. If not enough historical data is available for Bollinger Bands (minimum 20 periods), the endpoint returns an error for that calculation. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val symbol : kotlin.String = symbol_example // kotlin.String | The symbol/pair to query (e.g. `EURUSD`)
try {
    val result : InlineResponse2008 = apiInstance.getLevels(symbol)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getLevels")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getLevels")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) |

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLiveRates"></a>
# **getLiveRates**
> InlineResponse2001 getLiveRates(symbol)

Get live forex prices

Returns the latest live rates for all supported forex currency pairs.  You can request specific pairs by providing a comma-separated list of symbols in the &#x60;symbol&#x60; parameter, e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val symbol : kotlin.String = symbol_example // kotlin.String | Comma-separated list of currency pairs to filter the results (e.g. `EURUSD,GBPUSD,USDSEK`). If not provided, all pairs are returned. 
try {
    val result : InlineResponse2001 = apiInstance.getLiveRates(symbol)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getLiveRates")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getLiveRates")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| Comma-separated list of currency pairs to filter the results (e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;). If not provided, all pairs are returned.  | [optional]

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOHLCByTimeframe"></a>
# **getOHLCByTimeframe**
> InlineResponse2006 getOHLCByTimeframe(currency, from, to)

Get historical OHLC data for a currency pair within a date range

Returns historical open, high, low, and close (OHLC) data for a currency pair over a specified date range. Maximum 8 years of data can be queried at once.   Requires authentication and a subscription with timeframe query access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val currency : kotlin.String = currency_example // kotlin.String | Currency pair symbol (e.g. `EURUSD`)
val from : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | Start date (YYYY-MM-DD), must be older than `to`
val to : java.time.LocalDate = 2013-10-20 // java.time.LocalDate | End date (YYYY-MM-DD), must be newer than `from`
try {
    val result : InlineResponse2006 = apiInstance.getOHLCByTimeframe(currency, from, to)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getOHLCByTimeframe")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getOHLCByTimeframe")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **kotlin.String**| Currency pair symbol (e.g. &#x60;EURUSD&#x60;) |
 **from** | **java.time.LocalDate**| Start date (YYYY-MM-DD), must be older than &#x60;to&#x60; |
 **to** | **java.time.LocalDate**| End date (YYYY-MM-DD), must be newer than &#x60;from&#x60; |

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPerformance"></a>
# **getPerformance**
> InlineResponse2004 getPerformance(symbol)

Get percentage changes for a symbol for different periods

Returns the percentage change in price for the given symbol over several time intervals (1 hour, 4 hours, 1 day, 7 days, 30 days, 90 days, 180 days, 270 days, 365 days, 720 days). Requires authentication and an active subscription with gainers/losers access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val symbol : kotlin.String = symbol_example // kotlin.String | The symbol code to query (e.g. `EURUSD`).
try {
    val result : InlineResponse2004 = apiInstance.getPerformance(symbol)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getPerformance")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getPerformance")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| The symbol code to query (e.g. &#x60;EURUSD&#x60;). |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRatesBySource"></a>
# **getRatesBySource**
> kotlin.Array&lt;InlineResponse2002&gt; getRatesBySource(source, target)

Get rates with other currencies using a custom base currency

Returns the latest exchange rates for one or more target currencies, using the specified base currency as the reference. Provide the base (source) and one or more target currencies (comma-separated) in the query string. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val source : kotlin.String = source_example // kotlin.String | The base currency to use for conversion (e.g., `SEK`). 
val target : kotlin.Array<kotlin.String> =  // kotlin.Array<kotlin.String> | One or more target currencies to return rates for, separated by a comma (e.g., `TRY,GBP`). 
try {
    val result : kotlin.Array<InlineResponse2002> = apiInstance.getRatesBySource(source, target)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getRatesBySource")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getRatesBySource")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **kotlin.String**| The base currency to use for conversion (e.g., &#x60;SEK&#x60;).  |
 **target** | [**kotlin.Array&lt;kotlin.String&gt;**](kotlin.String.md)| One or more target currencies to return rates for, separated by a comma (e.g., &#x60;TRY,GBP&#x60;).  |

### Return type

[**kotlin.Array&lt;InlineResponse2002&gt;**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTechnicalAnalysis"></a>
# **getTechnicalAnalysis**
> InlineResponse2009 getTechnicalAnalysis(symbol, days)

Get technical analysis indicators for a symbol (Ema &amp; Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

Returns a range of daily technical analysis indicators for the specified symbol (up to 720 days). Includes MACD, RSI, moving averages, Stochastic, ADX, CCI, Williams %R, and more. Requires authentication and a subscription with technical analysis (TA) access. 

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = ForexApi()
val symbol : kotlin.String = symbol_example // kotlin.String | The symbol/pair to query (e.g. `EURUSD`)
val days : kotlin.Int = 56 // kotlin.Int | Number of days to return (default: 365, max: 720) 
try {
    val result : InlineResponse2009 = apiInstance.getTechnicalAnalysis(symbol, days)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ForexApi#getTechnicalAnalysis")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ForexApi#getTechnicalAnalysis")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **kotlin.String**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) |
 **days** | **kotlin.Int**| Number of days to return (default: 365, max: 720)  | [optional] [enum: 1, 720]

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

