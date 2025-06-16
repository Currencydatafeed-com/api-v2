# io.swagger.client - Kotlin client library for Currencydatafeed.com API V2

## Requires

* Kotlin 1.4.30
* Gradle 5.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in Swagger definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/cdf-f41/cdf/2.0.1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CryptoCurrencyApi* | [**getCryptoExtendedHistory**](docs/CryptoCurrencyApi.md#getcryptoextendedhistory) | **GET** /crypto-extended-history | Get extended historical close prices for a specific crypto pair on an exchange
*CryptoCurrencyApi* | [**getCryptoExtendedMinuteHistory**](docs/CryptoCurrencyApi.md#getcryptoextendedminutehistory) | **GET** /crypto-extended-history-1m | Get intraday (minute-level) price history for a specific crypto pair on an exchange
*CryptoCurrencyApi* | [**getCryptoHistory**](docs/CryptoCurrencyApi.md#getcryptohistory) | **GET** /crypto-history | Get historical close prices for a cryptocurrency
*CryptoCurrencyApi* | [**getCryptoLive**](docs/CryptoCurrencyApi.md#getcryptolive) | **GET** /crypto-live | Get live data for one or more cryptocurrencies
*CryptoCurrencyApi* | [**getCryptoLiveByExchange**](docs/CryptoCurrencyApi.md#getcryptolivebyexchange) | **GET** /crypto-live-exchange | Get live crypto data for all pairs from a specific exchange
*CryptoCurrencyApi* | [**getCryptoLiveExtended**](docs/CryptoCurrencyApi.md#getcryptoliveextended) | **GET** /crypto-live-extended | Get extended live data for one or more crypto pairs from specific exchanges
*CryptoCurrencyApi* | [**getCryptoMarketFearGreedIndex**](docs/CryptoCurrencyApi.md#getcryptomarketfeargreedindex) | **GET** /crypto-fg | Get Crypto Market Fear & Greed Index
*CryptoCurrencyApi* | [**getCryptoMinuteHistory**](docs/CryptoCurrencyApi.md#getcryptominutehistory) | **GET** /crypto-history-1m | Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
*CryptoCurrencyApi* | [**getCryptoOnchainMetrics**](docs/CryptoCurrencyApi.md#getcryptoonchainmetrics) | **GET** /crypto-onchain | Get on-chain metrics for Bitcoin and crypto markets
*CryptoCurrencyApi* | [**getCryptoPerformance**](docs/CryptoCurrencyApi.md#getcryptoperformance) | **GET** /crypto-performance | Get performance of a single cryptocurrency over various periods
*ForexApi* | [**convertAmount**](docs/ForexApi.md#convertamount) | **GET** /convert | Convert an amount between two currencies
*ForexApi* | [**getHistoricalOHLC**](docs/ForexApi.md#gethistoricalohlc) | **GET** /history | Get historical OHLC data for a currency pair on a given date
*ForexApi* | [**getIntradayOHLC**](docs/ForexApi.md#getintradayohlc) | **GET** /intraday | Get intraday (minute/hour) OHLC data for a symbol with flexible time selection
*ForexApi* | [**getLevels**](docs/ForexApi.md#getlevels) | **GET** /levels | Technical Analysis - Get Support, Resistence, Bollinger Bands for a symbol
*ForexApi* | [**getLiveRates**](docs/ForexApi.md#getliverates) | **GET** /live-rates | Get live forex prices
*ForexApi* | [**getOHLCByTimeframe**](docs/ForexApi.md#getohlcbytimeframe) | **GET** /timeframe | Get historical OHLC data for a currency pair within a date range
*ForexApi* | [**getPerformance**](docs/ForexApi.md#getperformance) | **GET** /performance | Get percentage changes for a symbol for different periods
*ForexApi* | [**getRatesBySource**](docs/ForexApi.md#getratesbysource) | **GET** /source | Get rates with other currencies using a custom base currency
*ForexApi* | [**getTechnicalAnalysis**](docs/ForexApi.md#gettechnicalanalysis) | **GET** /ta | Get technical analysis indicators for a symbol (Ema & Sma Levels, CCI, Williams%R, ADX and Stochastic Indicators)
*GeneralApi* | [**getAvailableSymbols**](docs/GeneralApi.md#getavailablesymbols) | **GET** /available-symbols | Get available symbols list

<a name="documentation-for-models"></a>
## Documentation for Models

 - [io.swagger.client.models.InlineResponse200](docs/InlineResponse200.md)
 - [io.swagger.client.models.InlineResponse2001](docs/InlineResponse2001.md)
 - [io.swagger.client.models.InlineResponse20010](docs/InlineResponse20010.md)
 - [io.swagger.client.models.InlineResponse20010Data](docs/InlineResponse20010Data.md)
 - [io.swagger.client.models.InlineResponse20011](docs/InlineResponse20011.md)
 - [io.swagger.client.models.InlineResponse20011Data](docs/InlineResponse20011Data.md)
 - [io.swagger.client.models.InlineResponse20012](docs/InlineResponse20012.md)
 - [io.swagger.client.models.InlineResponse20012Data](docs/InlineResponse20012Data.md)
 - [io.swagger.client.models.InlineResponse20013](docs/InlineResponse20013.md)
 - [io.swagger.client.models.InlineResponse20013Data](docs/InlineResponse20013Data.md)
 - [io.swagger.client.models.InlineResponse20014](docs/InlineResponse20014.md)
 - [io.swagger.client.models.InlineResponse20014Data](docs/InlineResponse20014Data.md)
 - [io.swagger.client.models.InlineResponse20015](docs/InlineResponse20015.md)
 - [io.swagger.client.models.InlineResponse20015Data](docs/InlineResponse20015Data.md)
 - [io.swagger.client.models.InlineResponse20016](docs/InlineResponse20016.md)
 - [io.swagger.client.models.InlineResponse20016Data](docs/InlineResponse20016Data.md)
 - [io.swagger.client.models.InlineResponse20017](docs/InlineResponse20017.md)
 - [io.swagger.client.models.InlineResponse20018](docs/InlineResponse20018.md)
 - [io.swagger.client.models.InlineResponse20018Data](docs/InlineResponse20018Data.md)
 - [io.swagger.client.models.InlineResponse20019](docs/InlineResponse20019.md)
 - [io.swagger.client.models.InlineResponse20019Data](docs/InlineResponse20019Data.md)
 - [io.swagger.client.models.InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [io.swagger.client.models.InlineResponse2002](docs/InlineResponse2002.md)
 - [io.swagger.client.models.InlineResponse2003](docs/InlineResponse2003.md)
 - [io.swagger.client.models.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [io.swagger.client.models.InlineResponse2004](docs/InlineResponse2004.md)
 - [io.swagger.client.models.InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [io.swagger.client.models.InlineResponse2005](docs/InlineResponse2005.md)
 - [io.swagger.client.models.InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [io.swagger.client.models.InlineResponse2006](docs/InlineResponse2006.md)
 - [io.swagger.client.models.InlineResponse2006Data](docs/InlineResponse2006Data.md)
 - [io.swagger.client.models.InlineResponse2006History](docs/InlineResponse2006History.md)
 - [io.swagger.client.models.InlineResponse2007](docs/InlineResponse2007.md)
 - [io.swagger.client.models.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [io.swagger.client.models.InlineResponse2008](docs/InlineResponse2008.md)
 - [io.swagger.client.models.InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [io.swagger.client.models.InlineResponse2009](docs/InlineResponse2009.md)
 - [io.swagger.client.models.InlineResponse2009MacdData](docs/InlineResponse2009MacdData.md)
 - [io.swagger.client.models.InlineResponse2009RsiData](docs/InlineResponse2009RsiData.md)
 - [io.swagger.client.models.InlineResponse2009TechnicalData](docs/InlineResponse2009TechnicalData.md)
 - [io.swagger.client.models.InlineResponse200Symbols](docs/InlineResponse200Symbols.md)

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth


