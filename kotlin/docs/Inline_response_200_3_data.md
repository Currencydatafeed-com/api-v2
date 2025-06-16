# InlineResponse2003Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | [**kotlin.String**](.md) | Source currency code |  [optional]
**to** | [**kotlin.String**](.md) | Target currency code |  [optional]
**amount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Amount to convert |  [optional]
**rate** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Conversion rate applied |  [optional]
**conversionResult** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Result of the conversion (amount * rate) |  [optional]
**date** | [**java.time.LocalDateTime**](java.time.LocalDateTime.md) | Rate date/time used for conversion |  [optional]
**error** | [**kotlin.String**](.md) | Error message (present only if no data is available) |  [optional]
