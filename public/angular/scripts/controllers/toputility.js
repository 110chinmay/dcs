'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the Login page
 */
angular.module('dcsUiApp')
.controller('TopUtilityCtrl', function($scope) {
	$scope.options_cities = {
		types: ['(cities)'],
		componentRestrictions: { country: 'IN' }
	}
});
