
app.controller('CharitiesController', ['$scope', '$routeParams', function($scope, $routeParams) {

	$scope.intro = true;
    $scope.main.currState = 2; 

    $scope.loadSelected = function() {
        $scope.main.selectedCharities.length = 0;
        for (i = 0; i < selected.length; i++) { 
            for (j = 0; j < $scope.main.charities.length; j++) {
                if (selected[i] == $scope.main.charities[j].name) {
                    $scope.main.selectedCharities.push($scope.main.charities[j]);
                }
            }
        }
        selected.length = 0;
    };

	if ($routeParams.cause !== undefined) {
		$scope.intro = false;
		$scope.selectedCause = $routeParams.cause;

		switch($scope.selectedCause) {
		    case 'education':
		        $scope.charityList = $scope.main.charities.slice(0, 3);
		        break;
		    case 'health':
		        $scope.charityList = [
    				{ name: 'Health Charity 1', 
    				  description: 'This is a description of what Health Charity 1 does', 
    				  funding: '$10-50 thousand',
    				  audience: '100-500 people',
    				  years: '10-20 years' },
    				{ name: 'Health Charity 2', 
    				  description: 'This is a description of what Health Charity 2 does', 
    				  funding: '$100-500 thousand',
    				  audience: '1000-5000 people',
    				  years: '40-50 years' }
    			];
		        break;
		    case 'women\'s rights':
		    	$scope.charityList = [
    				{ name: 'Women\'s Rights Charity 1', 
    				  description: 'This is a description of what Women\'s Rights Charity 1 does', 
    				  funding: '$100-500 thousand',
    				  audience: '1000-5000 people',
    				  years: '50-100 years' },
    				{ name: 'Women\'s Rights Charity 2', 
    				  description: 'This is a description of what Women\'s Rights Charity 2 does', 
    				  funding: '$10-50 thousand',
    				  audience: '500-1000 people',
    				  years: '5-10 years' }
    			];
		    	break;
		    default:
		        
		}
	}
}]);