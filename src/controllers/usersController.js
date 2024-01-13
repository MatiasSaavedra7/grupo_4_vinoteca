const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const userFilePath = path.join(__dirname, "../data/usersDateBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const usersController = {
  register: (req, res) => {
    res.render("users/register");
  },

  login: (req, res) => {
    res.render("users/login");
  },

  addUser: (req, res) => {
    //Validamos los datos
    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.render('users/register', {errors: errors.mapped(), old: req.body});
    }

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

    //Asignamos a errors los resultados de las validaciones.
    const errors = validationResult(req);

    //Verificamos si errors no esta vacia
    if (!errors.isEmpty()) {

      //Retornamos a la vista login los errores
      return res.render("users/login", { errors: errors.mapped() });
    }

    //Buscamos al usuario a traves de su email
    const userFilePath = path.join(__dirname, "../data/usersDateBase.json");
    const users2 = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

    const userFind = users2.find((u) => u.email == req.body.email);

    if (userFind) {

      //Si existe el usuario verificamos la contraseña
      if (bcrypt.compareSync(req.body.password, userFind.password)) {

        //En caso afirmativo borramos la contraseña del usuario
        delete userFind.password;

        //Guardamos al usuario en session
        req.session.userLogged = userFind;

        //Retornamos a la home una vez validados el email y password
        return res.redirect("/");
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
};

module.exports = usersController;
