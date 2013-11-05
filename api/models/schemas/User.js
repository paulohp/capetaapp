var Sequelize = require("sequelize");

module.exports = function(sequelize) {

	var User = sequelize.define('User', { 
		
		id:             		{ type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}, 
		name:     		    	{ type: Sequelize.STRING,  allowNull: false},
		city:      			{ type: Sequelize.STRING,  allowNull: false},
	});
	
	return User;
};