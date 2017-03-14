
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
	    .when('/waiting', {
	        templateUrl : 'components/waiting/waiting-template.html',
	        controller: 'WaitingController'
	    })
	    .when('/allocate', {
	        templateUrl : 'components/allocate/allocate-template.html',
	        controller: 'AllocateController'
	    })
	    .when('/results', {
	        templateUrl : 'components/results/results-template.html',
	        controller: 'ResultsController'
	    })
	    .otherwise({
            redirectTo: '/causes'
        });
	});

app.controller('MainController', ['$scope', '$resource', '$route', function($scope, $resource, $route) {

	$scope.main = {};
	$scope.main.currState = 1; 
	$scope.main.numSelected = 0; 
	$scope.main.selectedCauses = [];
	$scope.main.selectedCharities = [];
	$scope.main.finalCharity = '';

	$scope.main.causes = ['animal welfare', 'arts and culture', 'civil liberties', 'community', 'disaster relief',
					'drug abuse', 'education', 'environment', 'health', 'homelessness', 
					'hunger', 'religion', 'science', 'special needs', 'women\'s rights']; 

	$scope.main.causeIcons = {'animal welfare' : 'icon-animal', 'arts and culture' : 'icon-arts', 
							  'civil liberties' : 'icon-civil', 'community' : 'icon-community', 
							  'disaster relief' : 'icon-disaster', 'drug abuse' : 'icon-drug', 
							  'education' : 'icon-education', 'environment' : 'icon-environment', 
							  'health' : 'icon-health', 'homelessness' : 'icon-homelessness', 
							  'hunger' : 'icon-hunger', 'religion' : 'icon-religion', 
							  'science' : 'icon-science', 'special needs' : 'icon-needs', 
							  'women\'s rights' : 'icon-women'};

	$scope.main.charities = [
		{ name: 'Washington Junior School of the Arts', 
		  description: 'Located in Washington DC, the Washington Junior School of the Arts is the only DC public high school that provides pre-professional arts training and a full college preparatory curriculum to over 530 youth (grades 9-12) from every ward of Washington DC, with approximately 40% from Wards 6, 7, and 8.',
          mission: 'To provide pre-professional arts training and a full college preparatory curriculum to over 500 youth.', 
		  funding: '$1-5 million',
          expenses: '$1-5 million',
		  audience: '500-1000 people',
          classification: 'General Arts Education',
		  years: '40-50 years', 
          img: 'img/pic_washjunior.png' },
		{ name: 'Latino Youth Arts Education Group', 
		  description: 'LYAEG\'s mission is to educate and prepare America\'s future workforce through internsive educational programming and leadership development training. We reach out into some of the nation\'s most disadvantaged neighborhoods and help promising students navigate to academic success.', 
          mission: 'To educate America\'s future workforce through educational programming and leadership development training.',
		  funding: '$10-50 thousand',
          expenses: '$50-100 thousand',
		  audience: '500-1000 people',
          classification: 'Youth Leadership',
		  years: '10-20 years',
          img: 'img/pic_latinoarts.png' },
		{ name: 'Teach for America', 
		  description: 'Teach for America is playing a role in eliminating this injustice by recruiting, developing, and supporting leaders committed to creating change. These individuals begin their path with a two-year commitment to teach in low-income urban and rural public schools.', 
          mission: 'To build mortgage free, specially adapted homes nationwide for severely injured veterans post 9/11.', 
		  funding: '$10-50 thousand',
		  audience: '500-1000 people',
		  years: '10-20 years',
          img: 'img/pic_t4a.png' } 
	];
}]);