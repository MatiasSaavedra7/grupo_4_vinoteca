const path = require('path');
const { body } = require('express-validator');
const fs = require('fs');
const usersService = require('../model/services/usersService');

const validateRegister = [
        body('firstName')
                .notEmpty().withMessage('Debes ingresar tu nombre'),
        body('lastName')
                .notEmpty().withMessage('Debes ingresar tu apellido'),
        body('email')
                .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
                .isEmail().withMessage('Debes escribir un formato de correo válido').bail()
                .custom((value, { req }) => {
                        // let filename = path.join(__dirname, "../data/usersDataBase.json")
                        // let users = JSON.parse(fs.readFileSync(filename, "utf-8"));

                        if (users.find(u => u.email === req.body.email)) {
                                throw new Error("El correo ya se encuentra registrado");
                        }

                        return true;
                }),
        body('password')
                .notEmpty().withMessage('Debes ingresar una contraseña').bail()
                .withMessage('La contraseña debe tener un mínimo de 6 caracteres.'), 
        body('confirmpassword')
                .custom((value, { req }) => {
                        let { confirmpassword, password } = req.body;

                        if (confirmpassword !== password) {
                                throw new Error("Las contraseñas no coinciden")
                        }

                        return true;
                })
];

module.exports = validateRegister;