module.exports = (sequelize, DataTypes) => {
    let alias = 'User_Product';

    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    };

    let config = {
        tableName: 'users_products',
        timestamps: false
    };

    let Role = sequelize.define(alias, columns, config);

    return Role;
};