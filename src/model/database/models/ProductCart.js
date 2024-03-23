module.exports = (sequelize, DataTypes) => {
	let alias = "ProductCart";

	let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
        id_user: {
            type: DataTypes.INTEGER,
        },
		id_products_cart: {
			type: DataTypes.INTEGER
		},
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	};

	let config = {
		tableName: "products_cart",
		timestamps: false,
	};

	let ProductCart = sequelize.define(alias, columns, config);
  
	ProductCart.associate = function (models) {
		ProductCart.belongsToMany(models.User, {
			as: "users",
            through: "shopping_carts",
			foreignKey: "id_products_cart",
            otherKey: "id_user",
            timestamps: false
		});
	};

	return ProductCart;
};
