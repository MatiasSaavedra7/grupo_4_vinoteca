const { validationResult } = require("express-validator");
const usersService = require("../model/services/usersService");

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

			console.log(errors);

			if (!errors.isEmpty()) {
				return res.render("users/register", {
					errors: errors.mapped(),
					old: req.body,
				});
			}

			delete req.body.confirmpassword;

			//Verificamos si el usuario subio una imagen
			const image = req.file ? req.file.filename : "default-image.png";

			//Creamos al nuevo usuario
			let newUser = await usersService.add(req.body, image);

			//Redireccionamos al home
			res.redirect("/users/login");
		} catch (error) {
			console.log(error.message);
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
		  let filename = req.file ? req.file.filename : "";

		  //Llamamos al service de actualizacion.
		  let updatedUser= await usersService.updateBy(req.params.id, req.body, filename);

		  //Borramos la contraseña
		  updatedUser.password = null;

		  //Actualizamos los datos del usuario logeado
		  req.session.userLogged = updatedUser;

		  //Redireccionamos una vez actualizado.
		  res.redirect("/users/profile");

		} catch (error) {
		  console.error(error);
		  res.redirect("/")
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
