# {{classname}}

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ConvertAmount**](ForexApi.md#ConvertAmount) | **Get** /convert | Convert an amount between two currencies
[**GetHistoricalOHLC**](ForexApi.md#GetHistoricalOHLC) | **Get** /history | Get historical OHLC data for a currency pair on a given date
[**GetIntradayOHLC**](ForexApi.md#GetIntradayOHLC) | **Get** /intraday | Get intraday (minute/hour) OHLC data for a symbol with flexible time selection
[**GetLevels**](ForexApi.md#GetLevels) | **Get** /levels | Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol
[**GetLiveRates**](ForexApi.md#GetLiveRates) | **Get** /live-rates | Get live forex prices
[**GetOHLCByTimeframe**](ForexApi.md#GetOHLCByTimeframe) | **Get** /timeframe | Get historical OHLC data for a currency pair within a date range
[**GetPerformance**](ForexApi.md#GetPerformance) | **Get** /performance | Get percentage changes for a symbol for different periods
[**GetRatesBySource**](ForexApi.md#GetRatesBySource) | **Get** /source | Get rates with other currencies using a custom base currency
[**GetTechnicalAnalysis**](ForexApi.md#GetTechnicalAnalysis) | **Get** /ta | Get technical analysis indicators for a symbol (Ema &amp; Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

# **ConvertAmount**
> InlineResponse2003 ConvertAmount(ctx, from, to, amount)
Convert an amount between two currencies

Converts a specified amount from one currency to another, returning the latest available rate and result. Direct, reverse, or USD-intermediate conversion is used as needed. All parameters are required. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **from** | **string**| The source currency code (e.g., &#x60;EUR&#x60;). | 
  **to** | **string**| The target currency code (e.g., &#x60;TRY&#x60;). | 
  **amount** | **float64**| The amount to convert. | 

### Return type

[**InlineResponse2003**](inline_response_200_3.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetHistoricalOHLC**
> InlineResponse2005 GetHistoricalOHLC(ctx, symbol, date)
Get historical OHLC data for a currency pair on a given date

Returns historical open, high, low, and close values for one or more currency pairs on a specific date. If direct data is not available for a pair, the system attempts to reverse the pair. Returns an error if the date is more than 4 years in the past. Requires authentication and a subscription with historical access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| One or more currency pairs, separated by spaces.   Example: &#x60;EURUSD USDTRY&#x60;  | 
  **date** | **string**| The date to query in YYYY-MM-DD format. | 

### Return type

[**InlineResponse2005**](inline_response_200_5.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetIntradayOHLC**
> InlineResponse2007 GetIntradayOHLC(ctx, symbol, interval, optional)
Get intraday (minute/hour) OHLC data for a symbol with flexible time selection

Returns intraday open, high, low, and close (OHLC) data for a symbol, supporting multiple time selection modes: - **last:** Most recent N records - **hours:** Records for the last N hours - **from/to:** Records between custom date ranges The `interval` parameter is required (valid values: 1, 5, 15, 60 for minutes/hours). You must specify **exactly one** of the following: `last`, `hours`, or both `from` and `to`. Requires authentication and subscription with intraday/minute OHLC access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 
  **interval** | **int32**| Data interval in minutes: - 1 &#x3D; 1 minute - 5 &#x3D; 5 minutes - 15 &#x3D; 15 minutes - 60 &#x3D; 1 hour  | 
 **optional** | ***ForexApiGetIntradayOHLCOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ForexApiGetIntradayOHLCOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **last** | **optional.Int32**| Number of most recent records to return (exclusive with hours/from/to) | 
 **hours** | **optional.Int32**| Records for the last N hours (exclusive with last/from/to) | 
 **from** | **optional.String**| Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than &#x60;to&#x60; | 
 **to** | **optional.String**| End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than &#x60;from&#x60; | 

### Return type

[**InlineResponse2007**](inline_response_200_7.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetLevels**
> InlineResponse2008 GetLevels(ctx, symbol)
Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol

Returns pivot points (pivot, support/resistance levels) and Bollinger Bands for the latest data of the specified symbol. Requires authentication and a subscription with technical analysis (TA) access. If not enough historical data is available for Bollinger Bands (minimum 20 periods), the endpoint returns an error for that calculation. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 

### Return type

[**InlineResponse2008**](inline_response_200_8.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetLiveRates**
> InlineResponse2001 GetLiveRates(ctx, optional)
Get live forex prices

Returns the latest live rates for all supported forex currency pairs.  You can request specific pairs by providing a comma-separated list of symbols in the `symbol` parameter, e.g. `EURUSD,GBPUSD,USDSEK`. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ForexApiGetLiveRatesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ForexApiGetLiveRatesOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **optional.String**| Comma-separated list of currency pairs to filter the results (e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;). If not provided, all pairs are returned.  | 

### Return type

[**InlineResponse2001**](inline_response_200_1.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetOHLCByTimeframe**
> InlineResponse2006 GetOHLCByTimeframe(ctx, currency, from, to)
Get historical OHLC data for a currency pair within a date range

Returns historical open, high, low, and close (OHLC) data for a currency pair over a specified date range. Maximum 8 years of data can be queried at once.   Requires authentication and a subscription with timeframe query access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **currency** | **string**| Currency pair symbol (e.g. &#x60;EURUSD&#x60;) | 
  **from** | **string**| Start date (YYYY-MM-DD), must be older than &#x60;to&#x60; | 
  **to** | **string**| End date (YYYY-MM-DD), must be newer than &#x60;from&#x60; | 

### Return type

[**InlineResponse2006**](inline_response_200_6.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetPerformance**
> InlineResponse2004 GetPerformance(ctx, symbol)
Get percentage changes for a symbol for different periods

Returns the percentage change in price for the given symbol over several time intervals (1 hour, 4 hours, 1 day, 7 days, 30 days, 90 days, 180 days, 270 days, 365 days, 720 days). Requires authentication and an active subscription with gainers/losers access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| The symbol code to query (e.g. &#x60;EURUSD&#x60;). | 

### Return type

[**InlineResponse2004**](inline_response_200_4.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetRatesBySource**
> []InlineResponse2002 GetRatesBySource(ctx, source, target)
Get rates with other currencies using a custom base currency

Returns the latest exchange rates for one or more target currencies, using the specified base currency as the reference. Provide the base (source) and one or more target currencies (comma-separated) in the query string. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **source** | **string**| The base currency to use for conversion (e.g., &#x60;SEK&#x60;).  | 
  **target** | [**[]string**](string.md)| One or more target currencies to return rates for, separated by a comma (e.g., &#x60;TRY,GBP&#x60;).  | 

### Return type

[**[]InlineResponse2002**](inline_response_200_2.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetTechnicalAnalysis**
> InlineResponse2009 GetTechnicalAnalysis(ctx, symbol, optional)
Get technical analysis indicators for a symbol (Ema & Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

Returns a range of daily technical analysis indicators for the specified symbol (up to 720 days). Includes MACD, RSI, moving averages, Stochastic, ADX, CCI, Williams %R, and more. Requires authentication and a subscription with technical analysis (TA) access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 
 **optional** | ***ForexApiGetTechnicalAnalysisOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ForexApiGetTechnicalAnalysisOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **days** | **optional.Int32**| Number of days to return (default: 365, max: 720)  | 

### Return type

[**InlineResponse2009**](inline_response_200_9.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

