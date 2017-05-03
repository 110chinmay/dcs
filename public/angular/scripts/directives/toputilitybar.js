'use strict';

/**
 * @ngdoc directive
 * @name dcsUiApp.directive:topUtilityBar
 * @description
 * # topUtilityBar
 */
angular.module('dcsUiApp')
	.directive('topUtilityBar', function () {
		var controller = function ($scope) {
			$scope.options_cities = {
				types: ['(cities)'],
				componentRestrictions: { country: 'IN' }
			}
		};
		return {
			templateUrl: '/public/angular/views/templates/topUtilityBar.html',
			restrict: 'E',
			transclude: false,
			scope: {
				fullview: '='
			},
			controller: controller,
			link: function postLink(scope, element, attrs) {
				
			}
		};
	});
