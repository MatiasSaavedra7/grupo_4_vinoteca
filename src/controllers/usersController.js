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
    try {
      let newUser = await usersService.add(req.body, image);
      console.log(newUser);
    } catch (error) {
      console.log(error.message);
    }

    //Redireccionamos al home
    res.redirect("/users/login");
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

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();

    res.redirect("/");
  },
};

module.exports = usersController;
