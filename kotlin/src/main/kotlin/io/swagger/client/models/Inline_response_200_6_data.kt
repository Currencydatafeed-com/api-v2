/**
 * Currencydatafeed.com API V2
 * > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found. 
 *
 * OpenAPI spec version: 2.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.models

import io.swagger.client.models.InlineResponse2006History

/**
 * 
 * @param currency Queried or reversed pair symbol
 * @param type Data type (\"original\" or \"reversed\")
 * @param history Array of OHLC objects for the range
 * @param error Error message if no data is available
 */
data class InlineResponse2006Data (

    /* Queried or reversed pair symbol */
    val currency: kotlin.String? = null,
    /* Data type (\"original\" or \"reversed\") */
    val type: kotlin.String? = null,
    /* Array of OHLC objects for the range */
    val history: kotlin.Array<InlineResponse2006History>? = null,
    /* Error message if no data is available */
    val error: kotlin.String? = null
) {
}