const fs = require("fs");
const path = require("path");
const bcrypt = require('bcrypt');

const userFilePath = path.join(__dirname, "../data/usersDateBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));


const usersController = {
    registerController: (req, res) => {
        res.render('users/register', {title: 'Registrate', css: 'register.css'});
    },
    loginController: (req, res) => {
        res.render('users/login', {title: 'Ingresá', css: 'login.css'});
    },
    addUserController: (req, res) => {

        const image = req.file ? req.file.filename : "default-image.png";


        delete req.body.confirmpassword

        const newUser = {
            id: users.length + 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image,
        }

        users.push(newUser);

        fs.writeFileSync(userFilePath, JSON.stringify(users, null, ' '));

        res.redirect("/");
        
    }
};


module.exports = usersController;