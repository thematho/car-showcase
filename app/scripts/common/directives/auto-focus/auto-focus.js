'use strict';
/**
 * @ngdoc directive
 * @name carShowcaseApp.directives.autoFocus:autoFocus
 *
 * @description
 * This directive evaluates the value of the auto-focus Attribute
 * if is "true" or just if this attr is defined set focus on the current element
 *
 * @example
 *  <tag
 *    auto-focus>
 *  </tag>
 *  <tag
 *    auto-focus="modelTrue">
 *  </tag>
 */
angular.module('carShowcaseApp.directives.autoFocus', [])
  .directive('autoFocus', function() {

    return {
      restrict: 'A',
      link: function postLink(scope, iElement, attrs) {
        if (attrs.autoFocus === '' || attrs.autoFocus === 'true') {
          iElement.focus();
        }
      }
    };
  });
