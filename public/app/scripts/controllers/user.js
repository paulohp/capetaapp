'use strict';

angular.module('appApp')
  .controller('UserCtrl', function ($scope) {
  	$scope.user = {};
    $scope.save = function(user){
    	$scope.user.name = user.name;
    	$scope.user.city = user.city;

    	console.log($scope.user);
    }
  });
