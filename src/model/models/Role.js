module.exports = (sequelize, DataTypes) => {
    let alias = 'Role';

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
        }
    };

    let config = {
        tableName: 'roles',
        timestamps: false
    };

    let Role = sequelize.define(alias, columns, config);

    return Role;
};