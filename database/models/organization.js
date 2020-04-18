

module.exports = (sequelize, DataTypes) => {
	
	const Organization = sequelize.define('Organization', {
		org_name: DataTypes.STRING,
		user_id_fk: DataTypes.ARRAY(DataTypes.INTEGER),

		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE


	}, {tableName: 'Organizations' });

	Organization.associate = models => {

		Organization.hasMany(models.User, {
			foreignKey: 'id'
		});

	};

	return Organization; 
};

