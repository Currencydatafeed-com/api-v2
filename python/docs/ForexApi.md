# swagger_client.ForexApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convert_amount**](ForexApi.md#convert_amount) | **GET** /convert | Convert an amount between two currencies
[**get_historical_ohlc**](ForexApi.md#get_historical_ohlc) | **GET** /history | Get historical OHLC data for a currency pair on a given date
[**get_intraday_ohlc**](ForexApi.md#get_intraday_ohlc) | **GET** /intraday | Get intraday (minute/hour) OHLC data for a symbol with flexible time selection
[**get_levels**](ForexApi.md#get_levels) | **GET** /levels | Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol
[**get_live_rates**](ForexApi.md#get_live_rates) | **GET** /live-rates | Get live forex prices
[**get_ohlcby_timeframe**](ForexApi.md#get_ohlcby_timeframe) | **GET** /timeframe | Get historical OHLC data for a currency pair within a date range
[**get_performance**](ForexApi.md#get_performance) | **GET** /performance | Get percentage changes for a symbol for different periods
[**get_rates_by_source**](ForexApi.md#get_rates_by_source) | **GET** /source | Get rates with other currencies using a custom base currency
[**get_technical_analysis**](ForexApi.md#get_technical_analysis) | **GET** /ta | Get technical analysis indicators for a symbol (Ema &amp; Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

# **convert_amount**
> InlineResponse2003 convert_amount(_from, to, amount)

Convert an amount between two currencies

Converts a specified amount from one currency to another, returning the latest available rate and result. Direct, reverse, or USD-intermediate conversion is used as needed. All parameters are required. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
_from = '_from_example' # str | The source currency code (e.g., `EUR`).
to = 'to_example' # str | The target currency code (e.g., `TRY`).
amount = 1.2 # float | The amount to convert.

try:
    # Convert an amount between two currencies
    api_response = api_instance.convert_amount(_from, to, amount)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->convert_amount: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_from** | **str**| The source currency code (e.g., &#x60;EUR&#x60;). | 
 **to** | **str**| The target currency code (e.g., &#x60;TRY&#x60;). | 
 **amount** | **float**| The amount to convert. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_historical_ohlc**
> InlineResponse2005 get_historical_ohlc(symbol, _date)

Get historical OHLC data for a currency pair on a given date

Returns historical open, high, low, and close values for one or more currency pairs on a specific date. If direct data is not available for a pair, the system attempts to reverse the pair. Returns an error if the date is more than 4 years in the past. Requires authentication and a subscription with historical access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | One or more currency pairs, separated by spaces.   Example: `EURUSD USDTRY` 
_date = '2013-10-20' # date | The date to query in YYYY-MM-DD format.

try:
    # Get historical OHLC data for a currency pair on a given date
    api_response = api_instance.get_historical_ohlc(symbol, _date)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_historical_ohlc: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| One or more currency pairs, separated by spaces.   Example: &#x60;EURUSD USDTRY&#x60;  | 
 **_date** | **date**| The date to query in YYYY-MM-DD format. | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_intraday_ohlc**
> InlineResponse2007 get_intraday_ohlc(symbol, interval, last=last, hours=hours, _from=_from, to=to)

Get intraday (minute/hour) OHLC data for a symbol with flexible time selection

Returns intraday open, high, low, and close (OHLC) data for a symbol, supporting multiple time selection modes: - **last:** Most recent N records - **hours:** Records for the last N hours - **from/to:** Records between custom date ranges The `interval` parameter is required (valid values: 1, 5, 15, 60 for minutes/hours). You must specify **exactly one** of the following: `last`, `hours`, or both `from` and `to`. Requires authentication and subscription with intraday/minute OHLC access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | The symbol/pair to query (e.g. `EURUSD`)
interval = 56 # int | Data interval in minutes: - 1 = 1 minute - 5 = 5 minutes - 15 = 15 minutes - 60 = 1 hour 
last = 56 # int | Number of most recent records to return (exclusive with hours/from/to) (optional)
hours = 56 # int | Records for the last N hours (exclusive with last/from/to) (optional)
_from = '2013-10-20' # date | Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than `to` (optional)
to = '2013-10-20' # date | End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than `from` (optional)

try:
    # Get intraday (minute/hour) OHLC data for a symbol with flexible time selection
    api_response = api_instance.get_intraday_ohlc(symbol, interval, last=last, hours=hours, _from=_from, to=to)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_intraday_ohlc: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 
 **interval** | **int**| Data interval in minutes: - 1 &#x3D; 1 minute - 5 &#x3D; 5 minutes - 15 &#x3D; 15 minutes - 60 &#x3D; 1 hour  | 
 **last** | **int**| Number of most recent records to return (exclusive with hours/from/to) | [optional] 
 **hours** | **int**| Records for the last N hours (exclusive with last/from/to) | [optional] 
 **_from** | **date**| Start date (inclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be older than &#x60;to&#x60; | [optional] 
 **to** | **date**| End date (exclusive, YYYY-MM-DD or YYYY-MM-DD HH:MM:SS), must be newer than &#x60;from&#x60; | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_levels**
> InlineResponse2008 get_levels(symbol)

Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol

Returns pivot points (pivot, support/resistance levels) and Bollinger Bands for the latest data of the specified symbol. Requires authentication and a subscription with technical analysis (TA) access. If not enough historical data is available for Bollinger Bands (minimum 20 periods), the endpoint returns an error for that calculation. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | The symbol/pair to query (e.g. `EURUSD`)

try:
    # Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol
    api_response = api_instance.get_levels(symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_levels: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_live_rates**
> InlineResponse2001 get_live_rates(symbol=symbol)

Get live forex prices

Returns the latest live rates for all supported forex currency pairs.  You can request specific pairs by providing a comma-separated list of symbols in the `symbol` parameter, e.g. `EURUSD,GBPUSD,USDSEK`. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | Comma-separated list of currency pairs to filter the results (e.g. `EURUSD,GBPUSD,USDSEK`). If not provided, all pairs are returned.  (optional)

try:
    # Get live forex prices
    api_response = api_instance.get_live_rates(symbol=symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_live_rates: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Comma-separated list of currency pairs to filter the results (e.g. &#x60;EURUSD,GBPUSD,USDSEK&#x60;). If not provided, all pairs are returned.  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ohlcby_timeframe**
> InlineResponse2006 get_ohlcby_timeframe(currency, _from, to)

Get historical OHLC data for a currency pair within a date range

Returns historical open, high, low, and close (OHLC) data for a currency pair over a specified date range. Maximum 8 years of data can be queried at once.   Requires authentication and a subscription with timeframe query access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
currency = 'currency_example' # str | Currency pair symbol (e.g. `EURUSD`)
_from = '2013-10-20' # date | Start date (YYYY-MM-DD), must be older than `to`
to = '2013-10-20' # date | End date (YYYY-MM-DD), must be newer than `from`

try:
    # Get historical OHLC data for a currency pair within a date range
    api_response = api_instance.get_ohlcby_timeframe(currency, _from, to)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_ohlcby_timeframe: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **str**| Currency pair symbol (e.g. &#x60;EURUSD&#x60;) | 
 **_from** | **date**| Start date (YYYY-MM-DD), must be older than &#x60;to&#x60; | 
 **to** | **date**| End date (YYYY-MM-DD), must be newer than &#x60;from&#x60; | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_performance**
> InlineResponse2004 get_performance(symbol)

Get percentage changes for a symbol for different periods

Returns the percentage change in price for the given symbol over several time intervals (1 hour, 4 hours, 1 day, 7 days, 30 days, 90 days, 180 days, 270 days, 365 days, 720 days). Requires authentication and an active subscription with gainers/losers access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | The symbol code to query (e.g. `EURUSD`).

try:
    # Get percentage changes for a symbol for different periods
    api_response = api_instance.get_performance(symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_performance: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| The symbol code to query (e.g. &#x60;EURUSD&#x60;). | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rates_by_source**
> list[InlineResponse2002] get_rates_by_source(source, target)

Get rates with other currencies using a custom base currency

Returns the latest exchange rates for one or more target currencies, using the specified base currency as the reference. Provide the base (source) and one or more target currencies (comma-separated) in the query string. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
source = 'source_example' # str | The base currency to use for conversion (e.g., `SEK`). 
target = ['target_example'] # list[str] | One or more target currencies to return rates for, separated by a comma (e.g., `TRY,GBP`). 

try:
    # Get rates with other currencies using a custom base currency
    api_response = api_instance.get_rates_by_source(source, target)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_rates_by_source: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **str**| The base currency to use for conversion (e.g., &#x60;SEK&#x60;).  | 
 **target** | [**list[str]**](str.md)| One or more target currencies to return rates for, separated by a comma (e.g., &#x60;TRY,GBP&#x60;).  | 

### Return type

[**list[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_technical_analysis**
> InlineResponse2009 get_technical_analysis(symbol, days=days)

Get technical analysis indicators for a symbol (Ema & Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)

Returns a range of daily technical analysis indicators for the specified symbol (up to 720 days). Includes MACD, RSI, moving averages, Stochastic, ADX, CCI, Williams %R, and more. Requires authentication and a subscription with technical analysis (TA) access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.ForexApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | The symbol/pair to query (e.g. `EURUSD`)
days = 56 # int | Number of days to return (default: 365, max: 720)  (optional)

try:
    # Get technical analysis indicators for a symbol (Ema & Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)
    api_response = api_instance.get_technical_analysis(symbol, days=days)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ForexApi->get_technical_analysis: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| The symbol/pair to query (e.g. &#x60;EURUSD&#x60;) | 
 **days** | **int**| Number of days to return (default: 365, max: 720)  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

