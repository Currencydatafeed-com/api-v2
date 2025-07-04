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
import org.threeten.bp.LocalDate;
/**
 * InlineResponse2009TechnicalData
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2025-06-16T10:33:10.614284809Z[GMT]")

public class InlineResponse2009TechnicalData {
  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("sma_10")
  private BigDecimal sma10 = null;

  @SerializedName("sma_20")
  private BigDecimal sma20 = null;

  @SerializedName("sma_50")
  private BigDecimal sma50 = null;

  @SerializedName("sma_100")
  private BigDecimal sma100 = null;

  @SerializedName("sma_200")
  private BigDecimal sma200 = null;

  @SerializedName("ema_12")
  private BigDecimal ema12 = null;

  @SerializedName("ema_26")
  private BigDecimal ema26 = null;

  @SerializedName("ema_50")
  private BigDecimal ema50 = null;

  @SerializedName("stochastic_k")
  private BigDecimal stochasticK = null;

  @SerializedName("stochastic_d")
  private BigDecimal stochasticD = null;

  @SerializedName("adx")
  private BigDecimal adx = null;

  @SerializedName("cci")
  private BigDecimal cci = null;

  @SerializedName("williams_r")
  private BigDecimal williamsR = null;

  public InlineResponse2009TechnicalData date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @Schema(description = "")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public InlineResponse2009TechnicalData sma10(BigDecimal sma10) {
    this.sma10 = sma10;
    return this;
  }

   /**
   * Get sma10
   * @return sma10
  **/
  @Schema(description = "")
  public BigDecimal getSma10() {
    return sma10;
  }

  public void setSma10(BigDecimal sma10) {
    this.sma10 = sma10;
  }

  public InlineResponse2009TechnicalData sma20(BigDecimal sma20) {
    this.sma20 = sma20;
    return this;
  }

   /**
   * Get sma20
   * @return sma20
  **/
  @Schema(description = "")
  public BigDecimal getSma20() {
    return sma20;
  }

  public void setSma20(BigDecimal sma20) {
    this.sma20 = sma20;
  }

  public InlineResponse2009TechnicalData sma50(BigDecimal sma50) {
    this.sma50 = sma50;
    return this;
  }

   /**
   * Get sma50
   * @return sma50
  **/
  @Schema(description = "")
  public BigDecimal getSma50() {
    return sma50;
  }

  public void setSma50(BigDecimal sma50) {
    this.sma50 = sma50;
  }

  public InlineResponse2009TechnicalData sma100(BigDecimal sma100) {
    this.sma100 = sma100;
    return this;
  }

   /**
   * Get sma100
   * @return sma100
  **/
  @Schema(description = "")
  public BigDecimal getSma100() {
    return sma100;
  }

  public void setSma100(BigDecimal sma100) {
    this.sma100 = sma100;
  }

  public InlineResponse2009TechnicalData sma200(BigDecimal sma200) {
    this.sma200 = sma200;
    return this;
  }

   /**
   * Get sma200
   * @return sma200
  **/
  @Schema(description = "")
  public BigDecimal getSma200() {
    return sma200;
  }

  public void setSma200(BigDecimal sma200) {
    this.sma200 = sma200;
  }

  public InlineResponse2009TechnicalData ema12(BigDecimal ema12) {
    this.ema12 = ema12;
    return this;
  }

   /**
   * Get ema12
   * @return ema12
  **/
  @Schema(description = "")
  public BigDecimal getEma12() {
    return ema12;
  }

  public void setEma12(BigDecimal ema12) {
    this.ema12 = ema12;
  }

  public InlineResponse2009TechnicalData ema26(BigDecimal ema26) {
    this.ema26 = ema26;
    return this;
  }

   /**
   * Get ema26
   * @return ema26
  **/
  @Schema(description = "")
  public BigDecimal getEma26() {
    return ema26;
  }

  public void setEma26(BigDecimal ema26) {
    this.ema26 = ema26;
  }

  public InlineResponse2009TechnicalData ema50(BigDecimal ema50) {
    this.ema50 = ema50;
    return this;
  }

   /**
   * Get ema50
   * @return ema50
  **/
  @Schema(description = "")
  public BigDecimal getEma50() {
    return ema50;
  }

  public void setEma50(BigDecimal ema50) {
    this.ema50 = ema50;
  }

  public InlineResponse2009TechnicalData stochasticK(BigDecimal stochasticK) {
    this.stochasticK = stochasticK;
    return this;
  }

   /**
   * Get stochasticK
   * @return stochasticK
  **/
  @Schema(description = "")
  public BigDecimal getStochasticK() {
    return stochasticK;
  }

  public void setStochasticK(BigDecimal stochasticK) {
    this.stochasticK = stochasticK;
  }

  public InlineResponse2009TechnicalData stochasticD(BigDecimal stochasticD) {
    this.stochasticD = stochasticD;
    return this;
  }

   /**
   * Get stochasticD
   * @return stochasticD
  **/
  @Schema(description = "")
  public BigDecimal getStochasticD() {
    return stochasticD;
  }

  public void setStochasticD(BigDecimal stochasticD) {
    this.stochasticD = stochasticD;
  }

  public InlineResponse2009TechnicalData adx(BigDecimal adx) {
    this.adx = adx;
    return this;
  }

   /**
   * Get adx
   * @return adx
  **/
  @Schema(description = "")
  public BigDecimal getAdx() {
    return adx;
  }

  public void setAdx(BigDecimal adx) {
    this.adx = adx;
  }

  public InlineResponse2009TechnicalData cci(BigDecimal cci) {
    this.cci = cci;
    return this;
  }

   /**
   * Get cci
   * @return cci
  **/
  @Schema(description = "")
  public BigDecimal getCci() {
    return cci;
  }

  public void setCci(BigDecimal cci) {
    this.cci = cci;
  }

  public InlineResponse2009TechnicalData williamsR(BigDecimal williamsR) {
    this.williamsR = williamsR;
    return this;
  }

   /**
   * Get williamsR
   * @return williamsR
  **/
  @Schema(description = "")
  public BigDecimal getWilliamsR() {
    return williamsR;
  }

  public void setWilliamsR(BigDecimal williamsR) {
    this.williamsR = williamsR;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2009TechnicalData inlineResponse2009TechnicalData = (InlineResponse2009TechnicalData) o;
    return Objects.equals(this.date, inlineResponse2009TechnicalData.date) &&
        Objects.equals(this.sma10, inlineResponse2009TechnicalData.sma10) &&
        Objects.equals(this.sma20, inlineResponse2009TechnicalData.sma20) &&
        Objects.equals(this.sma50, inlineResponse2009TechnicalData.sma50) &&
        Objects.equals(this.sma100, inlineResponse2009TechnicalData.sma100) &&
        Objects.equals(this.sma200, inlineResponse2009TechnicalData.sma200) &&
        Objects.equals(this.ema12, inlineResponse2009TechnicalData.ema12) &&
        Objects.equals(this.ema26, inlineResponse2009TechnicalData.ema26) &&
        Objects.equals(this.ema50, inlineResponse2009TechnicalData.ema50) &&
        Objects.equals(this.stochasticK, inlineResponse2009TechnicalData.stochasticK) &&
        Objects.equals(this.stochasticD, inlineResponse2009TechnicalData.stochasticD) &&
        Objects.equals(this.adx, inlineResponse2009TechnicalData.adx) &&
        Objects.equals(this.cci, inlineResponse2009TechnicalData.cci) &&
        Objects.equals(this.williamsR, inlineResponse2009TechnicalData.williamsR);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, sma10, sma20, sma50, sma100, sma200, ema12, ema26, ema50, stochasticK, stochasticD, adx, cci, williamsR);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2009TechnicalData {\n");
    
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    sma10: ").append(toIndentedString(sma10)).append("\n");
    sb.append("    sma20: ").append(toIndentedString(sma20)).append("\n");
    sb.append("    sma50: ").append(toIndentedString(sma50)).append("\n");
    sb.append("    sma100: ").append(toIndentedString(sma100)).append("\n");
    sb.append("    sma200: ").append(toIndentedString(sma200)).append("\n");
    sb.append("    ema12: ").append(toIndentedString(ema12)).append("\n");
    sb.append("    ema26: ").append(toIndentedString(ema26)).append("\n");
    sb.append("    ema50: ").append(toIndentedString(ema50)).append("\n");
    sb.append("    stochasticK: ").append(toIndentedString(stochasticK)).append("\n");
    sb.append("    stochasticD: ").append(toIndentedString(stochasticD)).append("\n");
    sb.append("    adx: ").append(toIndentedString(adx)).append("\n");
    sb.append("    cci: ").append(toIndentedString(cci)).append("\n");
    sb.append("    williamsR: ").append(toIndentedString(williamsR)).append("\n");
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
