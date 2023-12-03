const usersController = {
    registerController: (req, res) => {
        res.render('users/register', {title: 'Ingresá'});
    },
    loginController: (req, res) => {
        res.render('users/login', {title: 'Registrate'});
    }
};

module.exports = usersController;