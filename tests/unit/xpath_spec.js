var root     = __dirname + '/../../';
var fixtures = require(root + 'tests/helpers/fixtures');
var jsdom    = require('jsdom');
var xpath    = require(root + 'lib/xpath');

describe("xpath", function() {
  it("Should return a list of objects", function(done) {
    var html  = fixtures.kittens;
    var query = "//a[contains(@class,'photo-click')]";
    jsdom.env(html, [], function(err, window) {
      var results = xpath(query, window.document);
      expect(results.constructor).toEqual(Array);
      results.map(function(result) {
        expect(result.constructor).toEqual(Object);
      });
      done();
    });
  });
});
