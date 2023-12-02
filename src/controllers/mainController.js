const controller = {
    homeController: (req, res) => {
        res.render('home');
    },
    aboutController: (req, res) => {
        res.render(('nosotros'));
    },
    contactController: (req, res) => {
        res.render(('contacto'));
    }
};

module.exports = controller;