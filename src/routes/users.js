const controller = require('../controllers/usersController');
const { Router } = require('express');
const router = Router();
const {upload2} = require("../middlewares/multer");
const validateLogin = require('../middlewares/validateLoginMiddleware');
const validateRegister = require('../middlewares/validateRegisterMiddleware');

const routes = {
    registerRoute: '/register',
    loginRoute: '/login',
};

//ADD USER
router.get(routes.registerRoute, controller.register);
router.post(routes.registerRoute, upload2.single('image'), validateRegister, controller.addUser);

//LOGIN USER
router.get(routes.loginRoute, controller.login);
router.post(routes.loginRoute, validateLogin, controller.loginProcess)

module.exports = router;