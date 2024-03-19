const { Router } = require('express');
const router = Router();
const apiUserController = require('../controllers/apisControllers/apiUserController');
const apiProductController = require('../controllers/apisControllers/apiProductController');

//Trae a todos los usuarios.
router.get("/users", apiUserController.getAll);

//Trae a un usuario en específico a traves del id.
router.get("/users/:id", apiUserController.getById);

//
router.get("/products", apiProductController.getAll);


module.exports = router;