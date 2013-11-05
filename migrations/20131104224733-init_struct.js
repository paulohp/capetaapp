module.exports = {
  up: function(migration, DataTypes, done) {
	migration.createTable(
		'User',
			{
				id: 	    { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
				name:      	{ type: DataTypes.STRING(255), allowNull:false },
				city:       { type: DataTypes.STRING(255), allowNull:false },

				created_at:     { type: DataTypes.DATE   , allowNull: false},
				updated_at:     { type: DataTypes.DATE   , allowNull: false}
			},
			{
				engine: 'InnoDB', 
				charset: 'utf8'
			}
	);
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
