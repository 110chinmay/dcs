'use strict';

/**
 * @ngdoc directive
 * @name dcsUiApp.directive:topUtilityBar
 * @description
 * # topUtilityBar
 */
angular.module('dcsUiApp')
  .directive('topUtilityBar', function () {
    return {
      templateUrl: '/public/angular/views/templates/topUtilityBar.html',
      restrict: 'E',
      transclude: false,
      scope: {
        fullview: '='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
