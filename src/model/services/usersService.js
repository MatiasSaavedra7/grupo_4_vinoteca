const db = require("../database/models");
const bcryptjs = require("bcryptjs");
const Op = db.Sequelize.Op;

const usersService = {
  getAll: async function () {
    try {
      const users = await db.User.findAll();
      return users;
    } catch (error) {
      console.log(error);
    }
  },
  getBy: async function (id) {
    try {
      const user = await db.User.findOne({
        where: { id: id },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  checkEmail: async (campo, dato) => {
    try {
      return await db.User.findOne({
        where: { [campo]: dato },
      });
    } catch (e) {
      console.error(e);
      return null;
    }
  },

  add: async function (data, image) {
    try {
      const user = db.User.create(new User(data, image));
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  log: async function (data) {
    try {
      //Buscamos al usuario a traves de su email en la bd.
      let userFind = await db.User.findOne({
        where: {
          email: data.email,
        },
      });

      //Si existe el usuario verificamos la contraseña.
      if (userFind) {

        //En caso afirmativo borramos la contraseña del usuario
        if (bcryptjs.compareSync(data.password, userFind.password)) {
          //Borramos
          delete userFind.password;
          //Retornamos el usuario sin contraseña.
          return userFind;
        } else {
          //En caso de que la contraseña sea incorrecta rechazamos una promesa con un error.
          return Promise.reject(new Error("Las credenciales no coinciden"));
        }
      }
      //En caso de que el correo se no encuentre rechazamos una promesa con un error.
      return Promise.reject(new Error("No se encontró ningún usuario con ese correo"));
    } catch (error) {
      return Promise.reject(error);
    }
  },
  
  updateBy: async (id, data) => {
    try {
      return await db.User.update(new User(data), { where: { id: id } });
    } catch (e) {
      console.error(e);
    }
  },
  deleteBy: async (id) => {
		try {
			return await db.User.destroy({ where: { id: id } });
		} catch (e) {
			console.error(e);
		}
	},

};

function User(data, image) {
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.email = data.email;
  this.password = bcryptjs.hashSync(data.password, 10);
  this.image = image;
  this.rol_id = 2;
}

module.exports = usersService;
