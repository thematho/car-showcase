var sugarStep = require('../support/sugar-step/lib/sugar-step.js'),
  showcasePO = new(require('../po/showcase.po.js'))();

module.exports = function() {
  'use strict';

  var given, then, when;

  given = then = when = sugarStep(this.defineStep);

  this.path = '#/';

  given(/^I am on the main page$/, function() {
    showcasePO.visit();
  });

  given(/^I write "?([^"]*)"? in the search field/, function(searchText) {
    return showcasePO.enterSearchText(searchText);
  });

  given(/^I should see "?([^"]*)"? model "?([^"]*)"? brand$/,
    function(model, brand) {
      return showcasePO.isCarItemDisplayed(model, brand);
    });

  given(/^I should not see "?([^"]*)"? model "?([^"]*)"? brand$/,
    function(model, brand) {
      return showcasePO.isCarItemNotDisplayed(model, brand);
    });

};
