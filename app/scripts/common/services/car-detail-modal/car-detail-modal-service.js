'use strict';

/**
 * @ngdoc service
 * @name carShowcaseApp.services.carDetailModalService
 * @requires $resource
 * @requires $http
 *
 * @description
 * Provides access to car detailed information on a modal view
 *
 */
angular.module('carShowcaseApp.services.carDetailModalService', ['ui.bootstrap'])

.factory('carDetailModalService', function($modal, compareListService) {
  function showModal(car) {
    return $modal.open({
      size: 'lg',
      templateUrl: 'scripts/common/services/car-detail-modal/car-detail-modal.html',
      controller: function($scope, $modalInstance) {
        var initializing = true;
        $scope.car = car;

        $scope.close = function() {
          $modalInstance.close(true);
        };

        $scope.isListFull = compareListService.isListFull;

        $scope.showFullImage = function(url) {
          $modal.open({
            size: 'lg',
            template: '<img class="detail-image__zoom" src="' + url + '" >'
          });
        };

        if (compareListService.isInList(car)) {
          $scope.compare = true;
        }

        $scope.$watch('compare', function(compare) {
          if (initializing) {
            initializing = false;
          } else {
            if (compare !== undefined) {
              compareListService.toggleToList($scope.car);
            }
          }
        });
      },
    });
  }
  return {
    showModal: showModal
  };
});
