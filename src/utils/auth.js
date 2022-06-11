const jwt = require("jsonwebtoken");

exports.generateToken = function (userId) {
	return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
		expiresIn: "2d",
	});
};
