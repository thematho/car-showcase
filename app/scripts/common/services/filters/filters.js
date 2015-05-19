'use strict';

angular.module('carShowcaseApp.filters', [])

.filter('capitalize', function() {
  return function(inputText) {
    if (!inputText) {
      return '';
    }
    return inputText.charAt(0).toUpperCase() +
      inputText.substring(1);
  };
});
