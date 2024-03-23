const { Router } = require('express');
const router = Router();
const controller = require('../controllers/usersController');
const {upload3} = require("../middlewares/multer");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const validateMiddleware = require('../middlewares/validateMiddleware');

//ADD USER
router.get('/register', guestMiddleware, controller.register);
router.post('/register', upload3.single('image'), validateMiddleware.register, controller.addUser);
// router.post('/register', controller.addUser);

//LOGIN USER
router.get('/login', guestMiddleware, controller.login);
router.post('/login', validateMiddleware.login, controller.loginProcess);
// router.post('/login', controller.loginProcess);

//PROFILE USER
router.get('/profile', authMiddleware ,controller.profile);

//EDIT USER
router.get("/edit/:id", authMiddleware, controller.edit);
router.put("/edit/:id", upload3.single('image'), controller.update);

//LOGOUT
router.get('/logout', controller.logout);

//DELETE
router.get("/delete/:id", controller.delete);
router.delete('/delete/:id', controller.destroy);

module.exports = router;