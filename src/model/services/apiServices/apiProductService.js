const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {

    getAll: async function (limit, offset, host) {
        try {
            return await db.Product.findAndCountAll({
                attributes: ["id", "name", "description", "price", [db.Sequelize.literal(`CONCAT('http://${host}/api/products/', Product.id)`), 'detail']],
                include: ["grapes", "countries"],
                limit: limit,
                offset: offset
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    

    countByGrape: async function () {
        try {
            return await db.Product.findAll({
                attributes: [
                    [db.sequelize.col('grapes.name'), 'name'],
                    // [db.sequelize.fn('COUNT', db.sequelize.col('grapes.id')), 'count']
                    [db.sequelize.literal('COUNT(*)'),  'count']
                ],
                include: [{
                    model: db.Grape,
                    as: "grapes",
                    attributes: [],
                    required: true  // Esto asegura que solo se incluyan los productos que tienen un grapes_id no nulo
                }],
                group: ['grapes.name']
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    countByCountry: async function () {
        try {
            return await db.Product.findAll({
                attributes: [
                    [db.sequelize.col('countries.name'), 'name'],
                    // [db.sequelize.fn('COUNT', db.sequelize.col('grapes.id')), 'count']
                    [db.sequelize.literal('COUNT(*)'),  'count']
                ],
                include: [{
                    model: db.Country,
                    as: "countries",
                    attributes: [],
                    required: true  // Esto asegura que solo se incluyan los productos que tienen un grapes_id no nulo
                }],
                group: ['countries.name']
            });
        } catch (error) {
            console.error(error);
            return [];
        }
    },


    getById: async function (id) {
        try {
            return await db.Product.findByPk(id, {
                include: ['grapes', 'countries']
            });
        } catch (error) {
            return [];
        }
    },


    pagination: async function(id){

    }
};
