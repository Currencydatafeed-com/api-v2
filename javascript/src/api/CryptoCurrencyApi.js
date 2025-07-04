/*
 * Currencydatafeed.com API V2
 * > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found. 
 *
 * OpenAPI spec version: 2.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import InlineResponse20010 from '../model/InlineResponse20010';
import InlineResponse20011 from '../model/InlineResponse20011';
import InlineResponse20012 from '../model/InlineResponse20012';
import InlineResponse20013 from '../model/InlineResponse20013';
import InlineResponse20014 from '../model/InlineResponse20014';
import InlineResponse20015 from '../model/InlineResponse20015';
import InlineResponse20016 from '../model/InlineResponse20016';
import InlineResponse20017 from '../model/InlineResponse20017';
import InlineResponse20018 from '../model/InlineResponse20018';
import InlineResponse20019 from '../model/InlineResponse20019';

/**
* CryptoCurrency service.
* @module api/CryptoCurrencyApi
* @version 2.0.1
*/
export default class CryptoCurrencyApi {

    /**
    * Constructs a new CryptoCurrencyApi. 
    * @alias module:api/CryptoCurrencyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getCryptoExtendedHistory operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoExtendedHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20015{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get extended historical close prices for a specific crypto pair on an exchange
     * Returns the daily closing price history for a single cryptocurrency trading pair on a specific exchange (e.g. &#x60;LTCUSDT@binance&#x60;). Requires authentication and a subscription with historical access.  - &#x60;symbol&#x60; parameter accepts a single value, formatted as &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;). - &#x60;period&#x60; parameter is required, integer, maximum as supported (suggest up to 1825 for 5 years). 
     * @param {String} symbol Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;LTCUSDT@binance&#x60;). 
     * @param {Number} period Number of daily records to return (e.g. 365 for last 1 year, 1825 for 5 years). 
     * @param {module:api/CryptoCurrencyApi~getCryptoExtendedHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoExtendedHistory(symbol, period, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoExtendedHistory");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getCryptoExtendedHistory");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol,'period': period
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20015;

      return this.apiClient.callApi(
        '/crypto-extended-history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoExtendedMinuteHistory operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoExtendedMinuteHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20016{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get intraday (minute-level) price history for a specific crypto pair on an exchange
     * Returns minute-level price history (close prices and timestamps) for a single crypto trading pair on a specific exchange.   The &#x60;symbol&#x60; parameter expects the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;).  - Requires authentication and subscription with historical access. - &#x60;hours&#x60; parameter: Maximum 48 (last 48 hours). 
     * @param {String} symbol Trading pair and exchange in the format &#x60;PAIR@exchange&#x60; (e.g. &#x60;BTCUSDT@binance&#x60;). 
     * @param {Number} hours Number of hours of minute-level data to return (max 48). 
     * @param {module:api/CryptoCurrencyApi~getCryptoExtendedMinuteHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoExtendedMinuteHistory(symbol, hours, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoExtendedMinuteHistory");
      }
      // verify the required parameter 'hours' is set
      if (hours === undefined || hours === null) {
        throw new Error("Missing the required parameter 'hours' when calling getCryptoExtendedMinuteHistory");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol,'hours': hours
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20016;

      return this.apiClient.callApi(
        '/crypto-extended-history-1m', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoHistory operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get historical close prices for a cryptocurrency
     * Returns the daily closing price history for a single cryptocurrency symbol for up to 5 years (max 1825 days). Requires authentication and a subscription with historical access.  The &#x60;symbol&#x60; parameter accepts a single cryptocurrency code (e.g., &#x60;XRP&#x60;, &#x60;BTC&#x60;, &#x60;ETH&#x60;). 
     * @param {String} symbol The cryptocurrency symbol (e.g. XRP, BTC, ETH).
     * @param {Number} period Number of daily data points to return (up to 1825; 5 years). 
     * @param {module:api/CryptoCurrencyApi~getCryptoHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoHistory(symbol, period, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoHistory");
      }
      // verify the required parameter 'period' is set
      if (period === undefined || period === null) {
        throw new Error("Missing the required parameter 'period' when calling getCryptoHistory");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol,'period': period
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20013;

      return this.apiClient.callApi(
        '/crypto-history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoLive operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoLiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20010{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get live data for one or more cryptocurrencies
     * Returns the latest price and daily metrics for one or more cryptocurrencies. Requires authentication and a subscription with crypto access. 
     * @param {String} symbol One or more cryptocurrency symbols, separated by commas (e.g. &#x60;BTC,ETH,XRP&#x60;) 
     * @param {module:api/CryptoCurrencyApi~getCryptoLiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoLive(symbol, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoLive");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20010;

      return this.apiClient.callApi(
        '/crypto-live', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoLiveByExchange operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoLiveByExchangeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get live crypto data for all pairs from a specific exchange
     * Returns the latest live data for all cryptocurrency pairs from a specified exchange (market). Requires authentication and an appropriate subscription with on-chain access.  **The &#x60;exchange&#x60; parameter is required.**   For example: &#x60;binance&#x60;, &#x60;bybit&#x60;, etc. 
     * @param {String} exchange The market or exchange to get all pairs from (e.g. &#x60;binance&#x60;, &#x60;bybit&#x60;, etc.). 
     * @param {module:api/CryptoCurrencyApi~getCryptoLiveByExchangeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoLiveByExchange(exchange, callback) {
      
      let postBody = null;
      // verify the required parameter 'exchange' is set
      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling getCryptoLiveByExchange");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'exchange': exchange
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20012;

      return this.apiClient.callApi(
        '/crypto-live-exchange', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoLiveExtended operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoLiveExtendedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get extended live data for one or more crypto pairs from specific exchanges
     * Returns the latest extended data for one or more cryptocurrency pairs from specific exchanges or markets. Requires authentication and a subscription with crypto access.  The &#x60;symbol&#x60; parameter accepts one or more pair-market combinations, separated by commas. - Example: &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60; 
     * @param {String} symbol One or more cryptocurrency pairs (with market), separated by commas.   Format: &#x60;PAIR@market&#x60;, e.g. &#x60;BTCUSDT@binance,XRPUSDT@bybit&#x60; 
     * @param {module:api/CryptoCurrencyApi~getCryptoLiveExtendedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoLiveExtended(symbol, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoLiveExtended");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20011;

      return this.apiClient.callApi(
        '/crypto-live-extended', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoMarketFearGreedIndex operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoMarketFearGreedIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20018{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Crypto Market Fear &amp; Greed Index
     * Returns the daily crypto market Fear &amp; Greed Index as a time series from 2021-04-10 to today. Authentication and on-chain access subscription required. 
     * @param {module:api/CryptoCurrencyApi~getCryptoMarketFearGreedIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoMarketFearGreedIndex(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20018;

      return this.apiClient.callApi(
        '/crypto-fg', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoMinuteHistory operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoMinuteHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20014{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)
     * Returns the 1-minute interval closing price history for a single cryptocurrency symbol for up to 48 hours. Requires authentication and a subscription with historical access.  - &#x60;symbol&#x60; parameter accepts a single cryptocurrency code (e.g., &#x60;ETH&#x60;, &#x60;BTC&#x60;). - &#x60;hours&#x60; parameter is required, integer, max 48. 
     * @param {String} symbol The cryptocurrency symbol (e.g. ETH, BTC, XRP).
     * @param {Number} hours Number of hours of minute-level historical data to return (up to 48 hours back). 
     * @param {module:api/CryptoCurrencyApi~getCryptoMinuteHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoMinuteHistory(symbol, hours, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoMinuteHistory");
      }
      // verify the required parameter 'hours' is set
      if (hours === undefined || hours === null) {
        throw new Error("Missing the required parameter 'hours' when calling getCryptoMinuteHistory");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol,'hours': hours
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20014;

      return this.apiClient.callApi(
        '/crypto-history-1m', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoOnchainMetrics operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoOnchainMetricsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20017{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get on-chain metrics for Bitcoin and crypto markets
     * Returns daily on-chain indicators as time series for Bitcoin and major crypto assets.   The &#x60;type&#x60; parameter selects the indicator to retrieve (e.g. whale flows, SOPR, Puell Multiple, MVRV, open interest, leverage, funding, active address ratio).  **Available types:**   - whale   - sopr   - puell   - mvrv   - open_interest   - leverage   - funding   - active_address  Requires authentication and subscription with on-chain access. 
     * @param {module:model/String} type The type of on-chain metric to fetch
     * @param {module:api/CryptoCurrencyApi~getCryptoOnchainMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoOnchainMetrics(type, callback) {
      
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getCryptoOnchainMetrics");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'type': type
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20017;

      return this.apiClient.callApi(
        '/crypto-onchain', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCryptoPerformance operation.
     * @callback moduleapi/CryptoCurrencyApi~getCryptoPerformanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20019{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get performance of a single cryptocurrency over various periods
     * Returns the percentage change in price for a specified cryptocurrency (e.g., BTC, ETH) over several timeframes, including 1d, 7d, 15d, 30d, 90d, 180d, 270d, 365d, and 720d.   Authentication and a subscription with crypto performance access are required. 
     * @param {String} symbol Cryptocurrency symbol (e.g., BTC, ETH, XRP)
     * @param {module:api/CryptoCurrencyApi~getCryptoPerformanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCryptoPerformance(symbol, callback) {
      
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getCryptoPerformance");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'symbol': symbol
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20019;

      return this.apiClient.callApi(
        '/crypto-performance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}