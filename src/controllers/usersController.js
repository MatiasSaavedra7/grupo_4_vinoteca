const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const usersService = require("../model/services/usersService");
const { log } = require("console");


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

      //Verificamos si errors no esta vacia
      if (!errors.isEmpty()) {
        //Retornamos a la vista login los errores
        return res.render("users/login", { errors: errors.mapped() });
      }

      let userFind = await usersService.log(req.body);
      //Guardamos al usuario en session
      req.session.userLogged = userFind;

      if (req.body.remember) {
        res.cookie("userEmail", req.body.email, {
          maxAge: 1000 * 30,
        });
      }
	  //Retornamos al perfil una vez validados el email y password
      return res.redirect("/users/profile");
    } catch (error) {
		console.error(error)
      return res.render("users/login", {
        errors: {
          email: {
            msg: error,
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
  destroy: async (req, res) => {
    await usersService.deleteBy(req.params.id);
    
    res.redirect("/users/login");
  },
};
 
module.exports = usersController;
