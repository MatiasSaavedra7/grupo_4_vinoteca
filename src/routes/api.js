const { Router } = require('express');
const router = Router();
const apiUserController = require('../controllers/apisControllers/apiUserController');
const apiProductController = require('../controllers/apisControllers/apiProductController');

//Trae a todos los usuarios.
router.get("/users", apiUserController.getAll);

//Trae a un usuario en específico a traves del id.
router.get("/users/:id", apiUserController.getById);

//Trae a todos los productos.
router.get("/products", apiProductController.getAll);

//Trae a un producto en específico a traves del id.
router.get("/products/:id", apiProductController.getById);


module.exports = router;