'use strict';

angular.module('appApp')
  .controller('ChatCtrl', function ($scope, $routeParams) {
  	$scope.get = function(){
  		console.log($routeParams);
  	}
  });
