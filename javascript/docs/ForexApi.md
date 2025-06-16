# CurrencydatafeedcomApiV2.ForexApi

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
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let from = "from_example"; // String | The source currency code (e.g., `EUR`).
let to = "to_example"; // String | The target currency code (e.g., `TRY`).
let amount = 1.2; // Number | The amount to convert.

apiInstance.convertAmount(from, to, amount, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| The source currency code (e.g., &#x60;EUR&#x60;). | 
 **to** | **String**| The target currency code (e.g., &#x60;TRY&#x60;). | 
 **amount** | **Number**| The amount to convert. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHistoricalOHLC"></a>
# **getHistoricalOHLC**
> InlineResponse2005 getHistoricalOHLC(symbol, _date)

Get historical OHLC data for a currency pair on a given date

Returns historical open, high, low, and close values for one or more currency pairs on a specific date. If direct data is not available for a pair, the system attempts to reverse the pair. Returns an error if the date is more than 4 years in the past. Requires authentication and a subscription with historical access. 

### Example
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let symbol = "symbol_example"; // String | One or more currency pairs, separated by spaces.   Example: `EURUSD USDTRY` 
let _date = new Date("2013-10-20"); // Date | The date to query in YYYY-MM-DD format.

apiInstance.getHistoricalOHLC(symbol, _date, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| One or more currency pairs, separated by spaces.   Example: &#x60;EURUSD USDTRY&#x60;  | 
 **_date** | **Date**| The date to query in YYYY-MM-DD format. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIntradayOHLC"></a>
# **getIntradayOHLC**
> InlineResponse2007 getIntradayOHLC(symbol, interval, opts)

Get intraday (minute/hour) OHLC data for a symbol with flexible time selection

Returns intraday open, high, low, and close (OHLC) data for a symbol, supporting multiple time selection modes: - **last:** Most recent N records - **hours:** Records for the last N hours - **from/to:** Records between custom date ranges The &#x60;interval&#x60; parameter is required (valid values: 1, 5, 15, 60 for minutes/hours). You must specify **exactly one** of the following: &#x60;last&#x60;, &#x60;hours&#x60;, or both &#x60;from&#x60; and &#x60;to&#x60;. Requires authentication and subscription with intraday/minute OHLC access. 

### Example
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let symbol = "symbol_example"; // String | The symbol/pair to query (e.g. `EURUSD`)
let interval = 56; // Number | Data interval in minutes: - 1 = 1 minute - 5 = 5 minutes - 15 = 15 minutes - 60 = 1 hour 
let opts = { 
  'last': 56, // Number | Number of most recent records to return (exclusive with hours/from/to)
  'hours': 56, // Number | Records for the last N hours (exclusive with last/from/to)
  'from': new Date("2013-10-20"), // Date | Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than `to`
  'to': new Date("2013-10-20") // Date | End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than `from`
};
apiInstance.getIntradayOHLC(symbol, interval, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 
 **interval** | **Number**| Data interval in minutes: - 1 &#x3D; 1 minute - 5 &#x3D; 5 minutes - 15 &#x3D; 15 minutes - 60 &#x3D; 1 hour  | 
 **last** | **Number**| Number of most recent records to return (exclusive with hours/from/to) | [optional] 
 **hours** | **Number**| Records for the last N hours (exclusive with last/from/to) | [optional] 
 **from** | **Date**| Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than &#x60;to&#x60; | [optional] 
 **to** | **Date**| End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than &#x60;from&#x60; | [optional] 

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
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let symbol = "symbol_example"; // String | The symbol/pair to query (e.g. `EURUSD`)

apiInstance.getLevels(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLiveRates"></a>
# **getLiveRates**
> InlineResponse2001 getLiveRates(opts)

Get live forex prices

Returns the latest live rates for all supported forex currency pairs.  You can request specific pairs by providing a comma-separated list of symbols in the &#x60;symbol&#x60; parameter, e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;. 

### Example
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let opts = { 
  'symbol': "symbol_example" // String | Comma-separated list of currency pairs to filter the results (e.g. `EURUSD,GBPUSD,USDSEK`). If not provided, all pairs are returned. 
};
apiInstance.getLiveRates(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| Comma-separated list of currency pairs to filter the results (e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;). If not provided, all pairs are returned.  | [optional] 

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
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let currency = "currency_example"; // String | Currency pair symbol (e.g. `EURUSD`)
let from = new Date("2013-10-20"); // Date | Start date (YYYY-MM-DD), must be older than `to`
let to = new Date("2013-10-20"); // Date | End date (YYYY-MM-DD), must be newer than `from`

apiInstance.getOHLCByTimeframe(currency, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency pair symbol (e.g. &#x60;EURUSD&#x60;) | 
 **from** | **Date**| Start date (YYYY-MM-DD), must be older than &#x60;to&#x60; | 
 **to** | **Date**| End date (YYYY-MM-DD), must be newer than &#x60;from&#x60; | 

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
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let symbol = "symbol_example"; // String | The symbol code to query (e.g. `EURUSD`).

apiInstance.getPerformance(symbol, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The symbol code to query (e.g. &#x60;EURUSD&#x60;). | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRatesBySource"></a>
# **getRatesBySource**
> [InlineResponse2002] getRatesBySource(source, target)

Get rates with other currencies using a custom base currency

Returns the latest exchange rates for one or more target currencies, using the specified base currency as the reference. Provide the base (source) and one or more target currencies (comma-separated) in the query string. 

### Example
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let source = "source_example"; // String | The base currency to use for conversion (e.g., `SEK`). 
let target = ["target_example"]; // [String] | One or more target currencies to return rates for, separated by a comma (e.g., `TRY,GBP`). 

apiInstance.getRatesBySource(source, target, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**| The base currency to use for conversion (e.g., &#x60;SEK&#x60;).  | 
 **target** | [**[String]**](String.md)| One or more target currencies to return rates for, separated by a comma (e.g., &#x60;TRY,GBP&#x60;).  | 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTechnicalAnalysis"></a>
# **getTechnicalAnalysis**
> InlineResponse2009 getTechnicalAnalysis(symbol, opts)

Get technical analysis indicators for a symbol (Ema &amp; Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

Returns a range of daily technical analysis indicators for the specified symbol (up to 720 days). Includes MACD, RSI, moving averages, Stochastic, ADX, CCI, Williams %R, and more. Requires authentication and a subscription with technical analysis (TA) access. 

### Example
```javascript
import {CurrencydatafeedcomApiV2} from 'currencydatafeedcom_api_v2';
let defaultClient = CurrencydatafeedcomApiV2.ApiClient.instance;


let apiInstance = new CurrencydatafeedcomApiV2.ForexApi();
let symbol = "symbol_example"; // String | The symbol/pair to query (e.g. `EURUSD`)
let opts = { 
  'days': 56 // Number | Number of days to return (default: 365, max: 720) 
};
apiInstance.getTechnicalAnalysis(symbol, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 
 **days** | **Number**| Number of days to return (default: 365, max: 720)  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

