
app.controller('CompareController', ['$scope', '$resource', function($scope, $resource) {
    $scope.main.currState = 3; 
    $scope.main.selectedCharities = [
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
		  classification: 'Youth Leadership',
		  years: '10-20 years',
          img: 'img/pic_t4a.png' },
          { name: 'Teach for America', 
		  description: 'Teach for America is playing a role in eliminating this injustice by recruiting, developing, and supporting leaders committed to creating change. These individuals begin their path with a two-year commitment to teach in low-income urban and rural public schools.', 
          mission: 'To build mortgage free, specially adapted homes nationwide for severely injured veterans post 9/11.', 
		  funding: '$10-50 thousand',
		  audience: '500-1000 people',
		  classification: 'Youth Leadership',
		  years: '10-20 years',
          img: 'img/pic_t4a.png' }  
	];
	
}]);