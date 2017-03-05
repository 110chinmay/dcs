'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:SubmitNewAdCtrl
 * @description
 * # SubmitNewAdCtrl
 * Controller of the Header page
 */
angular.module('dcsUiApp')
.controller('SubmitNewAdCtrl', function($scope, $rootScope) {
    $scope.options_cities = {
        types: ['(cities)'],
        componentRestrictions: { country: 'IN' }
    }

    $scope.options_nearby = {
        types: ['address'],
        componentRestrictions: { country: 'IN' }
    }
    $scope.address = '';
});
