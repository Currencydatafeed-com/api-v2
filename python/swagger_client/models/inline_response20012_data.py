# coding: utf-8

"""
    Currencydatafeed.com API V2

    > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found.   # noqa: E501

    OpenAPI spec version: 2.0.1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class InlineResponse20012Data(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'symbol': 'str',
        'last': 'float',
        'low': 'float',
        'high': 'float',
        'previous_day': 'float',
        'daily_change_percentage': 'float',
        'source': 'str',
        'updated': 'datetime'
    }

    attribute_map = {
        'symbol': 'symbol',
        'last': 'last',
        'low': 'low',
        'high': 'high',
        'previous_day': 'previous_day',
        'daily_change_percentage': 'daily_change_percentage',
        'source': 'source',
        'updated': 'updated'
    }

    def __init__(self, symbol=None, last=None, low=None, high=None, previous_day=None, daily_change_percentage=None, source=None, updated=None):  # noqa: E501
        """InlineResponse20012Data - a model defined in Swagger"""  # noqa: E501
        self._symbol = None
        self._last = None
        self._low = None
        self._high = None
        self._previous_day = None
        self._daily_change_percentage = None
        self._source = None
        self._updated = None
        self.discriminator = None
        if symbol is not None:
            self.symbol = symbol
        if last is not None:
            self.last = last
        if low is not None:
            self.low = low
        if high is not None:
            self.high = high
        if previous_day is not None:
            self.previous_day = previous_day
        if daily_change_percentage is not None:
            self.daily_change_percentage = daily_change_percentage
        if source is not None:
            self.source = source
        if updated is not None:
            self.updated = updated

    @property
    def symbol(self):
        """Gets the symbol of this InlineResponse20012Data.  # noqa: E501

        Cryptocurrency pair (e.g. BTCUSDT)  # noqa: E501

        :return: The symbol of this InlineResponse20012Data.  # noqa: E501
        :rtype: str
        """
        return self._symbol

    @symbol.setter
    def symbol(self, symbol):
        """Sets the symbol of this InlineResponse20012Data.

        Cryptocurrency pair (e.g. BTCUSDT)  # noqa: E501

        :param symbol: The symbol of this InlineResponse20012Data.  # noqa: E501
        :type: str
        """

        self._symbol = symbol

    @property
    def last(self):
        """Gets the last of this InlineResponse20012Data.  # noqa: E501

        Last trade price  # noqa: E501

        :return: The last of this InlineResponse20012Data.  # noqa: E501
        :rtype: float
        """
        return self._last

    @last.setter
    def last(self, last):
        """Sets the last of this InlineResponse20012Data.

        Last trade price  # noqa: E501

        :param last: The last of this InlineResponse20012Data.  # noqa: E501
        :type: float
        """

        self._last = last

    @property
    def low(self):
        """Gets the low of this InlineResponse20012Data.  # noqa: E501

        24h low price  # noqa: E501

        :return: The low of this InlineResponse20012Data.  # noqa: E501
        :rtype: float
        """
        return self._low

    @low.setter
    def low(self, low):
        """Sets the low of this InlineResponse20012Data.

        24h low price  # noqa: E501

        :param low: The low of this InlineResponse20012Data.  # noqa: E501
        :type: float
        """

        self._low = low

    @property
    def high(self):
        """Gets the high of this InlineResponse20012Data.  # noqa: E501

        24h high price  # noqa: E501

        :return: The high of this InlineResponse20012Data.  # noqa: E501
        :rtype: float
        """
        return self._high

    @high.setter
    def high(self, high):
        """Sets the high of this InlineResponse20012Data.

        24h high price  # noqa: E501

        :param high: The high of this InlineResponse20012Data.  # noqa: E501
        :type: float
        """

        self._high = high

    @property
    def previous_day(self):
        """Gets the previous_day of this InlineResponse20012Data.  # noqa: E501

        Previous day's closing price  # noqa: E501

        :return: The previous_day of this InlineResponse20012Data.  # noqa: E501
        :rtype: float
        """
        return self._previous_day

    @previous_day.setter
    def previous_day(self, previous_day):
        """Sets the previous_day of this InlineResponse20012Data.

        Previous day's closing price  # noqa: E501

        :param previous_day: The previous_day of this InlineResponse20012Data.  # noqa: E501
        :type: float
        """

        self._previous_day = previous_day

    @property
    def daily_change_percentage(self):
        """Gets the daily_change_percentage of this InlineResponse20012Data.  # noqa: E501

        24h change percentage  # noqa: E501

        :return: The daily_change_percentage of this InlineResponse20012Data.  # noqa: E501
        :rtype: float
        """
        return self._daily_change_percentage

    @daily_change_percentage.setter
    def daily_change_percentage(self, daily_change_percentage):
        """Sets the daily_change_percentage of this InlineResponse20012Data.

        24h change percentage  # noqa: E501

        :param daily_change_percentage: The daily_change_percentage of this InlineResponse20012Data.  # noqa: E501
        :type: float
        """

        self._daily_change_percentage = daily_change_percentage

    @property
    def source(self):
        """Gets the source of this InlineResponse20012Data.  # noqa: E501

        Exchange/market name (e.g. binance, bybit)  # noqa: E501

        :return: The source of this InlineResponse20012Data.  # noqa: E501
        :rtype: str
        """
        return self._source

    @source.setter
    def source(self, source):
        """Sets the source of this InlineResponse20012Data.

        Exchange/market name (e.g. binance, bybit)  # noqa: E501

        :param source: The source of this InlineResponse20012Data.  # noqa: E501
        :type: str
        """

        self._source = source

    @property
    def updated(self):
        """Gets the updated of this InlineResponse20012Data.  # noqa: E501

        Last update time  # noqa: E501

        :return: The updated of this InlineResponse20012Data.  # noqa: E501
        :rtype: datetime
        """
        return self._updated

    @updated.setter
    def updated(self, updated):
        """Sets the updated of this InlineResponse20012Data.

        Last update time  # noqa: E501

        :param updated: The updated of this InlineResponse20012Data.  # noqa: E501
        :type: datetime
        """

        self._updated = updated

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(InlineResponse20012Data, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, InlineResponse20012Data):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
