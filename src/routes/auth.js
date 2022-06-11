const router = require("express").Router();
const userService = require("../service/user");
const apiResponse = require("../utils/apiResponse");
const {
	validateSignup,
	validateLogin,
} = require("../utils/validations/authValidation");

router.post("/register", async (req, res) => {
	try {
		const data = req.body;
		const { error } = validateSignup(data);
		if (error) {
			return apiResponse(res, 400, error.details[0].message);
		}
		const user = await userService.create(data);

		return apiResponse(res, 201, "User created successfully!", user);
	} catch (error) {
		next(error);
	}
});

//LOGIN
router.post("/login", async (req, res) => {
	try {
		const data = req.body;
		const { error } = validateLogin(data);
		if (error) {
			return apiResponse(res, 400, error.details[0].message);
		}
		const user = await userService.login(data);

		return apiResponse(res, 201, "Login successfully!", user);
	} catch (err) {
		next(error);
	}
});

module.exports = router;
