const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const userFilePath = path.join(__dirname, "../data/usersDateBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const usersController = {
  register: (req, res) => {
    res.render("users/register", { title: "Registrate", css: "register.css" });
  },

  login: (req, res) => {
    res.render("users/login", { title: "Ingresá", css: "login.css" });
  },

  addUser: (req, res) => {
    //Faltar validar la contraseña (entre otras cosas...)

    delete req.body.confirmpassword;

    //Verificamos si el usuario subio una imagen
    const image = req.file ? req.file.filename : "default-image.png";

    //Creamos al nuevo usuario
    const newUser = {
      id: users.length + 1,
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      image,
    };

    //Lo agregamos al array de objetos
    users.push(newUser);

    //Pasamos el array a json y guardamos
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, " "));

    //Redireccionamos al home
    res.redirect("/");
  },

  loginProcess: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/login", {
        title: "Inicia sesion",
        css: "login.css",
        errors: errors.mapped(),
      });
    }

    const userFind = users.find((u) => u.email == req.body.email);

    if (userFind) {
      if (bcrypt.compareSync(req.body.password, userFind.password)) {

        delete userFind.password;

        req.session.userLogged = userFind;

        return res.redirect("/");
        // return res.send("fgdfgdfgfdgfd")
      } else {

        return res.render("users/login", {
          title: "Inicia sesion",
          css: "login.css",
          errors: {
            email: {
              msg: "Las credenciales no coinciden",
            },
          },
        });
      }
    }

    return res.render("users/login", {
      title: "Inicia sesion",
      css: "login.css",
      errors: {
        email: {
          msg: "Correo no encontrado :(",
        },
      },
    });
    
  },
};

module.exports = usersController;
