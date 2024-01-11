const controller = require('../controllers/usersController');
const { Router } = require('express');
const router = Router();
const multer = require('multer');
const path = require('path');

// MULTER - Manejo del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../../public/images/users"));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
});

const routes = {
    registerRoute: '/register',
    loginRoute: '/login',
};




const upload = multer({ storage: storage });

router.get(routes.registerRoute, controller.registerController);
router.post(routes.registerRoute, upload.single('image'), controller.addUserController);

router.get(routes.loginRoute, controller.loginController);




module.exports = router;