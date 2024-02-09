module.exports = (sequelize, DataTypes) => {
    let alias = 'Color';

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
        tableName: 'colors',
        timestamps: false
    };

    let Color = sequelize.define(alias, columns, config);

    return Color;
};