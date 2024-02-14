module.exports = (sequelize, DataTypes) => {
  let alias = "Grape";

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
    tableName: "grapes",
    timestamps: false,
  };

  let Grape = sequelize.define(alias, columns, config);
  
  Grape.associate = function (models) {
    Grape.hasMany(models.Product, {
      as: "grapes",
      foreignKey: "grapes_id",
    });
  };

  return Grape;
};
