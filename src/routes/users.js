const controller = require('../controllers/usersController');
const { Router } = require('express');
const router = Router();
const {upload2} = require("../middlewares/multer")

const routes = {
    registerRoute: '/register',
    loginRoute: '/login',
};

//ADD USER
router.get(routes.registerRoute, controller.registerController);
router.post(routes.registerRoute, upload2.single('image'), controller.addUserController);

//LOGIN USER
router.get(routes.loginRoute, controller.loginController);

module.exports = router;