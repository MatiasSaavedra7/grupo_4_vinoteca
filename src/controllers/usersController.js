const { validationResult } = require("express-validator");
const usersService = require("../model/services/usersService");
const cloudinary = require("../model/services/apiServices/cloudinaryService");
const { log } = require("console");

const usersController = {
	register: (req, res) => {
		res.render("users/register");
	},

	login: (req, res) => {
		res.render("users/login");
	},

	addUser: async (req, res) => {
		try {
			//Validamos los datos
			const errors = validationResult(req);

			//Verificamos si hay errores
			if (!errors.isEmpty()) {
				return res.render("users/register", {
					errors: errors.mapped(),
					old: req.body,
				});
			}

			//Eliminamos del objeto body la clave confirmpassword
			delete req.body.confirmpassword;

			//Verificamos si el usuario subio una imagen
			// const image = req.file ? req.file.filename : "default-image.jpg";

			//Imagen por default
			let img = "https://res.cloudinary.com/dq2jw6jnn/image/upload/v1711187546/default_img.jpg"

			//Verificamos si se cargó una imagen
			if (req.file && req.file.buffer) {
				//En caso afirmativo subimos la imagen a Clodinary
				const { secure_url } = await cloudinary.uploadImgBuffer(req.file.buffer, "users")
				img = secure_url;
			}

			//Creamos al nuevo usuario
			let newUser = await usersService.add(req.body, img);

			//
			newUser.password = null;

			req.session.userLogged = newUser;

			//Redireccionamos al home
			res.redirect("/users/login");
		} catch (error) {
			console.error('\x1b[31m%s\x1b[0m', "ERROR: " + error.message);
			res.redirect("/");
		}
	},

	loginProcess: async (req, res) => {
		try {
			//Asignamos a errors los resultados de las validaciones.
			const errors = validationResult(req);

			//Verificamos si errors no esta vacia (o sea hay errores)
			if (!errors.isEmpty()) {
				//Retornamos a la vista login los errores.
				return res.render("users/login", { errors: errors.mapped() });
			}

			//En caso de no haber errores buscamos y validamos al usuario en la bd.
			let userFind = await usersService.log(req.body);

			//Guardamos al usuario en session una vez validado el usuario.
			userFind.password = null;

			req.session.userLogged = userFind;

			//Guardamos en una cookie si el usuario tildo la casilla "recodar usuario".
			if (req.body.remember) {
				res.cookie("userEmail", req.body.email, {
					maxAge: 1000 * 30,
				});
			}

			//Retornamos al perfil una vez validados el email y password.
			return res.redirect("/users/profile");
		} catch (error) {
			//En caso de que haya un error de validacion del usuario o algun otro error se lo pasamos al vista.
			console.error('\x1b[31m%s\x1b[0m', "ERROR: " + error.message);
			return res.render("users/login", {
				errors: {
					email: {
						msg: error.message,
					},
				},
			});
		}
	},

	profile: (req, res) => {
		res.render("users/profile", { user: req.session.userLogged });
	},

	edit: async (req, res) => {
		res.render("users/editUser", {
			user: await usersService.getBy(req.params.id),
		});
	},
	update: async (req, res) => {
		try {
			//Verificamos si se subio una imagen.
			// let filename = req.file ? req.file.filename : "";

			let img = "";

			//Verificamos si se cargó una imagen
			if (req.file && req.file.buffer) {
				//En caso afirmativo subimos la imagen a Clodinary
				const { secure_url } = await cloudinary.uploadImgBuffer(req.file.buffer, "users")
				img = secure_url;
			}

			//Llamamos al service de actualizacion.
			let updatedUser = await usersService.updateBy(
				req.params.id,
				req.body,
				img
			);

			//Borramos la contraseña
			updatedUser.password = null;

			//Actualizamos los datos del usuario logeado
			req.session.userLogged = updatedUser;

			//Redireccionamos una vez actualizado.
			res.redirect("/users/profile");
		} catch (error) {
			console.error('\x1b[31m%s\x1b[0m', "ERROR: " + error.message);
			res.redirect("/");
		}
	},
	editPass: async (req, res) => {
		res.render("users/editPass", {
			user: req.params.id,
		});
	},
	changePassword: async (req, res) => {
		try {
			//Asignamos a errors los resultados de las validaciones.
			const errors = validationResult(req);

			//Verificamos si errors no esta vacia (o sea hay errores)
			if (!errors.isEmpty()) {
				//Retornamos a la vista login los errores.
				return res.render(`users/editPass`, { errors: errors.mapped(), user: req.params.id, old: req.body });
			}

			//Llamamos al service para actualizar la contraseña.
			let user = await usersService.changePass(
				req.params.id,
				req.body
			);

			res.redirect("/users/profile");
		} catch (error) {
			console.error('\x1b[31m%s\x1b[0m', "ERROR: " + error.message);
			return res.render("users/editPass", {
				errors: {
					password: {
						msg: error.message,
					},
				},
				old: req.body,
				user: req.params.id
			});
		}
	},

	logout: (req, res) => {
		res.clearCookie("userEmail");
		req.session.destroy();

		res.redirect("/");
	},
	delete: async (req, res) => {
		res.render("users/deleteUser", {
			user: await usersService.getBy(req.params.id),
		});
	},
	destroy: async (req, res) => {
		await usersService.deleteBy(req.params.id);

		res.clearCookie("userEmail");

		req.session.destroy();

		res.redirect("/");
	},
};

module.exports = usersController;
