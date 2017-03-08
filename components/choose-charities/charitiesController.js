
app.controller('CharitiesController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.sidebarCauses = ['education', 'health', 'women\'s rights']
	$scope.intro = true;

	if ($routeParams.cause !== undefined) {
		$scope.selectedCause = $routeParams.cause;
		$scope.intro = false;
	}
}]);