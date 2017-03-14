
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
		        $scope.charityList = [
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