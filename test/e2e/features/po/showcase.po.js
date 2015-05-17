'use strict';

var _ = require('lodash'),
  q = require('q');

var ShowcasePageObject = function() {

  var searchInput = element(by.css('.js-login-btn')),
    carItemListSelector = '.car-list__item ';

  _.mixin(this, require('./common/base.js').Base);

  this.path = '#/';
  this.enterSearchText = function(searchText) {
    return searchInput.sendKeys(searchText);
  };

  this.isCarItemDisplayed = function(model, brand) {
    return element(by.cssContainingText(carItemListSelector, model))
      .isDisplayed()
      .then(function() {
        return element(by.cssContainingText(carItemListSelector, brand))
          .isDisplayed();
      });
  };

  this.isCarItemNotDisplayed = function(model, brand) {
    var defer = q.defer();
    element(by.cssContainingText(carItemListSelector, model))
      .isDisplayed()
      .then(function() {
        defer.reject();
      }, function() {
        element(by.cssContainingText(carItemListSelector, brand))
          .isDisplayed()
          .then(function() {
            defer.reject();
          }, function() {
            defer.resolve();
          });
      });
    defer.promise;
  };
};

module.exports = ShowcasePageObject;
