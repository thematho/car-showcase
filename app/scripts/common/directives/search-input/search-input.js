'use strict';
/**
 * @ngdoc directive
 * @name carShowcaseApp.directives.searchInput:searchInput
 *
 * @description
 * This directive renders a search input field with clean buttton and ng-model
 * binded to the search variable
 *
 * @example
 *  <search-input
 *    search-text="search"
 *  </image-holder>
 */
angular.module('carShowcaseApp.directives.searchInput', [
  'carShowcaseApp.directives.autoFocus'
  ])
  .directive('searchInput', function() {

    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/search-input/search-input.tpl.html',
      replace: true,
      scope: {
        searchText: '='
      },
      link: function postLink(scope, iElement) {
        scope.cleanSearch = function() {
          scope.searchText = '';
          iElement.find('input').focus();
        };
      }
    };
  });
