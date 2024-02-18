function adminMiddleware(req, res, next) {
    if (req.session.userLogged.rol !== "Administrador") {
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;