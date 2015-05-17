'use strict';

/**
 * @ngdoc service
 * @name carShowcaseApp.services.carService
 * @requires $resource
 * @requires $http
 *
 * @description
 * Provides access to car information from the web services
 *
 */
angular.module('carShowcaseApp.services.carService', [])

.factory('carService', function($http, $resource) {
  var serviceURl = '\/services\/car';
  var carResource = $resource(serviceURl, {}, {
    get: {
      cache: false,
      method: 'GET',
      responseType: 'json'
    }
  });

  function getCarsFromWebService() {
    return carResource
      .get()
      .$promise
      .then(function(response) {
        return response.data;
      });
  }

  function getCarsFromJSON() {
    return $http
      .get('/data.json', {
        responseType: 'json'
      })
      .then(function(response) {
        return response.data;
      });
  }

  return {
    /**
     * Returns an array of cars objects, each with the following structure:
     *  {
     *   "imageURl": "url/image.jpg", // String url of image file
     *   "model": "model-name",       // String
     *   "year": 2015,                // Number
     *   "brand": "brand-name",       // String
     *   "price": 5000                // Number
     * }
     * @type {Array}
     */
    getCarsFromJSON: getCarsFromJSON,
    getCarsFromWebService: getCarsFromWebService,

  };
});
