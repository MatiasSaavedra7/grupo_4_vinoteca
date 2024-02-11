"use strict";
const { faker } = require("@faker-js/faker");
const db = require("../../models");

module.exports = {

  async up(queryInterface, Sequelize) {

    //Requerimos de la BD a las tablas Color y Origin
    const Color = await db.Color.findAll();
    const Origen = await db.Origin.findAll();
    //Definimos un array products para almancenar nuestros productos falsos.
    const products = [];

    //Definidmos un array vacio de 250 elementos.
    Array(250)
      .fill(0) //Le asignamos a cada elemento el valor 0.
      .forEach((_, i) => { //Recorremos el array

        //Seleccionamos de Color y Origen un ID random
        const randomColorId = Color[Math.floor(Math.random() * Color.length)];
        const randomOrigenId = Origen[Math.floor(Math.random() * Origen.length)];
        
        //Creamos nuestro producto random usando Faker.
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

        //Lo insertamos al arreglo.
        products.push(randomProduct);

      });

    //Insertamos todos los productos a la tabla
    await queryInterface.bulkInsert("products", products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
