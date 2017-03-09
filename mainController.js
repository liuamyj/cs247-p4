
var app = angular.module('myApp',['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	    .when('/causes', {
	        templateUrl : 'components/choose-causes/choose-causes-template.html',
	        controller: 'CausesController'
	    })
	    .when('/charities', {
	        templateUrl : 'components/choose-charities/choose-charities-template.html',
	        controller: 'CharitiesController'
	    })
	    .when('/charities/:cause', {
	        templateUrl : 'components/choose-charities/choose-charities-template.html',
	        controller: 'CharitiesController'
	    })
	    .when('/compare', {
	        templateUrl : 'components/compare-charities/compare-charities-template.html',
	        controller: 'CompareController'
	    })
	    .when('/allocate', {
	        templateUrl : 'components/allocate/allocate-template.html',
	        controller: 'AllocateController'
	    })
	    .otherwise({
            redirectTo: '/causes'
        });
	});

app.controller('MainController', ['$scope', '$resource', '$route', function($scope, $resource, $route) {

	$scope.main = {};
	$scope.main.numSelected = 0; 
	$scope.main.selectedCauses = [];

}]);