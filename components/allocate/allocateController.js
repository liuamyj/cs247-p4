
app.controller('AllocateController', ['$scope', function($scope) {

	$scope.main.currState = 4;
	$scope.remaining = 400;

    $scope.family = [{ user: 'JANE',
    	  user_img: 'img/icon_mom.png',
    	  name: 'Environmental Responsibility Fund',  
          img: 'img/pic_environment.png',
          impact_amt: 100,
          impact_before: 'Plants',
          impact_after: 'trees.' },
          { user: 'AMY',
          user_img: 'img/icon_amy.png',
    	  name: 'Science Forward', 
          img: 'img/pic_science.png',
          impact_amt: 4,
          impact_before: 'Contributes to',
          impact_after: 'research grant(s).' },
          { user: 'JIMMY',
          user_img: 'img/icon_dad.png',
    	  name: 'International Relief Organization',  
          img: 'img/pic_h4a.png',
          impact_amt: 40,
          impact_before: 'Provides meals for ',
          impact_after: 'refugee(s).' },
    ];

	$scope.slider1 = {
	    value: 0,
	    options: {
	    	floor: 0,
    		ceil: 400,
    		maxLimit: 400, 
	        showSelectionBar: true,
	        translate: function(value) {
      			return '$' + value;
    		},
	        onChange: function() {
	        	currTotal = $scope.slider1.value + $scope.slider2.value + $scope.slider3.value + $scope.slider4.value;
            	$scope.remaining = 400-currTotal;
            	$scope.slider1.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider2.options.maxLimit = 400-($scope.slider1.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider3.options.maxLimit = 400-($scope.slider2.value + $scope.slider1.value + $scope.slider4.value);
            	$scope.slider4.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider1.value);
        	}
	    }
	};
	$scope.slider2 = {
	    value: 0,
	    options: {
	    	floor: 0,
    		ceil: 400,
    		maxLimit: 400, 
	        showSelectionBar: true,
	        translate: function(value) {
      			return '$' + value;
    		},
	        onChange: function() {
            	currTotal = $scope.slider1.value + $scope.slider2.value + $scope.slider3.value + $scope.slider4.value;
            	$scope.remaining = 400-currTotal;
            	$scope.slider1.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider2.options.maxLimit = 400-($scope.slider1.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider3.options.maxLimit = 400-($scope.slider2.value + $scope.slider1.value + $scope.slider4.value);
            	$scope.slider4.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider1.value);
        	}
	    }
	};
	$scope.slider3 = {
	    value: 0,
	    options: {
	    	floor: 0,
    		ceil: 400,
    		maxLimit: 400, 
	        showSelectionBar: true,
	        translate: function(value) {
      			return '$' + value;
    		},
	        onChange: function() {
            	currTotal = $scope.slider1.value + $scope.slider2.value + $scope.slider3.value + $scope.slider4.value;
            	$scope.remaining = 400-currTotal;
            	$scope.slider1.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider2.options.maxLimit = 400-($scope.slider1.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider3.options.maxLimit = 400-($scope.slider2.value + $scope.slider1.value + $scope.slider4.value);
            	$scope.slider4.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider1.value);
        	}
	    }
	};
	$scope.slider4 = {
	    value: 0,
	    options: {
	    	floor: 0,
    		ceil: 400,
    		maxLimit: 400, 
	        showSelectionBar: true,
	        translate: function(value) {
      			return '$' + value;
    		},
	        onChange: function() {
            	currTotal = $scope.slider1.value + $scope.slider2.value + $scope.slider3.value + $scope.slider4.value;
            	$scope.remaining = 400-currTotal;
            	$scope.slider1.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider2.options.maxLimit = 400-($scope.slider1.value + $scope.slider3.value + $scope.slider4.value);
            	$scope.slider3.options.maxLimit = 400-($scope.slider2.value + $scope.slider1.value + $scope.slider4.value);
            	$scope.slider4.options.maxLimit = 400-($scope.slider2.value + $scope.slider3.value + $scope.slider1.value);
        	}
	    }
	};

}]);