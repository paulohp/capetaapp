var controller = require("../controllers");

exports.add = function(req, res){

	controller.user.add(req.body, function(user){
		res.json(user);
	});
}

exports.get = function(req, res){

	controller.user.get(req._auth.uid, function(user){
		res.json(user);
	});
}

exports.getOne = function(req, res){
	controller.user.getOne(req._auth.uid, function(user){
		res.json(user);
	})
}


exports.set = function(req, res){
	var id = req._auth.uid;
	user = req.body;

	controller.user.set(id, user, function(user){
		res.json(user);
	});
}

exports.getSecurity = function(req, res){

	res.json(JSON.parse(req._auth.securitygroups));

}