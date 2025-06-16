# swagger_client.CryptoCurrencyApi

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_crypto_extended_history**](CryptoCurrencyApi.md#get_crypto_extended_history) | **GET** /crypto-extended-history | Get extended historical close prices for a specific crypto pair on an exchange
[**get_crypto_extended_minute_history**](CryptoCurrencyApi.md#get_crypto_extended_minute_history) | **GET** /crypto-extended-history-1m | Get intraday (minute-level) price history for a specific crypto pair on an exchange
[**get_crypto_history**](CryptoCurrencyApi.md#get_crypto_history) | **GET** /crypto-history | Get historical close prices for a cryptocurrency
[**get_crypto_live**](CryptoCurrencyApi.md#get_crypto_live) | **GET** /crypto-live | Get live data for one or more cryptocurrencies
[**get_crypto_live_by_exchange**](CryptoCurrencyApi.md#get_crypto_live_by_exchange) | **GET** /crypto-live-exchange | Get live crypto data for all pairs from a specific exchange
[**get_crypto_live_extended**](CryptoCurrencyApi.md#get_crypto_live_extended) | **GET** /crypto-live-extended | Get extended live data for one or more crypto pairs from specific exchanges
[**get_crypto_market_fear_greed_index**](CryptoCurrencyApi.md#get_crypto_market_fear_greed_index) | **GET** /crypto-fg | Get Crypto Market Fear &amp; Greed Index
[**get_crypto_minute_history**](CryptoCurrencyApi.md#get_crypto_minute_history) | **GET** /crypto-history-1m | Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
[**get_crypto_onchain_metrics**](CryptoCurrencyApi.md#get_crypto_onchain_metrics) | **GET** /crypto-onchain | Get on-chain metrics for Bitcoin and crypto markets
[**get_crypto_performance**](CryptoCurrencyApi.md#get_crypto_performance) | **GET** /crypto-performance | Get performance of a single cryptocurrency over various periods

# **get_crypto_extended_history**
> InlineResponse20015 get_crypto_extended_history(symbol, period)

Get extended historical close prices for a specific crypto pair on an exchange

Returns the daily closing price history for a single cryptocurrency trading pair on a specific exchange (e.g. `LTCUSDT@binance`). Requires authentication and a subscription with historical access.  - `symbol` parameter accepts a single value, formatted as `PAIR@exchange` (e.g. `BTCUSDT@binance`). - `period` parameter is required, integer, maximum as supported (suggest up to 1825 for 5 years). 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | Trading pair and exchange in the format `PAIR@exchange` (e.g. `LTCUSDT@binance`). 
period = 56 # int | Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years). 

try:
    # Get extended historical close prices for a specific crypto pair on an exchange
    api_response = api_instance.get_crypto_extended_history(symbol, period)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_extended_history: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;LTCUSDT@binance&#x60;).  | 
 **period** | **int**| Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years).  | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_extended_minute_history**
> InlineResponse20016 get_crypto_extended_minute_history(symbol, hours)

Get intraday (minute-level) price history for a specific crypto pair on an exchange

Returns minute-level price history (close prices and timestamps) for a single crypto trading pair on a specific exchange.   The `symbol` parameter expects the format `PAIR@exchange` (e.g. `BTCUSDT@binance`).  - Requires authentication and subscription with historical access. - `hours` parameter: Maximum 48 (last 48 hours). 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | Trading pair and exchange in the format `PAIR@exchange` (e.g. `BTCUSDT@binance`). 
hours = 56 # int | Number of hours of minute-level data to return (max 48). 

try:
    # Get intraday (minute-level) price history for a specific crypto pair on an exchange
    api_response = api_instance.get_crypto_extended_minute_history(symbol, hours)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_extended_minute_history: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;).  | 
 **hours** | **int**| Number of hours of minute-level data to return (max 48).  | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_history**
> InlineResponse20013 get_crypto_history(symbol, period)

Get historical close prices for a cryptocurrency

Returns the daily closing price history for a single cryptocurrency symbol for up to 5 years (max 1825 days). Requires authentication and a subscription with historical access.  The `symbol` parameter accepts a single cryptocurrency code (e.g., `XRP`, `BTC`, `ETH`). 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | The cryptocurrency symbol (e.g. XRP, BTC, ETH).
period = 56 # int | Number of daily data points to return (up to 1825; 5 years). 

try:
    # Get historical close prices for a cryptocurrency
    api_response = api_instance.get_crypto_history(symbol, period)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_history: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| The cryptocurrency symbol (e.g. XRP, BTC, ETH). | 
 **period** | **int**| Number of daily data points to return (up to 1825; 5 years).  | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_live**
> InlineResponse20010 get_crypto_live(symbol)

Get live data for one or more cryptocurrencies

Returns the latest price and daily metrics for one or more cryptocurrencies. Requires authentication and a subscription with crypto access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | One or more cryptocurrency symbols, separated by commas (e.g. `BTC,ETH,XRP`) 

try:
    # Get live data for one or more cryptocurrencies
    api_response = api_instance.get_crypto_live(symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_live: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| One or more cryptocurrency symbols, separated by commas (e.g. &#x60;BTC,ETH,XRP&#x60;)  | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_live_by_exchange**
> InlineResponse20012 get_crypto_live_by_exchange(exchange)

Get live crypto data for all pairs from a specific exchange

Returns the latest live data for all cryptocurrency pairs from a specified exchange (market). Requires authentication and an appropriate subscription with on-chain access.  **The `exchange` parameter is required.**   For example: `binance`, `bybit`, etc. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
exchange = 'exchange_example' # str | The market or exchange to get all pairs from (e.g. `binance`, `bybit`, etc.). 

try:
    # Get live crypto data for all pairs from a specific exchange
    api_response = api_instance.get_crypto_live_by_exchange(exchange)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_live_by_exchange: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **str**| The market or exchange to get all pairs from (e.g. &#x60;binance&#x60;, &#x60;bybit&#x60;, etc.).  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_live_extended**
> InlineResponse20011 get_crypto_live_extended(symbol)

Get extended live data for one or more crypto pairs from specific exchanges

Returns the latest extended data for one or more cryptocurrency pairs from specific exchanges or markets. Requires authentication and a subscription with crypto access.  The `symbol` parameter accepts one or more pair-market combinations, separated by commas. - Example: `BTCUSDT@binance,XRPUSDT@bybit` 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | One or more cryptocurrency pairs (with market), separated by commas.   Format: `PAIR@market`, e.g. `BTCUSDT@binance,XRPUSDT@bybit` 

try:
    # Get extended live data for one or more crypto pairs from specific exchanges
    api_response = api_instance.get_crypto_live_extended(symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_live_extended: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| One or more cryptocurrency pairs (with market), separated by commas.   Format: &#x60;PAIR@market&#x60;, e.g. &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60;  | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_market_fear_greed_index**
> InlineResponse20018 get_crypto_market_fear_greed_index()

Get Crypto Market Fear & Greed Index

Returns the daily crypto market Fear & Greed Index as a time series from 2021-04-10 to today. Authentication and on-chain access subscription required. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))

try:
    # Get Crypto Market Fear & Greed Index
    api_response = api_instance.get_crypto_market_fear_greed_index()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_market_fear_greed_index: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_minute_history**
> InlineResponse20014 get_crypto_minute_history(symbol, hours)

Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)

Returns the 1-minute interval closing price history for a single cryptocurrency symbol for up to 48 hours. Requires authentication and a subscription with historical access.  - `symbol` parameter accepts a single cryptocurrency code (e.g., `ETH`, `BTC`). - `hours` parameter is required, integer, max 48. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | The cryptocurrency symbol (e.g. ETH, BTC, XRP).
hours = 56 # int | Number of hours of minute-level historical data to return (up to 48 hours back). 

try:
    # Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
    api_response = api_instance.get_crypto_minute_history(symbol, hours)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_minute_history: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| The cryptocurrency symbol (e.g. ETH, BTC, XRP). | 
 **hours** | **int**| Number of hours of minute-level historical data to return (up to 48 hours back).  | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_onchain_metrics**
> InlineResponse20017 get_crypto_onchain_metrics(type)

Get on-chain metrics for Bitcoin and crypto markets

Returns daily on-chain indicators as time series for Bitcoin and major crypto assets.   The `type` parameter selects the indicator to retrieve (e.g. whale flows, SOPR, Puell Multiple, MVRV, open interest, leverage, funding, active address ratio).  **Available types:**   - whale   - sopr   - puell   - mvrv   - open_interest   - leverage   - funding   - active_address  Requires authentication and subscription with on-chain access. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
type = 'type_example' # str | The type of on-chain metric to fetch

try:
    # Get on-chain metrics for Bitcoin and crypto markets
    api_response = api_instance.get_crypto_onchain_metrics(type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_onchain_metrics: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The type of on-chain metric to fetch | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_crypto_performance**
> InlineResponse20019 get_crypto_performance(symbol)

Get performance of a single cryptocurrency over various periods

Returns the percentage change in price for a specified cryptocurrency (e.g., BTC, ETH) over several timeframes, including 1d, 7d, 15d, 30d, 90d, 180d, 270d, 365d, and 720d.   Authentication and a subscription with crypto performance access are required. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint


# create an instance of the API class
api_instance = swagger_client.CryptoCurrencyApi(swagger_client.ApiClient(configuration))
symbol = 'symbol_example' # str | Cryptocurrency symbol (e.g., BTC, ETH, XRP)

try:
    # Get performance of a single cryptocurrency over various periods
    api_response = api_instance.get_crypto_performance(symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CryptoCurrencyApi->get_crypto_performance: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **str**| Cryptocurrency symbol (e.g., BTC, ETH, XRP) | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

