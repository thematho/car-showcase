'use strict';
/**
 * @ngdoc directive
 * @name carShowcaseApp.directives.compareListBtn:compareListBtn
 *
 * @description
 * Renders a button with a dropdown showing the current list of items
 * and adds features for clean the entire list or remove individual items
 *
 * @example
 *  <compare-list-btn
 *    compare-list="list"
 *  </compare-list-btn>
 */
angular.module('carShowcaseApp.directives.compareListBtn', [])
  .directive('compareListBtn', function() {

    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/compare-list-btn/compare-list-btn.tpl.html',
      replace: true,
      scope: {
        compareList: '='
      },
      link: function postLink(scope) {

        scope.removeItem = function(item) {
          var index = scope.compareList.indexOf(item);
          scope.compareList.splice(index, 1);
        };

        scope.cleanList = function() {
          if (scope.compareList) {
            while (scope.compareList.length) {
              scope.compareList.pop();
            }
          }
        };
      }
    };
  });
