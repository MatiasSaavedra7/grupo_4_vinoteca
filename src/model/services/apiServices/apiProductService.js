const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {

    getAll: async function (limit, offset) {
        try {
            return await db.Product.findAndCountAll({
                attributes: ["id", "name", "description", [db.Sequelize.literal("CONCAT('/api/products/', Product.id)"), 'detail']],
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
                    [db.sequelize.fn('COUNT', '*'), 'count']
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



    getById: async function (id) {
        try {
            return await db.Product.findByPk(id, {
                attributes: [
                    ...Object.keys(db.Product.rawAttributes), // Esto incluirá todos los atributos del modelo
                    [db.Sequelize.literal("CONCAT('/api/products/image/', Product.id)"), 'image']
                ],
                include: ['grapes', 'countries']
            });
        } catch (error) {
            return [];
        }
    },


    pagination: async function(id){

    }
};
