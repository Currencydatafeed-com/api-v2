/*
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

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.client.model.InlineResponse2006History;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/**
 * InlineResponse2006Data
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2025-06-16T10:33:10.614284809Z[GMT]")

public class InlineResponse2006Data {
  @SerializedName("currency")
  private String currency = null;

  @SerializedName("type")
  private String type = null;

  @SerializedName("history")
  private List<InlineResponse2006History> history = null;

  @SerializedName("error")
  private String error = null;

  public InlineResponse2006Data currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Queried or reversed pair symbol
   * @return currency
  **/
  @Schema(description = "Queried or reversed pair symbol")
  public String getCurrency() {
    return currency;
  }

  public void setCurrency(String currency) {
    this.currency = currency;
  }

  public InlineResponse2006Data type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Data type (\&quot;original\&quot; or \&quot;reversed\&quot;)
   * @return type
  **/
  @Schema(description = "Data type (\"original\" or \"reversed\")")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public InlineResponse2006Data history(List<InlineResponse2006History> history) {
    this.history = history;
    return this;
  }

  public InlineResponse2006Data addHistoryItem(InlineResponse2006History historyItem) {
    if (this.history == null) {
      this.history = new ArrayList<InlineResponse2006History>();
    }
    this.history.add(historyItem);
    return this;
  }

   /**
   * Array of OHLC objects for the range
   * @return history
  **/
  @Schema(description = "Array of OHLC objects for the range")
  public List<InlineResponse2006History> getHistory() {
    return history;
  }

  public void setHistory(List<InlineResponse2006History> history) {
    this.history = history;
  }

  public InlineResponse2006Data error(String error) {
    this.error = error;
    return this;
  }

   /**
   * Error message if no data is available
   * @return error
  **/
  @Schema(description = "Error message if no data is available")
  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006Data inlineResponse2006Data = (InlineResponse2006Data) o;
    return Objects.equals(this.currency, inlineResponse2006Data.currency) &&
        Objects.equals(this.type, inlineResponse2006Data.type) &&
        Objects.equals(this.history, inlineResponse2006Data.history) &&
        Objects.equals(this.error, inlineResponse2006Data.error);
  }

  @Override
  public int hashCode() {
    return Objects.hash(currency, type, history, error);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006Data {\n");
    
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    history: ").append(toIndentedString(history)).append("\n");
    sb.append("    error: ").append(toIndentedString(error)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
