angular.module('dcsUiApp')
.directive('customDirective',function() {
	return{
		templateUrl:'/public/angular/views/templates/custom.html',
            restrict: 'E',
            transclude: false,
		scope :{
		    category: '='
		},
		controller: 'CustomCtrl'
	};
});

      	