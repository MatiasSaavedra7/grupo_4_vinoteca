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
		tableName: "country",
		timestamps: false,
	};

	let Country = sequelize.define(alias, columns, config);
  
	Country.associate = function (models) {
		Country.hasMany(models.Product, {
			as: "country",
			foreignKey: "country_id",
		});
	};

	return Country;
};
