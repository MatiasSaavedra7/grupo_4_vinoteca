const db = require("../database/models");

function User(data, image) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = bcryptjs.hashSync(data.password, 10);
    this.image = image;
    this.rol_id = 2;
}

const rolService = {

	getAll: async () => {
		try {
			return await db.Rol.findAll();
		} catch (e) {
			console.error(e);
			return [];
		}
	},
};

module.exports = rolService;
