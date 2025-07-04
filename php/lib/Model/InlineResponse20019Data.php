<?php
/**
 * InlineResponse20019Data
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Currencydatafeed.com API V2
 *
 * > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found.
 *
 * OpenAPI spec version: 2.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 3.0.68
 */
/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * InlineResponse20019Data Class Doc Comment
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class InlineResponse20019Data implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'inline_response_200_19_data';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        '_1d' => 'float',
        '_7d' => 'float',
        '_15d' => 'float',
        '_30d' => 'float',
        '_90d' => 'float',
        '_180d' => 'float',
        '_270d' => 'float',
        '_365d' => 'float',
        '_720d' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        '_1d' => 'float',
        '_7d' => 'float',
        '_15d' => 'float',
        '_30d' => 'float',
        '_90d' => 'float',
        '_180d' => 'float',
        '_270d' => 'float',
        '_365d' => 'float',
        '_720d' => 'float'
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        '_1d' => '1d',
        '_7d' => '7d',
        '_15d' => '15d',
        '_30d' => '30d',
        '_90d' => '90d',
        '_180d' => '180d',
        '_270d' => '270d',
        '_365d' => '365d',
        '_720d' => '720d'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        '_1d' => 'set1d',
        '_7d' => 'set7d',
        '_15d' => 'set15d',
        '_30d' => 'set30d',
        '_90d' => 'set90d',
        '_180d' => 'set180d',
        '_270d' => 'set270d',
        '_365d' => 'set365d',
        '_720d' => 'set720d'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        '_1d' => 'get1d',
        '_7d' => 'get7d',
        '_15d' => 'get15d',
        '_30d' => 'get30d',
        '_90d' => 'get90d',
        '_180d' => 'get180d',
        '_270d' => 'get270d',
        '_365d' => 'get365d',
        '_720d' => 'get720d'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }



    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['_1d'] = isset($data['_1d']) ? $data['_1d'] : null;
        $this->container['_7d'] = isset($data['_7d']) ? $data['_7d'] : null;
        $this->container['_15d'] = isset($data['_15d']) ? $data['_15d'] : null;
        $this->container['_30d'] = isset($data['_30d']) ? $data['_30d'] : null;
        $this->container['_90d'] = isset($data['_90d']) ? $data['_90d'] : null;
        $this->container['_180d'] = isset($data['_180d']) ? $data['_180d'] : null;
        $this->container['_270d'] = isset($data['_270d']) ? $data['_270d'] : null;
        $this->container['_365d'] = isset($data['_365d']) ? $data['_365d'] : null;
        $this->container['_720d'] = isset($data['_720d']) ? $data['_720d'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets _1d
     *
     * @return float
     */
    public function get1d()
    {
        return $this->container['_1d'];
    }

    /**
     * Sets _1d
     *
     * @param float $_1d Percent change over 1 day
     *
     * @return $this
     */
    public function set1d($_1d)
    {
        $this->container['_1d'] = $_1d;

        return $this;
    }

    /**
     * Gets _7d
     *
     * @return float
     */
    public function get7d()
    {
        return $this->container['_7d'];
    }

    /**
     * Sets _7d
     *
     * @param float $_7d Percent change over 7 days
     *
     * @return $this
     */
    public function set7d($_7d)
    {
        $this->container['_7d'] = $_7d;

        return $this;
    }

    /**
     * Gets _15d
     *
     * @return float
     */
    public function get15d()
    {
        return $this->container['_15d'];
    }

    /**
     * Sets _15d
     *
     * @param float $_15d Percent change over 15 days
     *
     * @return $this
     */
    public function set15d($_15d)
    {
        $this->container['_15d'] = $_15d;

        return $this;
    }

    /**
     * Gets _30d
     *
     * @return float
     */
    public function get30d()
    {
        return $this->container['_30d'];
    }

    /**
     * Sets _30d
     *
     * @param float $_30d Percent change over 30 days
     *
     * @return $this
     */
    public function set30d($_30d)
    {
        $this->container['_30d'] = $_30d;

        return $this;
    }

    /**
     * Gets _90d
     *
     * @return float
     */
    public function get90d()
    {
        return $this->container['_90d'];
    }

    /**
     * Sets _90d
     *
     * @param float $_90d Percent change over 90 days
     *
     * @return $this
     */
    public function set90d($_90d)
    {
        $this->container['_90d'] = $_90d;

        return $this;
    }

    /**
     * Gets _180d
     *
     * @return float
     */
    public function get180d()
    {
        return $this->container['_180d'];
    }

    /**
     * Sets _180d
     *
     * @param float $_180d Percent change over 180 days
     *
     * @return $this
     */
    public function set180d($_180d)
    {
        $this->container['_180d'] = $_180d;

        return $this;
    }

    /**
     * Gets _270d
     *
     * @return float
     */
    public function get270d()
    {
        return $this->container['_270d'];
    }

    /**
     * Sets _270d
     *
     * @param float $_270d Percent change over 270 days
     *
     * @return $this
     */
    public function set270d($_270d)
    {
        $this->container['_270d'] = $_270d;

        return $this;
    }

    /**
     * Gets _365d
     *
     * @return float
     */
    public function get365d()
    {
        return $this->container['_365d'];
    }

    /**
     * Sets _365d
     *
     * @param float $_365d Percent change over 365 days
     *
     * @return $this
     */
    public function set365d($_365d)
    {
        $this->container['_365d'] = $_365d;

        return $this;
    }

    /**
     * Gets _720d
     *
     * @return float
     */
    public function get720d()
    {
        return $this->container['_720d'];
    }

    /**
     * Sets _720d
     *
     * @param float $_720d Percent change over 720 days
     *
     * @return $this
     */
    public function set720d($_720d)
    {
        $this->container['_720d'] = $_720d;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    #[\ReturnTypeWillChange]
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    #[\ReturnTypeWillChange]
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    #[\ReturnTypeWillChange]
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}
