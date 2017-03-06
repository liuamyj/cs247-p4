
var app = angular.module('myApp',['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	    .when("/causes", {
	        templateUrl : 'components/choose-causes/choose-causes-template.html'
	    })
	    .when("/charities", {
	        templateUrl : 'components/choose-charities/choose-charities-template.html'
	    })
	    .when("/allocate", {
	        templateUrl : 'components/allocate/allocate-template.html'
	    })
	    .otherwise({
            redirectTo: '/causes'
        });
	});

app.controller('MainController', ['$scope', '$resource', '$route', function($scope, $resource, $route) {
	
}]);