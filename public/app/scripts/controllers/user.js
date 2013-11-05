'use strict';

angular.module('appApp')
  .controller('UserCtrl', function ($scope, $location, User) {
  	$scope.user = {};

    $scope.save = function(user){
    	$scope.user.name = user.name;
    	$scope.user.city = user.city;

    	if ($scope.user.name && $scope.user.city) {
        User.add($scope.user, function(data){
    		  $location.path('/chat/'+$scope.user.city);
        })
    	}else{
    		$location.path('/yours');
    	};
    };
  })
  .$inject = ['$scope', '$location', 'User'];