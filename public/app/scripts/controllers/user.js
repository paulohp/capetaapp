'use strict';

angular.module('appApp')
  .controller('UserCtrl', function ($scope, $location) {
  	$scope.user = {};
    $scope.save = function(user){
    	$scope.user.name = user.name;
    	$scope.user.city = user.city;

    	if ($scope.user.name && $scope.user.city) {
    		$location.path('/chat/'+$scope.user.city);
    	};
    }
  });
