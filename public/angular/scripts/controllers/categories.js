'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the dcsUiApp
 */
angular.module('dcsUiApp')
.controller('CategoriesCtrl', function ($rootScope, $scope, $location, $routeParams, Categories) {
    $scope.displaySpinner = true;
    $scope.currentCategoryId = $routeParams.id;
    console.log('$scope.currentCategoryId: ', $scope.currentCategoryId);
    var getAllCategories = function(){
        Categories.getAll().then(function(response){
            $scope.categories  = response.data;
            $scope.currentCategory = _.find($scope.categories, function(o) { return o.cat_id == $scope.currentCategoryId; });
        }).finally(function() {
            // Always execute this on both error and success
            $scope.displaySpinner = false;
        });
    }

    getAllCategories();

    $scope.onCategoryClick = function(category){
        $scope.currentCategory = category;
        $scope.currentCategoryId = category.cat_id;
    }

    $scope.onSubCategoryClick = function(subcategory){
        $location.path('/listing/' + subcategory.cat_id);
    }

    $scope.startSearch = function (){

    }

    $scope.changeLocation = function (){
        
    }
});
