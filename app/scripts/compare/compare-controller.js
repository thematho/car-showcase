'use strict';

/**
 * @ngdoc controller
 * @name carShowcaseApp.controller:CompareCtrl
 * @description
 *  Controller of the Compare view handles the initialization
 *  of the view
 *
 */
angular.module('carShowcaseApp.compare')
  .controller('CompareCtrl', function(
    $scope,
    $stateParams,
    $modal,
    ROUTE_CONFIG) {

    $scope.goHome = function() {
      $scope.go(ROUTE_CONFIG.DEFAULT_STATE);
    };

    $scope.openImageModal = function(item) {
      $modal.open({
        size: 'lg',
        template: '<img class="detail-image__zoom" src="' + item.imageUrl + '" >'
      });
    };

    $scope.compareList = $stateParams.compareList;
  });
