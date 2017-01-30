'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dcsUiApp
 */
angular.module('dcsUiApp')
.controller('MainCtrl', function ($rootScope, $scope, $location, Categories) {
	$scope.displaySpinner = true;
	var getAllCategories = function(){
		Categories.getAll().then(function(response){
			$scope.categories  = response.data;
		}).finally(function() {
			// Always execute this on both error and success
			$scope.displaySpinner = false;
		});
	}

	getAllCategories();

	$scope.onCategoryClick = function(category){
		console.log('category', category);
		$location.path('/categories/' + category.cat_id);
	}

	$scope.startSearch = function (){

	}

	$scope.changeLocation = function (){
		
	}
});
