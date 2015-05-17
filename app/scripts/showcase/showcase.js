'user strict';

/**
 * @ngdoc module
 * @name carShowcaseApp.showcase
 * @description The showcase module contains all the controlers and internal
 * directives for rendering and handle the logic of the list of cars view
 *
 */
angular
  .module('carShowcaseApp.showcase', [
    'carShowcaseApp.services.carDetailModalService',
    'carShowcaseApp.services.carService'
    ]);
