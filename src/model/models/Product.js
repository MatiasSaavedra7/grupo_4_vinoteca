module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';

    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            unsigned: true
        },
        discount: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        description: {
            type: DataTypes.TEXT
        },
        origin_id: {
            type: DataTypes.INTEGER
        },
        color_id: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    };

    let config = {
        tableName: 'products',
        timestamps: false
    };

    let Product = sequelize.define(alias, columns, config);

    return Product;
};