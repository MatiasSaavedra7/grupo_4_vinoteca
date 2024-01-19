const controller = require('../controllers/usersController');
const { Router } = require('express');
const router = Router();
const {upload2} = require("../middlewares/multer");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require('../middlewares/guestMiddleware');
const validateLogin = require('../middlewares/validateLoginMiddleware');
const validateRegister = require('../middlewares/validateRegisterMiddleware');

//ADD USER
router.get('/register', guestMiddleware, controller.register);
router.post('/register', upload2.single('image'), validateRegister, controller.addUser);

//LOGIN USER
router.get('/login', guestMiddleware, controller.login);
router.post('/login', validateLogin, controller.loginProcess)

module.exports = router;