var controllers = [ 
	"user"
];

controllers.forEach(function(controller) {
	module.exports[controller] = require(__dirname + '/' + controller);
});