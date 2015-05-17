'use strict';
/**
 * @ngdoc directive
 * @name carShowcaseApp.directives.imageHolder:imageHolder
 *
 * @description
 * This directive add the class 'fixed' on the element once the user
 * scrolls X distance
 */
angular.module('carShowcaseApp.directives.fixedPosition', [])
  .directive('fixedPosition', function($window) {

    return {
      restrict: 'A',
      scope: {
        distance: '='
      },
      link: function postLink(scope, iElement) {
        $window.addEventListener('scroll', function() {
          if ($($window).scrollTop() > (scope.distance || 0)) {
            iElement.addClass('fixed');
          } else {
            iElement.removeClass('fixed');
          }
        });
      }
    };
  });
