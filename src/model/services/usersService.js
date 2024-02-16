const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const Op = db.Sequelize.Op;

const usersService = {
    getAll: async function() {
        try {
            const users = await db.User.findAll();
            return users;
        } catch (error) {
            console.log(error);
        }
    },
    getBy: async function(id) {
        try {
            const user = await db.User.findOne({
                where: {id: id}
            })
        } catch (error) {
            console.log(error);
        }
    },
    getOne: async function(email) {
        try {
            const email = await db.User.findOne({
                where:{
                    email: { [Op.like] : '%email%'}
                }
            })
        } catch (error) {
            console.log(error);
        }
    },

    add: async function(data, email, image) {
        // const emaildb = db.User.findAll({
        //     where: {
        //         email: { [Op.Like] : '%' + emaildb + '%'}
        //     }
        // })

        // if(emaildb === email){
        //     console.log('El email ya existe')
        // }

        try {
            const user = db.User.create(new User(data, image));
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

function User(data, image){
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = bcryptjs.hashSync(data.password, 10);
    this.image = image;
    this.rol_id = 2;
}

module.exports = usersService;