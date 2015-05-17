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
    carDetailModalService) {

    $scope.refresh = function getCars() {
      carService.getCarsFromJSON()
        .then(function(data) {
          $scope.carList = data.cars;
        });
    };

    $scope.openDetail = carDetailModalService.showModal;

    $scope.refresh();
  });
