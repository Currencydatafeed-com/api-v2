# InlineResponse2003Data

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **string** | Source currency code | [optional] [default to null]
**To** | **string** | Target currency code | [optional] [default to null]
**Amount** | **float64** | Amount to convert | [optional] [default to null]
**Rate** | **float64** | Conversion rate applied | [optional] [default to null]
**ConversionResult** | **float64** | Result of the conversion (amount * rate) | [optional] [default to null]
**Date** | [**time.Time**](time.Time.md) | Rate date/time used for conversion | [optional] [default to null]
**Error_** | **string** | Error message (present only if no data is available) | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

