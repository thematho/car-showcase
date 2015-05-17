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

.factory('carDetailModalService', function($modal) {
  function showModal(car) {
    $modal.open({
      size: 'lg',
      templateUrl: 'scripts/common/services/car-detail-modal/car-detail-modal.html',
      controller: function($scope, $modalInstance) {
        $scope.car = car;
        $scope.close = function() {
          $modalInstance.close(true);
        };
        $scope.showFullImage = function(url) {
          $modal.open({
            size: 'lg',
            template: '<img class="detail-image__zoom" src="' + url + '" >'
          });

        };
      },
    });
  }
  return {
    showModal: showModal
  };
});
