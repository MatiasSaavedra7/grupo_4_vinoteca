"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {

    const colors = [
      {
        name: "tinto"
      },
      {
        name: "blanco"
      },
      {
        name: "rosado"
      },
      {
        name: "espumante"
      }
    ]
    
    await queryInterface.bulkInsert("colors", colors);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("colors", null, {});
  },
};
