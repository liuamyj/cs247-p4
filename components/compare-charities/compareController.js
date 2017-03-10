
app.controller('CompareController', ['$scope', '$resource', function($scope, $resource) {
    $scope.main.currState = 3; 

	$scope.compares = [
		{ name: 'Washington Junior School of the Arts', 
    	  mission: 'To provide pre-professional arts training and a full coverage preparatory curriculum to over 500 youth', 
    	  funding: '$1-5 million',
    	  expenses: '$1-5 million',
    	  audience: '500-1000 people',
    	  years: '40-50 years',
    	  rating: 'B+' },
    	{ name: 'Latino Youth Arts Education Group', 
    	  mission: 'To educate America\'s future workforce through educational programming and leadership development training', 
    	  funding: '$1-5 million',
    	  expenses: '$1-5 million',
    	  audience: '500-1000 people',
    	  years: '10-20 years',
    	  rating: 'A-' },
    	{ name: 'Homes for our Troops', 
    	  mission: 'To build mortgage free, specially adapted homes nationwide for severely injured veterans post 9/11.', 
    	  funding: '$1-5 million',
    	  expenses: '$1-5 million',
    	  audience: '5000 to 10,000 people',
    	  years: '10-20 years',
    	  rating: 'A' }
	];
}]);