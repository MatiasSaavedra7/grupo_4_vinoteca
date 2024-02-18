const usersService = require("../model/services/usersService");

async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	// usar un valor por defecto para el email en caso de que la cookie no exista o no tenga un valor
	let userFromCookie = await usersService.checkEmail("email", req.cookies.userEmail || "");

	if (userFromCookie) {
		userFromCookie.password = null;
        req.session.userLogged = userFromCookie;
	}
	
	if (req.session.userLogged) {

		res.locals.isLogged = true;

		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;
