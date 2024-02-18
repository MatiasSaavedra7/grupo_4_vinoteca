function adminMiddleware(req, res, next) {
    if (req.session.userLogged.rol_id !== 1) {
        return res.redirect('/');
    }
    next();
}

module.exports = adminMiddleware;