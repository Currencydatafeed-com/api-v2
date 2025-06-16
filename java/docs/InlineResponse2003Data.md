# InlineResponse2003Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** | Source currency code |  [optional]
**to** | **String** | Target currency code |  [optional]
**amount** | [**BigDecimal**](BigDecimal.md) | Amount to convert |  [optional]
**rate** | [**BigDecimal**](BigDecimal.md) | Conversion rate applied |  [optional]
**conversionResult** | [**BigDecimal**](BigDecimal.md) | Result of the conversion (amount * rate) |  [optional]
**date** | [**OffsetDateTime**](OffsetDateTime.md) | Rate date/time used for conversion |  [optional]
**error** | **String** | Error message (present only if no data is available) |  [optional]
