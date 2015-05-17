'use strict';

/**
 * @ngdoc overview
 * @name carShowcaseApp
 * @description
 * # carShowcaseApp
 *
 * Main module of the application.
 */
angular
  .module('carShowcaseApp', [
    'carShowcaseApp.templates',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'carShowcaseApp.services',
    'carShowcaseApp.directives',
    'carShowcaseApp.showcase'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('showcase', {
        url: '/',
        templateUrl: 'scripts/showcase/showcase.html',
        controller: 'ShowCaseCtrl'
      });
  });
