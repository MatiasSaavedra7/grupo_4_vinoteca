const { validationResult } = require("express-validator");
const usersService = require("../model/services/usersService");
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");

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
      res.redirect("/users/register");
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

  loginProcess3: (req, res) => {
		//Asignamos a errors los resultados de las validaciones.
		const errors = validationResult(req);

		//Verificamos si errors no esta vacia
		if (!errors.isEmpty()) {
			//Retornamos a la vista login los errores
			return res.render("users/login", { errors: errors.mapped() });
		}

		//Buscamos al usuario a traves de su email
		const userFilePath = path.join(__dirname, "../data/usersDataBase.json");
		const users2 = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

		const userFind = users2.find((u) => u.email == req.body.email);

		if (userFind) {
			//Si existe el usuario verificamos la contraseña
			if (bcryptjs.compareSync(req.body.password, userFind.password)) {
				//En caso afirmativo borramos la contraseña del usuario
				delete userFind.password;

				//Guardamos al usuario en session
				req.session.userLogged = userFind;

				if (req.body.remember) {
					res.cookie("userEmail", req.body.email, {
						maxAge: 1000 * 30,
					});
				}

				//Retornamos a la home una vez validados el email y password
				return res.redirect("/users/profile");
			} else {
				//En caso de que la contraseña sea incorrecta mostramos un mensaje
				return res.render("users/login", {
					errors: {
						email: {
							msg: "Las credenciales no coinciden",
						},
					},
				});
			}
		}

		//En caso de que el correo se no encuentre mostramos este mensaje
		return res.render("users/login", {
			errors: {
				email: {
					msg: "Correo no encontrado :(",
				},
			},
		});
	},


  profile: (req, res) => {
    res.render("users/profile", { user: req.session.userLogged });
  },

  edit: async (req, res) => {
    res.render("users/editUser", {
      user: await usersService.getBy(req.params.id),
    })
  },
  update: async (req, res) => {
    try {
      await usersService.updateBy(req.params.id, req.body);
    } catch (error) {
      console.log(error);
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
    })
  },
  
};

module.exports = usersController;
