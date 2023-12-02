const usersController = {
    registerController: (req, res) => {
        res.render(('./users/register'));
    },
    loginController: (req, res) => {
        res.render(('./users/login'));
    }
};

module.exports = usersController;