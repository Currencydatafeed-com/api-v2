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
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.math.BigDecimal;
import org.threeten.bp.OffsetDateTime;
/**
 * InlineResponse2003Data
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2025-06-16T10:33:10.614284809Z[GMT]")

public class InlineResponse2003Data {
  @SerializedName("from")
  private String from = null;

  @SerializedName("to")
  private String to = null;

  @SerializedName("amount")
  private BigDecimal amount = null;

  @SerializedName("rate")
  private BigDecimal rate = null;

  @SerializedName("conversion_result")
  private BigDecimal conversionResult = null;

  @SerializedName("date")
  private OffsetDateTime date = null;

  @SerializedName("error")
  private String error = null;

  public InlineResponse2003Data from(String from) {
    this.from = from;
    return this;
  }

   /**
   * Source currency code
   * @return from
  **/
  @Schema(description = "Source currency code")
  public String getFrom() {
    return from;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public InlineResponse2003Data to(String to) {
    this.to = to;
    return this;
  }

   /**
   * Target currency code
   * @return to
  **/
  @Schema(description = "Target currency code")
  public String getTo() {
    return to;
  }

  public void setTo(String to) {
    this.to = to;
  }

  public InlineResponse2003Data amount(BigDecimal amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Amount to convert
   * @return amount
  **/
  @Schema(description = "Amount to convert")
  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public InlineResponse2003Data rate(BigDecimal rate) {
    this.rate = rate;
    return this;
  }

   /**
   * Conversion rate applied
   * @return rate
  **/
  @Schema(description = "Conversion rate applied")
  public BigDecimal getRate() {
    return rate;
  }

  public void setRate(BigDecimal rate) {
    this.rate = rate;
  }

  public InlineResponse2003Data conversionResult(BigDecimal conversionResult) {
    this.conversionResult = conversionResult;
    return this;
  }

   /**
   * Result of the conversion (amount * rate)
   * @return conversionResult
  **/
  @Schema(description = "Result of the conversion (amount * rate)")
  public BigDecimal getConversionResult() {
    return conversionResult;
  }

  public void setConversionResult(BigDecimal conversionResult) {
    this.conversionResult = conversionResult;
  }

  public InlineResponse2003Data date(OffsetDateTime date) {
    this.date = date;
    return this;
  }

   /**
   * Rate date/time used for conversion
   * @return date
  **/
  @Schema(description = "Rate date/time used for conversion")
  public OffsetDateTime getDate() {
    return date;
  }

  public void setDate(OffsetDateTime date) {
    this.date = date;
  }

  public InlineResponse2003Data error(String error) {
    this.error = error;
    return this;
  }

   /**
   * Error message (present only if no data is available)
   * @return error
  **/
  @Schema(description = "Error message (present only if no data is available)")
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
    InlineResponse2003Data inlineResponse2003Data = (InlineResponse2003Data) o;
    return Objects.equals(this.from, inlineResponse2003Data.from) &&
        Objects.equals(this.to, inlineResponse2003Data.to) &&
        Objects.equals(this.amount, inlineResponse2003Data.amount) &&
        Objects.equals(this.rate, inlineResponse2003Data.rate) &&
        Objects.equals(this.conversionResult, inlineResponse2003Data.conversionResult) &&
        Objects.equals(this.date, inlineResponse2003Data.date) &&
        Objects.equals(this.error, inlineResponse2003Data.error);
  }

  @Override
  public int hashCode() {
    return Objects.hash(from, to, amount, rate, conversionResult, date, error);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003Data {\n");
    
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    to: ").append(toIndentedString(to)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    rate: ").append(toIndentedString(rate)).append("\n");
    sb.append("    conversionResult: ").append(toIndentedString(conversionResult)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
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
