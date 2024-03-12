module.exports = (sequelize, DataTypes) => {
	let alias = "Country";

	let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			unique: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};

	let config = {
		tableName: "countries",
		timestamps: false,
	};

	let Country = sequelize.define(alias, columns, config);
  
	Country.associate = function (models) {
		Country.hasMany(models.Product, {
			as: "countries",
			foreignKey: "country_id",
		});
	};

	return Country;
};
