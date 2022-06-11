const Joi = require("joi");

const validateSignup = (user) => {
	const Schema = Joi.object().keys({
		username: Joi.string().max(30).required(),
		email: Joi.string().email().max(50).required(),
		password: Joi.string().min(7).required(),
	});

	return Schema.validate(user);
};

const validateLogin = (user) => {
	const Schema = Joi.object().keys({
		username: Joi.string().max(30).required(),
		password: Joi.string().min(7).required(),
	});

	return Schema.validate(user);
};

module.exports = {
	validateSignup,
	validateLogin,
};
