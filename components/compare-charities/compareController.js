
app.controller('CompareController', ['$scope', '$resource', function($scope, $resource) {
	$scope.compares = ['WASHINGTON JUNIOR SCHOOL OF THE ARTS', 'LATINO YOUTH ARTS EDUCATION GROUP', 'HOMES FOR OUR TROOPS']
	$scope.stated_mission = ['To provide pre-professional arts training and a full coverage preparatory curriculum to over 500 youth', 
							'To educate America\'s future workforce through educational programming and leadership development training', 
							'To build mortgage free, specially adapted homes nationwide for severely injured veterans post 9/11.']
	$scope.years_of_operation = ['40 to 50 years', '10 to 20 years', '10 to 20 years']
	$scope.audience_size = ['500 to 1000 people', '500 to 1000 people', '5000 to 10,000 people']
	$scope.total_funding = ['$1\-5 million','$1\-5 million','$1\-5 million']
	$scope.total_expenses = ['$1\-5 million','$1\-5 million','$1\-5 million']
	$scope.charity_watch_rating = ['B+', 'A-', 'A']
}]);