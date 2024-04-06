const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {

    getAll: async function (limit, offset, host) {
        try {
            return await db.User.findAndCountAll({
                attributes: ['id', 'firstName', 'lastName', 'email', [db.Sequelize.literal(`CONCAT('http://${host}/api/users/', id)`), 'detail']],
                limit: limit,
                offset: offset
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
                attributes: ['id', 'firstName', 'lastName', 'email', 'image'], // Especificamos las columnas requeridas
            });
        } catch (error) {
            return [];
        }
    },

    getLastUser: async function () {
        try {
            return await db.User.findAll({
                order: [['id', 'DESC']], // Ordena por ID en orden descendente
                limit: 1, // Limita a 1 resultado (el último producto)
              });
        } catch (error) {
            return [];
        }
    }

};
