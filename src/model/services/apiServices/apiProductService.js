const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {

    getAll: async function () {
        try {
            return await db.Product.findAndCountAll({
                attributes: ["id", "name", "description", [db.Sequelize.literal("CONCAT('/products/detail/', Product.id)"), 'detail']],
                include: ["grapes", "countries"]
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
                attributes: ['id', 'firstName', 'lastName', 'email', [db.Sequelize.literal("CONCAT('/users/profile')"), 'profile']], // Especificamos las columnas requeridas
            });
        } catch (error) {
            return [];
        }
    },

};
