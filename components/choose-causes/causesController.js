
app.controller('CausesController', ['$scope', '$resource', function($scope, $resource) {

	const MAX_CAUSES = 5;
	$scope.main.currState = 1; 
	$scope.chooseValid = false; 

	$scope.selectCause = function(cause) {
		// if cause is selected, deselect it 
		index = $scope.main.selectedCauses.indexOf(cause);
		if (index >= 0) {
			$scope.main.selectedCauses.splice(index, 1);
			$scope.main.numSelected--;
		} else {
			if ($scope.main.numSelected < MAX_CAUSES) {
				$scope.main.selectedCauses.push(cause); 
				$scope.main.numSelected++;
			}
		}
	};
}]);