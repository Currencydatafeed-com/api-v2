/*
 * Currencydatafeed.com API V2
 * > 📘 **Looking for V1 API documentation?**   > Visit: [https://currencydatafeed.com/documentation.php](https://currencydatafeed.com/documentation.php)   A comprehensive data API to retrieve live and historical prices for currency pairs and cryptocurrencies, including technical analysis endpoints and on-chain metrics.  ## Authentication  All endpoints require an API token.  **Recommended:** Send your API token as a Bearer token in the HTTP `Authorization` header:  ``` Authorization: Bearer YOUR_API_TOKEN ```  **Example (cURL):** ```shell curl -H \"Authorization: Bearer YOUR_API_TOKEN\" \\   \"https://currencydatafeed.com/api/v2/live-rates\" ```  **Alternative:** You may also send the token as a `token` query parameter, but this is less secure and not recommended:  ``` https://currencydatafeed.com/api/v2/live-rates?token=YOUR_API_TOKEN ```  > The API first checks the Authorization header, then the `token` parameter if no header is found. 
 *
 * OpenAPI spec version: 2.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CurrencydatafeedcomApiV2);
  }
}(this, function(expect, CurrencydatafeedcomApiV2) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse2008Data', function() {
      beforeEach(function() {
        instance = new CurrencydatafeedcomApiV2.InlineResponse2008Data();
      });

      it('should create an instance of InlineResponse2008Data', function() {
        // TODO: update the code to test InlineResponse2008Data
        expect(instance).to.be.a(CurrencydatafeedcomApiV2.InlineResponse2008Data);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property pivot (base name: "pivot")', function() {
        // TODO: update the code to test the property pivot
        expect(instance).to.have.property('pivot');
        // expect(instance.pivot).to.be(expectedValueLiteral);
      });

      it('should have the property resistance1 (base name: "resistance1")', function() {
        // TODO: update the code to test the property resistance1
        expect(instance).to.have.property('resistance1');
        // expect(instance.resistance1).to.be(expectedValueLiteral);
      });

      it('should have the property support1 (base name: "support1")', function() {
        // TODO: update the code to test the property support1
        expect(instance).to.have.property('support1');
        // expect(instance.support1).to.be(expectedValueLiteral);
      });

      it('should have the property resistance2 (base name: "resistance2")', function() {
        // TODO: update the code to test the property resistance2
        expect(instance).to.have.property('resistance2');
        // expect(instance.resistance2).to.be(expectedValueLiteral);
      });

      it('should have the property support2 (base name: "support2")', function() {
        // TODO: update the code to test the property support2
        expect(instance).to.have.property('support2');
        // expect(instance.support2).to.be(expectedValueLiteral);
      });

      it('should have the property resistance3 (base name: "resistance3")', function() {
        // TODO: update the code to test the property resistance3
        expect(instance).to.have.property('resistance3');
        // expect(instance.resistance3).to.be(expectedValueLiteral);
      });

      it('should have the property support3 (base name: "support3")', function() {
        // TODO: update the code to test the property support3
        expect(instance).to.have.property('support3');
        // expect(instance.support3).to.be(expectedValueLiteral);
      });

      it('should have the property bollingerUpper (base name: "bollinger_upper")', function() {
        // TODO: update the code to test the property bollingerUpper
        expect(instance).to.have.property('bollingerUpper');
        // expect(instance.bollingerUpper).to.be(expectedValueLiteral);
      });

      it('should have the property bollingerLower (base name: "bollinger_lower")', function() {
        // TODO: update the code to test the property bollingerLower
        expect(instance).to.have.property('bollingerLower');
        // expect(instance.bollingerLower).to.be(expectedValueLiteral);
      });

    });
  });

}));
