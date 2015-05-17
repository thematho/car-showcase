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
 *  <image-holder
 *    src="imageURL"
 *    holder-class="myHolderClass">
 *  </image-holder>
 *
 * @param {String} [src="/images/myImage.png"] String with the image URL
 *   to be shown
 * @param {String} [myHolderClass='myHolder'] optional class name for
 *   the holder that is shown until the image is loded properly
 */
angular.module('carShowcaseApp.directives.imageHolder', [])
  .directive('imageHolder', function() {

    return {
      restrict: 'E',
      templateUrl: 'scripts/common/directives/image-holder/image-holder.tpl.html',
      replace: true,
      scope: {
        src: '=',
        holderClass: '@'
      },
      link: function postLink(scope, iElement) {
        var bgImg = new Image();

        bgImg.onload = function() {
          scope.$apply(function() {
            iElement.find('.image-holder__item')
              .css('background-image', 'url("' + scope.src + '")');
            scope.isLoaded = true;
          });
        };
        bgImg.src = scope.src;

      }
    };
  });
