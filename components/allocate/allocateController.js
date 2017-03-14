
app.controller('AllocateController', ['$scope', function($scope) {

	$scope.main.currState = 4;
	$scope.remaining = 400;

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