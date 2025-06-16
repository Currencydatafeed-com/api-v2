# {{classname}}

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetCryptoExtendedHistory**](CryptoCurrencyApi.md#GetCryptoExtendedHistory) | **Get** /crypto-extended-history | Get extended historical close prices for a specific crypto pair on an exchange
[**GetCryptoExtendedMinuteHistory**](CryptoCurrencyApi.md#GetCryptoExtendedMinuteHistory) | **Get** /crypto-extended-history-1m | Get intraday (minute-level) price history for a specific crypto pair on an exchange
[**GetCryptoHistory**](CryptoCurrencyApi.md#GetCryptoHistory) | **Get** /crypto-history | Get historical close prices for a cryptocurrency
[**GetCryptoLive**](CryptoCurrencyApi.md#GetCryptoLive) | **Get** /crypto-live | Get live data for one or more cryptocurrencies
[**GetCryptoLiveByExchange**](CryptoCurrencyApi.md#GetCryptoLiveByExchange) | **Get** /crypto-live-exchange | Get live crypto data for all pairs from a specific exchange
[**GetCryptoLiveExtended**](CryptoCurrencyApi.md#GetCryptoLiveExtended) | **Get** /crypto-live-extended | Get extended live data for one or more crypto pairs from specific exchanges
[**GetCryptoMarketFearGreedIndex**](CryptoCurrencyApi.md#GetCryptoMarketFearGreedIndex) | **Get** /crypto-fg | Get Crypto Market Fear &amp; Greed Index
[**GetCryptoMinuteHistory**](CryptoCurrencyApi.md#GetCryptoMinuteHistory) | **Get** /crypto-history-1m | Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
[**GetCryptoOnchainMetrics**](CryptoCurrencyApi.md#GetCryptoOnchainMetrics) | **Get** /crypto-onchain | Get on-chain metrics for Bitcoin and crypto markets
[**GetCryptoPerformance**](CryptoCurrencyApi.md#GetCryptoPerformance) | **Get** /crypto-performance | Get performance of a single cryptocurrency over various periods

# **GetCryptoExtendedHistory**
> InlineResponse20015 GetCryptoExtendedHistory(ctx, symbol, period)
Get extended historical close prices for a specific crypto pair on an exchange

Returns the daily closing price history for a single cryptocurrency trading pair on a specific exchange (e.g. `LTCUSDT@binance`). Requires authentication and a subscription with historical access.  - `symbol` parameter accepts a single value, formatted as `PAIR@exchange` (e.g. `BTCUSDT@binance`). - `period` parameter is required, integer, maximum as supported (suggest up to 1825 for 5 years). 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;LTCUSDT@binance&#x60;).  | 
  **period** | **int32**| Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years).  | 

### Return type

[**InlineResponse20015**](inline_response_200_15.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoExtendedMinuteHistory**
> InlineResponse20016 GetCryptoExtendedMinuteHistory(ctx, symbol, hours)
Get intraday (minute-level) price history for a specific crypto pair on an exchange

Returns minute-level price history (close prices and timestamps) for a single crypto trading pair on a specific exchange.   The `symbol` parameter expects the format `PAIR@exchange` (e.g. `BTCUSDT@binance`).  - Requires authentication and subscription with historical access. - `hours` parameter: Maximum 48 (last 48 hours). 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;).  | 
  **hours** | **int32**| Number of hours of minute-level data to return (max 48).  | 

### Return type

[**InlineResponse20016**](inline_response_200_16.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoHistory**
> InlineResponse20013 GetCryptoHistory(ctx, symbol, period)
Get historical close prices for a cryptocurrency

Returns the daily closing price history for a single cryptocurrency symbol for up to 5 years (max 1825 days). Requires authentication and a subscription with historical access.  The `symbol` parameter accepts a single cryptocurrency code (e.g., `XRP`, `BTC`, `ETH`). 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| The cryptocurrency symbol (e.g. XRP, BTC, ETH). | 
  **period** | **int32**| Number of daily data points to return (up to 1825; 5 years).  | 

### Return type

[**InlineResponse20013**](inline_response_200_13.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoLive**
> InlineResponse20010 GetCryptoLive(ctx, symbol)
Get live data for one or more cryptocurrencies

Returns the latest price and daily metrics for one or more cryptocurrencies. Requires authentication and a subscription with crypto access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| One or more cryptocurrency symbols, separated by commas (e.g. &#x60;BTC,ETH,XRP&#x60;)  | 

### Return type

[**InlineResponse20010**](inline_response_200_10.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoLiveByExchange**
> InlineResponse20012 GetCryptoLiveByExchange(ctx, exchange)
Get live crypto data for all pairs from a specific exchange

Returns the latest live data for all cryptocurrency pairs from a specified exchange (market). Requires authentication and an appropriate subscription with on-chain access.  **The `exchange` parameter is required.**   For example: `binance`, `bybit`, etc. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **exchange** | **string**| The market or exchange to get all pairs from (e.g. &#x60;binance&#x60;, &#x60;bybit&#x60;, etc.).  | 

### Return type

[**InlineResponse20012**](inline_response_200_12.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoLiveExtended**
> InlineResponse20011 GetCryptoLiveExtended(ctx, symbol)
Get extended live data for one or more crypto pairs from specific exchanges

Returns the latest extended data for one or more cryptocurrency pairs from specific exchanges or markets. Requires authentication and a subscription with crypto access.  The `symbol` parameter accepts one or more pair-market combinations, separated by commas. - Example: `BTCUSDT@binance,XRPUSDT@bybit` 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| One or more cryptocurrency pairs (with market), separated by commas.   Format: &#x60;PAIR@market&#x60;, e.g. &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60;  | 

### Return type

[**InlineResponse20011**](inline_response_200_11.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoMarketFearGreedIndex**
> InlineResponse20018 GetCryptoMarketFearGreedIndex(ctx, )
Get Crypto Market Fear & Greed Index

Returns the daily crypto market Fear & Greed Index as a time series from 2021-04-10 to today. Authentication and on-chain access subscription required. 

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20018**](inline_response_200_18.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoMinuteHistory**
> InlineResponse20014 GetCryptoMinuteHistory(ctx, symbol, hours)
Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)

Returns the 1-minute interval closing price history for a single cryptocurrency symbol for up to 48 hours. Requires authentication and a subscription with historical access.  - `symbol` parameter accepts a single cryptocurrency code (e.g., `ETH`, `BTC`). - `hours` parameter is required, integer, max 48. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| The cryptocurrency symbol (e.g. ETH, BTC, XRP). | 
  **hours** | **int32**| Number of hours of minute-level historical data to return (up to 48 hours back).  | 

### Return type

[**InlineResponse20014**](inline_response_200_14.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoOnchainMetrics**
> InlineResponse20017 GetCryptoOnchainMetrics(ctx, type_)
Get on-chain metrics for Bitcoin and crypto markets

Returns daily on-chain indicators as time series for Bitcoin and major crypto assets.   The `type` parameter selects the indicator to retrieve (e.g. whale flows, SOPR, Puell Multiple, MVRV, open interest, leverage, funding, active address ratio).  **Available types:**   - whale   - sopr   - puell   - mvrv   - open_interest   - leverage   - funding   - active_address  Requires authentication and subscription with on-chain access. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **type_** | **string**| The type of on-chain metric to fetch | 

### Return type

[**InlineResponse20017**](inline_response_200_17.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetCryptoPerformance**
> InlineResponse20019 GetCryptoPerformance(ctx, symbol)
Get performance of a single cryptocurrency over various periods

Returns the percentage change in price for a specified cryptocurrency (e.g., BTC, ETH) over several timeframes, including 1d, 7d, 15d, 30d, 90d, 180d, 270d, 365d, and 720d.   Authentication and a subscription with crypto performance access are required. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **symbol** | **string**| Cryptocurrency symbol (e.g., BTC, ETH, XRP) | 

### Return type

[**InlineResponse20019**](inline_response_200_19.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

