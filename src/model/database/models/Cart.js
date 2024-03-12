module.exports = (sequelize, DataTypes) => {
	let alias = "Cart";

	let columns = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			unique: true,
			autoIncrement: true,
		},
        user_id: {
            type: DataTypes.INTEGER,
        },
		total: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	};

	let config = {
		tableName: "shopping_carts",
		timestamps: false,
	};

	let Cart = sequelize.define(alias, columns, config);
  
	Cart.associate = function (models) {
		Cart.hasMany(models.Product, {
			as: "shopping_carts",
			foreignKey: "cart_id",
		});

    Cart.belongsTo(models.Product, {
        as: "products",
        foreignKey: "product_id",
    });
	};

	return Cart;
};
