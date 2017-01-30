'use strict';

/**
 * @ngdoc function
 * @name dcsUiApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the Header page
 */
angular.module('dcsUiApp')
.controller('HeaderCtrl', function($scope, $rootScope, $location) {
    $scope.submitNewAdv = function(){
        $location.path('/submitnewadv');
    }
});
