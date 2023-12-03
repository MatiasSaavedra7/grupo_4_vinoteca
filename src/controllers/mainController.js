const controller = {
    homeController: (req, res) => {
        res.render('home', {title: 'VENNER Vinoteca', css: 'home.css'});
    },
    aboutController: (req, res) => {
        res.render('nosotros', {title: 'Sobre Nosotros', css:'nosotros.css'});
    },
    contactController: (req, res) => {
        res.render('contacto', {title: 'Contacto', css: 'contacto.css'});
    }
};

module.exports = controller;