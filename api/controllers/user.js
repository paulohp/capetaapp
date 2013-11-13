var models = app.get('models');
var _ = require("underscore");

exports.add = function(newuser, callback){
	models.User.create({
		name: newuser.name,
		city : newuser.city
	}).success(function(user) { 
		callback(user);	
	}).error(function (err){
		callback({'ERROR: ':err});
	});
}


exports.get = function(id, callback){
}


exports.getOne = function(id, callback){

}


exports.set = function(id, updateuser, callback){

}