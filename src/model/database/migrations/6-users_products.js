"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {

    //Ejemplo para agregar columnas
    // await queryInterface.addColumn('Users', 'dni', { type: Sequelize.STRING});

    //Primer valor: nombre de la tabla.
    //Segundo valor: objeto con la definicion de cada tabla y sus valores.
    await queryInterface.createTable("users_products", {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "users"
          },
          key: "id",
        }
      },

      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "products"
          },
          key: "id",
        }
      },

      quantity: {
        type: DataTypes.INTEGER,
      }

    });
  },

  async down(queryInterface, Sequelize) {
    /**Ejemplo para eliminar columnas
    *await queryInterface.removeColumn('Users', 'dni');
    */
    await queryInterface.dropTable("users_products");
  },
};

