
app.controller('CompareController', ['$scope', '$resource', function($scope, $resource) {
    $scope.main.currState = 3; 

	$scope.selectCharity = function(charity) {

		console.log(JSON.stringify($scope.main.selectedCharity));
		$scope.main.selectedCharity = charity;
		console.log(JSON.stringify($scope.main.selectedCharity));
	};
	
}]);