const jwt = require("jsonwebtoken");
const { findById } = require("../repository/authRepo");
const apiResponse = require("../utils/apiResponse");

exports.verifyToken = async (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			const token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

			const user = await findById(decoded.id);

			if (!user) {
				next(new apiResponse("User does not exist.", 401));
			}

			req.user = user;

			return next();
		} catch (error) {
			return apiResponse(res, 401, "Not Authorised, invalid token");
		}
	} else {
		return apiResponse(res, 401, "Not Authorised, invalid token");
	}
};
