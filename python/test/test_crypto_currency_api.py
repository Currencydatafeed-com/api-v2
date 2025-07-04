# coding: utf-8

"""
    Currencydatafeed.com API V2

    > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found.   # noqa: E501

    OpenAPI spec version: 2.0.1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import unittest

import swagger_client
from swagger_client.api.crypto_currency_api import CryptoCurrencyApi  # noqa: E501
from swagger_client.rest import ApiException


class TestCryptoCurrencyApi(unittest.TestCase):
    """CryptoCurrencyApi unit test stubs"""

    def setUp(self):
        self.api = CryptoCurrencyApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_crypto_extended_history(self):
        """Test case for get_crypto_extended_history

        Get extended historical close prices for a specific crypto pair on an exchange  # noqa: E501
        """
        pass

    def test_get_crypto_extended_minute_history(self):
        """Test case for get_crypto_extended_minute_history

        Get intraday (minute-level) price history for a specific crypto pair on an exchange  # noqa: E501
        """
        pass

    def test_get_crypto_history(self):
        """Test case for get_crypto_history

        Get historical close prices for a cryptocurrency  # noqa: E501
        """
        pass

    def test_get_crypto_live(self):
        """Test case for get_crypto_live

        Get live data for one or more cryptocurrencies  # noqa: E501
        """
        pass

    def test_get_crypto_live_by_exchange(self):
        """Test case for get_crypto_live_by_exchange

        Get live crypto data for all pairs from a specific exchange  # noqa: E501
        """
        pass

    def test_get_crypto_live_extended(self):
        """Test case for get_crypto_live_extended

        Get extended live data for one or more crypto pairs from specific exchanges  # noqa: E501
        """
        pass

    def test_get_crypto_market_fear_greed_index(self):
        """Test case for get_crypto_market_fear_greed_index

        Get Crypto Market Fear & Greed Index  # noqa: E501
        """
        pass

    def test_get_crypto_minute_history(self):
        """Test case for get_crypto_minute_history

        Get 1-minute historical close prices for a cryptocurrency (up to 48 hours)  # noqa: E501
        """
        pass

    def test_get_crypto_onchain_metrics(self):
        """Test case for get_crypto_onchain_metrics

        Get on-chain metrics for Bitcoin and crypto markets  # noqa: E501
        """
        pass

    def test_get_crypto_performance(self):
        """Test case for get_crypto_performance

        Get performance of a single cryptocurrency over various periods  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
