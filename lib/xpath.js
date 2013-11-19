var xpath = require('../node_modules/jsdom/lib/jsdom/level3/xpath.js');
var XPathEvaluator = new xpath.XPathEvaluator();
var XPathResult = xpath.XPathResult;

module.exports = function(query, document) {
  var result = XPathEvaluator.evaluate(query, document, document, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
  return(result._value.nodes);
};
