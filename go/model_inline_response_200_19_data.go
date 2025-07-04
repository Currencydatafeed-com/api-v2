/*
 * Currencydatafeed.com API V2
 *
 * > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found. 
 *
 * API version: 2.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package swagger

type InlineResponse20019Data struct {
	// Percent change over 1 day
	Var1d float32 `json:"1d,omitempty"`
	// Percent change over 7 days
	Var7d float32 `json:"7d,omitempty"`
	// Percent change over 15 days
	Var15d float32 `json:"15d,omitempty"`
	// Percent change over 30 days
	Var30d float32 `json:"30d,omitempty"`
	// Percent change over 90 days
	Var90d float32 `json:"90d,omitempty"`
	// Percent change over 180 days
	Var180d float32 `json:"180d,omitempty"`
	// Percent change over 270 days
	Var270d float32 `json:"270d,omitempty"`
	// Percent change over 365 days
	Var365d float32 `json:"365d,omitempty"`
	// Percent change over 720 days
	Var720d float32 `json:"720d,omitempty"`
}
