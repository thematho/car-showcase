'use strict';

/**
 * @ngdoc controller
 * @name carShowcaseApp.controller:ShowCaseCtrl
 * @description
 *  Controller of the Showcase view handles the initialization
 *  of the view and the request to the service
 *
 * @requires carService
 *
 */
angular.module('carShowcaseApp.showcase')
  .controller('ShowCaseCtrl', function($scope,
    carService,
    carDetailModalService,
    compareListService) {

    $scope.compareList = compareListService.compareList;

    $scope.isInCompareList = compareListService.isInList;

    $scope.refresh = function getCars() {
      carService.getCarsFromJSON()
        .then(function(data) {
          $scope.carList = data.cars;
        });
    };

    $scope.openDetail = function(car) {
      var modalInstance = carDetailModalService.showModal(car);
      modalInstance.result
        .finally(function() {});
    };

    $scope.refresh();
  });
