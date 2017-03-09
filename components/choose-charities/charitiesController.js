
app.controller('CharitiesController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.sidebarCauses = ['education', 'health', 'women\'s rights']
	$scope.intro = true;

	if ($routeParams.cause !== undefined) {
		$scope.intro = false;
		$scope.selectedCause = $routeParams.cause;

		switch($scope.selectedCause) {
		    case 'education':
		        $scope.charityList = [
    				{ name: 'Washington Junior School of the Arts', 
    				  description: 'Located in Washington DC, the Washington Junior School of the Arts is the only DC public high school that provides pre-professional arts training and a full college preparatory curriculum to over 530 youth (grades 9-12) from every ward of Washington DC, with approximately 40% from Wards 6, 7, and 8.', 
    				  funding: '$1-5 million',
    				  audience: '500-1000 people',
    				  years: '40-50' },
    				{ name: 'Latino Youth Arts Education Group', 
    				  description: 'LYAEG\'s mission is to educate and prepare America\'s future workforce through internsive educational programming and leadership development training. We reach out into some of the nation\'s most disadvantaged neighborhoods and help promising students navigate to academic success.', 
    				  funding: '$10-50 thousand',
    				  audience: '500-1000 people',
    				  years: '10-20' },
    				{ name: 'Teach for America', 
    				  description: 'Teach for America is playing a role in eliminating this injustice by recruiting, developing, and supporting leaders committed to creating change. These individuals begin their path with a two-year commitment to teach in low-income urban and rural public schools.', 
    				  funding: '$10-50 thousand',
    				  audience: '500-1000 people',
    				  years: '10-20' },
    				  { name: 'Education Charity 4', 
    				  description: 'This is a description of what Education Charity 4 does', 
    				  funding: '$10-50 thousand',
    				  audience: '100-500 people',
    				  years: '10-20' },
    				{ name: 'Education Charity 5', 
    				  description: 'This is a description of what Education Charity 5 does', 
    				  funding: '$100-500 thousand',
    				  audience: '1000-5000 people',
    				  years: '40-50' }
				];
		        break;
		    case 'health':
		        $scope.charityList = [
    				{ name: 'Health Charity 1', 
    				  description: 'This is a description of what Health Charity 1 does', 
    				  funding: '$10-50 thousand',
    				  audience: '100-500 people',
    				  years: '10-20' },
    				{ name: 'Health Charity 2', 
    				  description: 'This is a description of what Health Charity 2 does', 
    				  funding: '$100-500 thousand',
    				  audience: '1000-5000 people',
    				  years: '40-50' }
    			];
		        break;
		    case 'women\'s rights':
		    	$scope.charityList = [
    				{ name: 'Women\'s Rights Charity 1', 
    				  description: 'This is a description of what Women\'s Rights Charity 1 does', 
    				  funding: '$100-500 thousand',
    				  audience: '1000-5000 people',
    				  years: '50-100' },
    				{ name: 'Women\'s Rights Charity 2', 
    				  description: 'This is a description of what Women\'s Rights Charity 2 does', 
    				  funding: '$10-50 thousand',
    				  audience: '500-1000 people',
    				  years: '5-10' }
    			];
		    	break;
		    default:
		        
		}
	}
}]);