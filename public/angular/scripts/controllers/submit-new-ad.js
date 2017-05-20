'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:SubmitNewAdCtrl
 * @description
 * # SubmitNewAdCtrl
 * Controller of the Header page
 */
angular.module('dcsUiApp')
.controller('SubmitNewAdCtrl', function($scope, $rootScope, Categories, Ads) {
    $scope.displaySpinner = true;
    $scope.regExMobile = [0-9]
    var getAllCategories = function(){
        Categories.getAll().then(function(response){
            $scope.categories  = response.data;
            $scope.selectedCategoery = $scope.categories[1];
            $scope.selectedSubCategoery = $scope.categories[1].subCategories[0];
            $scope.vm.adv.category = $scope.selectedCategoery.cat_id;
            $scope.vm.adv.subcategory = $scope.selectedSubCategoery.cat_id;
        }).finally(function() {
            // Always execute this on both error and success
            $scope.displaySpinner = false;
        });
    }

    $scope.vm = {
        adv: {
            title: '',
            category: '',
            subcategory: '',
            description: '',
            owner: '',
            mobile: '',
            city: '',
            address: ''
        }
    }

    $scope.onCategoryChange = function(){   
        $scope.vm.adv.category = $scope.selectedCategoery.cat_id;
        $scope.selectedSubCategoery = $scope.selectedCategoery.subCategories[0];
        $scope.vm.adv.subcategory = $scope.selectedSubCategoery.cat_id;
    }

    $scope.onSubCategoryChange = function(){
        setTimeout(function(){
            $scope.vm.adv.subcategory = $scope.selectedSubCategoery.cat_id;
        }, 10)
    }

    getAllCategories();
	$scope.user = {
		advtitle: ''
	}
    $scope.options_cities = {
        types: ['(cities)'],
        componentRestrictions: { country: 'IN' }
    }

    $scope.options_nearby = {
        types: ['address'],
        componentRestrictions: { country: 'IN' }
    }
    $scope.address = '';

    $scope.submitNewAd = function(){
        console.log($scope.vm.adv);

        if(validateRequestData()){
            console.log('validated');
            Ads.addNew($scope.vm.adv).then(function(response){
                console.log('response', response);
            },function(err){
                console.log('error', err);
            })
        }
        else {
            console.log('validation failed');
        }
    }

    function validateRequestData(){

        if($scope.vm.adv.title == '' || $scope.vm.adv.title == null){
            $scope.vm.errorMessage = 'Please enter title for ad';
            return false;
        }
        if($scope.vm.adv.category == '' || $scope.vm.adv.category == null){
            $scope.vm.errorMessage = 'Please select category';
            return false;
        }
        if($scope.vm.adv.subcategory == '' || $scope.vm.adv.subcategory == null){
            $scope.vm.errorMessage = 'Please select subcategory';
            return false;
        }
        if($scope.vm.adv.description == '' || $scope.vm.adv.description == null){
            $scope.vm.errorMessage = 'Please enter description about ad';
            return false;
        }
        if($scope.vm.adv.owner == '' || $scope.vm.adv.owner == null){
            $scope.vm.errorMessage = 'Please enter your name';
            return false;
        } 
        if($scope.vm.adv.mobile == '' || $scope.vm.adv.mobile == null){
            $scope.vm.errorMessage = 'Please provide mobile number';
            return false;
        }
        if($scope.vm.adv.city == '' || $scope.vm.adv.city == null){
            $scope.vm.errorMessage = 'Please enter city';
            return false;
        }
        if($scope.vm.adv.address == '' || $scope.vm.adv.address == null){
            $scope.vm.errorMessage = 'Please enter address';
            return false;
        }
        $scope.vm.errorMessage = '';
        return true;
    }
});

