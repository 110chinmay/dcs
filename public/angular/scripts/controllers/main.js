'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dcsUiApp
 */
angular.module('dcsUiApp')
.controller('MainCtrl', function ($rootScope, $scope, Ads) {
	Ads.getAll().then(function(response){
		console.log(response);
	});
});
