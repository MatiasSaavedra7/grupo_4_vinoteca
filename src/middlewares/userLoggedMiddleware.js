const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let userFromCookie = users.find(user => user.email == req.cookies.userEmail)
    
	if (userFromCookie) {
        req.session.userLogged = userFromCookie;
        delete userFromCookie.password;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;
