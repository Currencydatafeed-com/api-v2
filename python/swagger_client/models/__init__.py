# coding: utf-8

# flake8: noqa
"""
    Currencydatafeed.com API V2

    > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found.   # noqa: E501

    OpenAPI spec version: 2.0.1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

# import models into model package
from swagger_client.models.inline_response200 import InlineResponse200
from swagger_client.models.inline_response2001 import InlineResponse2001
from swagger_client.models.inline_response20010 import InlineResponse20010
from swagger_client.models.inline_response20010_data import InlineResponse20010Data
from swagger_client.models.inline_response20011 import InlineResponse20011
from swagger_client.models.inline_response20011_data import InlineResponse20011Data
from swagger_client.models.inline_response20012 import InlineResponse20012
from swagger_client.models.inline_response20012_data import InlineResponse20012Data
from swagger_client.models.inline_response20013 import InlineResponse20013
from swagger_client.models.inline_response20013_data import InlineResponse20013Data
from swagger_client.models.inline_response20014 import InlineResponse20014
from swagger_client.models.inline_response20014_data import InlineResponse20014Data
from swagger_client.models.inline_response20015 import InlineResponse20015
from swagger_client.models.inline_response20015_data import InlineResponse20015Data
from swagger_client.models.inline_response20016 import InlineResponse20016
from swagger_client.models.inline_response20016_data import InlineResponse20016Data
from swagger_client.models.inline_response20017 import InlineResponse20017
from swagger_client.models.inline_response20018 import InlineResponse20018
from swagger_client.models.inline_response20018_data import InlineResponse20018Data
from swagger_client.models.inline_response20019 import InlineResponse20019
from swagger_client.models.inline_response20019_data import InlineResponse20019Data
from swagger_client.models.inline_response2001_data import InlineResponse2001Data
from swagger_client.models.inline_response2002 import InlineResponse2002
from swagger_client.models.inline_response2003 import InlineResponse2003
from swagger_client.models.inline_response2003_data import InlineResponse2003Data
from swagger_client.models.inline_response2004 import InlineResponse2004
from swagger_client.models.inline_response2004_data import InlineResponse2004Data
from swagger_client.models.inline_response2005 import InlineResponse2005
from swagger_client.models.inline_response2005_data import InlineResponse2005Data
from swagger_client.models.inline_response2006 import InlineResponse2006
from swagger_client.models.inline_response2006_data import InlineResponse2006Data
from swagger_client.models.inline_response2006_history import InlineResponse2006History
from swagger_client.models.inline_response2007 import InlineResponse2007
from swagger_client.models.inline_response2007_data import InlineResponse2007Data
from swagger_client.models.inline_response2008 import InlineResponse2008
from swagger_client.models.inline_response2008_data import InlineResponse2008Data
from swagger_client.models.inline_response2009 import InlineResponse2009
from swagger_client.models.inline_response2009_macd_data import InlineResponse2009MacdData
from swagger_client.models.inline_response2009_rsi_data import InlineResponse2009RsiData
from swagger_client.models.inline_response2009_technical_data import InlineResponse2009TechnicalData
from swagger_client.models.inline_response200_symbols import InlineResponse200Symbols
