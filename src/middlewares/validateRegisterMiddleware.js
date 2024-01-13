const { body } = require('express-validator');

const validateRegister = [
    body('name').notEmpty().withMessage('Debes ingresar tu nombre'),
    body('surname').notEmpty().withMessage('Debes ingresar tu apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail().isLength({min: 6}).withMessage('Debe tener al menos 6 caracteres'), 
    body('confirmpassword').custom((value, { req }) => {
        let {confirmpassword, password} = req.body;

        if(confirmpassword !== password){
            throw new Error("Las contraseñas no coinciden")
        }

        return true;
    })
];

module.exports = validateRegister;