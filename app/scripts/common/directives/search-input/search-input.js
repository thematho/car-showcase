'use strict';
/**
 * @ngdoc directive
 * @name carShowcaseApp.directives.imageHolder:imageHolder
 *
 * @description
 * This directive loads an image and shows it only if the image
 * could be loaded correctly
 *
 * @example
 *  <search-input
 *    search-text="search"
 *  </image-holder>
 */
angular.module('carShowcaseApp.directives.searchInput', [])
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
