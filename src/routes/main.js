const controller = require('../controllers/mainController');
const { Router } = require('express');
const router = Router();

const routes = {
    homeRoute: '/',
    aboutRoute: '/us',
    contactRoute: '/contact',
};

router.get(routes.homeRoute, controller.homeController);

router.get(routes.aboutRoute, controller.aboutController);

router.get(routes.contactRoute, controller.contactController);

module.exports = router;