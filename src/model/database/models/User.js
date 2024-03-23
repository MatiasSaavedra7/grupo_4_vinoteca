module.exports = (sequelize, DataTypes) => {
  let alias = "User";

  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol_id: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
			allowNull: false,
    }
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  let User = sequelize.define(alias, columns, config);

  User.associate = function (models) {
    User.belongsTo(models.Rol, {
      as: "roles",
      foreignKey: "rol_id",
    }) 

    User.belongsToMany(models.ProductCart, {
			as: "products_cart",
      through: "shopping_carts",
			foreignKey: "id_user",
      otherKey: "id_products_cart",
      timestamps: false
		});
  };
  
  return User;
};
