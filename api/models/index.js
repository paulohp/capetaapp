var Sequelize = require("sequelize")
, appConfig = require("../../config/config.js"),

var sequelize = new Sequelize(appConfig.db.dbname, appConfig.db.user, appConfig.db.password, {
	host: appConfig.db.host,
	port: appConfig.db.port,
	
	define: {
		underscored: true,
		freezeTableName: true,
		syncOnAssociation: true,
		charset: 'utf8',
		timestamps: true
	}, 
});

var models = [ 
	"User"
];

models.forEach(function(model) {
	module.exports[model] = require(__dirname + '/schemas/' + model)(sequelize);
});

//Relacionamentos
module.exports['Sequelize'] = sequelize;
