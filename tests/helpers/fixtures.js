var fs = require('fs');

module.exports.kittens = function() {
  var path = 'tests/fixtures/kittens.html';
  return fs.readFileSync(path).toString();
}();
