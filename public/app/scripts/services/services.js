'use strict';

/* Services */

var module = angular.module('appApp.services', []).
value('version', '0.1').
value('name', 'Capeta Online');


angular.module('appApp.services.user', []).factory('User', ['$http', function ($http){
	var User = {};
	
	User.add = function(user, callback){
		$http.post('/api/users/new', user).success(function(user){
			if (user.error === undefined) {
				if (typeof callback == 'function') {
					callback(user);
				}
			}else{
				callback(null);
			}
		});
	}
	
	return User;
}]);