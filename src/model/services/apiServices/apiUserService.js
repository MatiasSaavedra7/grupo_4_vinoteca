const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {

    getAll: async function () {
        try {
            return await db.User.findAll({
                attributes: ['id', 'firstName', 'lastName', 'email', [db.Sequelize.literal("CONCAT('/api/users/', `id`)"), 'detail']], // Especificamos las columnas requeridas
            });
        } catch (error) {
            return [];
        }
    },

    /*
    attributes: ['id', 'firstName', 'email', [db.Sequelize.literal("CONCAT('/api/users/:', id)"), 'detail']]: 
    Esta opción le dice a Sequelize qué columnas recuperar de la tabla User. En este caso, estás recuperando 
    las columnas id, firstName y email.

    [db.Sequelize.literal("CONCAT('/api/users/:', id)"), 'detail']: Esto crea una columna virtual llamada 
    detail que contiene una cadena de texto concatenada que comienza con ‘/api/users/:’ seguida del valor 
    de la columna id de cada fila. db.Sequelize.literal permite escribir literalmente cualquier consulta 
    dentro de tu consulta Sequelize. */

    getById: async function (id) {
        try {
            return await db.User.findByPk(id, {
                attributes: ['id', 'firstName', 'lastName', 'email', [db.Sequelize.literal("CONCAT('/users/profile')"), 'profile']], // Especificamos las columnas requeridas
            });
        } catch (error) {
            return [];
        }
    },

};
