"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const Color = await db.Color.findAll();
    const Origen = await db.Origin.findAll();
    const products = [];
    Array(250)
      .fill(0)
      .forEach((_, i) => {
        const randomColorId = Color[Math.floor(Math.random() * Color.length)];
        const randomOrigenId = Origen[Math.floor(Math.random() * Origen.length)];   
        const randomProduct = {
          id: i + 1,
          origin_id: randomOrigenId.id,
          color_id: randomColorId.id,
          name: faker.commerce.productName(),
          price: faker.commerce.price({ min: 5000, max: 100000 }),
          discount: faker.number.int({ min: 0, max: 99 }),
          descripcion: faker.commerce.productDescription(),
          stock: faker.number.int({ min: 1, max: 200 })
        };
        products.push(randomProduct);
      });
    await queryInterface.bulkInsert("products", products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
