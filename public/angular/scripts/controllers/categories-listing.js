'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:CategoriesListingCtrl
 * @description
 * # CategoriesListingCtrl
 * Controller of the dcsUiApp
 */
angular.module('dcsUiApp')
.controller('CategoriesListingCtrl', function ($rootScope, $scope, $routeParams, $location, Categories) {
    $scope.displaySpinner = true;
    $scope.currentCategoryId = $routeParams.id;
    var getAllCategories = function(){
        Categories.getAll($routeParams.id).then(function(response){
            $scope.categories  = response.data;
            $scope.currentCategory = _.find($scope.categories, function(o) { return o.cat_id == $scope.currentCategoryId; });
            if($scope.currentCategory == undefined){
                var arr = $scope.categories;
                for(var x in arr){
                     for(var i in arr[x]['subCategories']){
                       if(arr[x]['subCategories'][i]['cat_id'] == $scope.currentCategoryId){
                           $scope.currentCategory = arr[x]['subCategories'][i];
                       }
                     }
                }
            }

            console.log('$scope.currentCategory:', $scope.currentCategory);
        }).finally(function() {
            // Always execute this on both error and success
            $scope.displaySpinner = false;
        });
    }

    getAllCategories();

    $scope.onListingClick = function(adv){
        $location.path('/detail/' + 1);
    }

    $scope.startSearch = function (){

    }

    $scope.changeLocation = function (){
        
    }
});
