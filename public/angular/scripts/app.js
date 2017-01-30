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
    .when('/home', {
      templateUrl: 'public/angular/views/main.html',
      controller: 'MainCtrl'
    })
    .when('/categories/:id', {
      templateUrl: 'public/angular/views/categories.html',
      controller: 'CategoriesCtrl'
    })
    .when('/listing/:id', {
      templateUrl: 'public/angular/views/categories-listing.html',
      controller: 'CategoriesListingCtrl'
    })
    .when('/detail/:id', {
      templateUrl: 'public/angular/views/detail-view.html',
      controller: 'DetailViewCtrl'
    })
    .when('/login', {
      templateUrl: 'public/angular/views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/myaccount', {
      templateUrl: 'public/angular/views/my-account.html',
      controller: 'MyAccountCtrl'
    })
    .when('/submitnewadv', {
      templateUrl: 'public/angular/views/submit-new-ad.html',
      controller: 'SubmitNewAdCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

}).run(function($rootScope, $http, $q, $timeout, $location) {

  $rootScope.checkLoggedin = function() {
    
  };

  $rootScope.logout = function() {
    
  };
});
