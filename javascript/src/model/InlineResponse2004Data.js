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
 * The InlineResponse2004Data model module.
 * @module model/InlineResponse2004Data
 * @version 2.0.1
 */
export default class InlineResponse2004Data {
  /**
   * Constructs a new <code>InlineResponse2004Data</code>.
   * @alias module:model/InlineResponse2004Data
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2004Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004Data} The populated <code>InlineResponse2004Data</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2004Data();
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('PercentageChange_1h'))
        obj.percentageChange1h = ApiClient.convertToType(data['PercentageChange_1h'], 'Number');
      if (data.hasOwnProperty('PercentageChange_4h'))
        obj.percentageChange4h = ApiClient.convertToType(data['PercentageChange_4h'], 'Number');
      if (data.hasOwnProperty('PercentageChange_1d'))
        obj.percentageChange1d = ApiClient.convertToType(data['PercentageChange_1d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_7d'))
        obj.percentageChange7d = ApiClient.convertToType(data['PercentageChange_7d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_30d'))
        obj.percentageChange30d = ApiClient.convertToType(data['PercentageChange_30d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_90d'))
        obj.percentageChange90d = ApiClient.convertToType(data['PercentageChange_90d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_180d'))
        obj.percentageChange180d = ApiClient.convertToType(data['PercentageChange_180d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_270d'))
        obj.percentageChange270d = ApiClient.convertToType(data['PercentageChange_270d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_365d'))
        obj.percentageChange365d = ApiClient.convertToType(data['PercentageChange_365d'], 'Number');
      if (data.hasOwnProperty('PercentageChange_720d'))
        obj.percentageChange720d = ApiClient.convertToType(data['PercentageChange_720d'], 'Number');
    }
    return obj;
  }
}

/**
 * Symbol queried
 * @member {String} symbol
 */
InlineResponse2004Data.prototype.symbol = undefined;

/**
 * Percentage change in the last 1 hour
 * @member {Number} percentageChange1h
 */
InlineResponse2004Data.prototype.percentageChange1h = undefined;

/**
 * Percentage change in the last 4 hours
 * @member {Number} percentageChange4h
 */
InlineResponse2004Data.prototype.percentageChange4h = undefined;

/**
 * Percentage change in the last 1 day
 * @member {Number} percentageChange1d
 */
InlineResponse2004Data.prototype.percentageChange1d = undefined;

/**
 * Percentage change in the last 7 days
 * @member {Number} percentageChange7d
 */
InlineResponse2004Data.prototype.percentageChange7d = undefined;

/**
 * Percentage change in the last 30 days
 * @member {Number} percentageChange30d
 */
InlineResponse2004Data.prototype.percentageChange30d = undefined;

/**
 * Percentage change in the last 90 days
 * @member {Number} percentageChange90d
 */
InlineResponse2004Data.prototype.percentageChange90d = undefined;

/**
 * Percentage change in the last 180 days
 * @member {Number} percentageChange180d
 */
InlineResponse2004Data.prototype.percentageChange180d = undefined;

/**
 * Percentage change in the last 270 days
 * @member {Number} percentageChange270d
 */
InlineResponse2004Data.prototype.percentageChange270d = undefined;

/**
 * Percentage change in the last 365 days
 * @member {Number} percentageChange365d
 */
InlineResponse2004Data.prototype.percentageChange365d = undefined;

/**
 * Percentage change in the last 720 days
 * @member {Number} percentageChange720d
 */
InlineResponse2004Data.prototype.percentageChange720d = undefined;

