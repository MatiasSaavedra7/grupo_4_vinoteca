const { check, body } = require("express-validator")
const userService = require('../model/services/usersService');


const validate = {
    login: [
        check('email')
            .isEmail().withMessage('Debe ingresar un correo válido.'),
        check('password')
            .notEmpty().withMessage('Debe ingresar una contraseña'),
    ],

    register: [
        body('firstName')
            .notEmpty().withMessage('Debes ingresar tu nombre'),
        body('lastName')
            .notEmpty().withMessage('Debes ingresar tu apellido'),
        body('email')
            .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
            .isEmail().withMessage('Debes escribir un formato de correo válido').bail()
            .custom(async (value, { req }) => {

                if (await userService.checkEmail("email", req.body.email)) {
                    throw new Error("El correo ya se encuentra registrado");
                }

                return true;
            }),
        body('password')
            .notEmpty().withMessage('Debes ingresar una contraseña').bail()
            .withMessage('La contraseña debe tener un mínimo de 6 caracteres.'),
        body('confirmpassword')
            .notEmpty().withMessage('Debes completar este campo').bail()
            .custom((value, { req }) => {
                let { confirmpassword, password } = req.body;

                if (confirmpassword !== password) {
                    throw new Error("Las contraseñas no coinciden")
                }

                return true;
            })
    ],
    editPass: [
            body('password')
                .notEmpty().withMessage('Debes ingresar tu contraseña actual').bail()
                .isLength({min: 6}).withMessage('La contraseña debe tener un mínimo de 6 caracteres.'),
            body('newpassword')
                .notEmpty().withMessage('Debes ingresar tu nueva contraseña').bail()
                .isLength({min: 6}).withMessage('La contraseña debe tener un mínimo de 6 caracteres.'),
            body('confirmpassword')
                .notEmpty().withMessage('Debes completar este campo').bail()
                .custom((value, { req }) => {
                    let { confirmpassword, newpassword } = req.body;
    
                    if (confirmpassword !== newpassword) {
                        throw new Error("Las contraseñas no coinciden")
                    }
    
                    return true;
                })
        
    ],
    product: [
            body('name')
                .notEmpty().withMessage('Debes completar con el nombre del producto').bail(),
            body('price')
                .notEmpty().withMessage('Debes completar con el precio del producto').bail(),
            body('discount')
                .notEmpty().withMessage('Debes completar con el descuento del producto').bail(),
            body('stock')
                .notEmpty().withMessage('Debes completar con el stock del producto').bail(),
            body('description')
                .notEmpty().withMessage('Debes completar con la descripción del producto').bail(),
    ]

}
module.exports = validate;