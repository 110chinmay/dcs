'use strict';

/**
 * @ngdoc overview
 * @name dcsUiApp
 * @description
 * # dcsUiApp
 *
 * Main module of the application.
 */
angular.module('dcsUiApp', [
  'ngCookies',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.select',
  'ui.grid',
  'ui.grid.exporter', 
  'ui.grid.moveColumns'
]).config(function($routeProvider, $locationProvider, $httpProvider) {
    
    $routeProvider
    .when('/listing', {
      templateUrl: 'public/angular/views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/login', {
      templateUrl: 'public/angular/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .otherwise({
      redirectTo: '/listing'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

}).run(function($rootScope, $http, $q, $timeout, $location) {

  $rootScope.checkLoggedin = function() {
    
  };

  $rootScope.logout = function() {
    
  };
});
