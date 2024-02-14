module.exports = (sequelize, DataTypes) => {
    let alias = "Image";
  
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
      tableName: "images",
      timestamps: false,
    };
  
    let Image = sequelize.define(alias, columns, config);
    
    Image.associate = function (models) {
      Image.hasMany(models.Product, {
        as: "images",
        foreignKey: "id_image",
      });
    };
  
    return Image;
  };
  