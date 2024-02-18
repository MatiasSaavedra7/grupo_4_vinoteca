const { Router } = require('express');
const router = Router();
const controller = require('../controllers/usersController');
const {upload2} = require("../middlewares/multer");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const validateMiddleware = require('../middlewares/validateMiddleware');

//ADD USER
router.get('/register', guestMiddleware, controller.register);
router.post('/register', upload2.single('image'), validateMiddleware.register, controller.addUser);

//LOGIN USER
router.get('/login', guestMiddleware, controller.login);
router.post('/login', validateMiddleware.login, controller.loginProcess);

//PROFILE USER
router.get('/profile', authMiddleware ,controller.profile);

//EDIT USER
router.get("/edit/:id", controller.edit);

//LOGOUT
router.get('/logout', controller.logout);

//DELETE
router.get("/delete/:id", controller.delete);

router.delete("/delete/:id", controller.delete);

module.exports = router;