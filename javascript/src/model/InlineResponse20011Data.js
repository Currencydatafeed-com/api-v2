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
import ApiClient from '../ApiClient';

/**
 * The InlineResponse20011Data model module.
 * @module model/InlineResponse20011Data
 * @version 2.0.1
 */
export default class InlineResponse20011Data {
  /**
   * Constructs a new <code>InlineResponse20011Data</code>.
   * @alias module:model/InlineResponse20011Data
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20011Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011Data} The populated <code>InlineResponse20011Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20011Data();
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('last'))
        obj.last = ApiClient.convertToType(data['last'], 'Number');
      if (data.hasOwnProperty('low'))
        obj.low = ApiClient.convertToType(data['low'], 'Number');
      if (data.hasOwnProperty('high'))
        obj.high = ApiClient.convertToType(data['high'], 'Number');
      if (data.hasOwnProperty('previous_day'))
        obj.previousDay = ApiClient.convertToType(data['previous_day'], 'Number');
      if (data.hasOwnProperty('daily_change_percentage'))
        obj.dailyChangePercentage = ApiClient.convertToType(data['daily_change_percentage'], 'Number');
      if (data.hasOwnProperty('source'))
        obj.source = ApiClient.convertToType(data['source'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
    }
    return obj;
  }
}

/**
 * Cryptocurrency pair (e.g. BTCUSDT)
 * @member {String} symbol
 */
InlineResponse20011Data.prototype.symbol = undefined;

/**
 * Last trade price
 * @member {Number} last
 */
InlineResponse20011Data.prototype.last = undefined;

/**
 * 24h low price
 * @member {Number} low
 */
InlineResponse20011Data.prototype.low = undefined;

/**
 * 24h high price
 * @member {Number} high
 */
InlineResponse20011Data.prototype.high = undefined;

/**
 * Previous day's closing price
 * @member {Number} previousDay
 */
InlineResponse20011Data.prototype.previousDay = undefined;

/**
 * 24h change percentage
 * @member {Number} dailyChangePercentage
 */
InlineResponse20011Data.prototype.dailyChangePercentage = undefined;

/**
 * Market or exchange name (e.g. binance, bybit)
 * @member {String} source
 */
InlineResponse20011Data.prototype.source = undefined;

/**
 * Last update time
 * @member {Date} updated
 */
InlineResponse20011Data.prototype.updated = undefined;

