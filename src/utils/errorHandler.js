const { JsonResponse } = require("./apiResponse");
const { logError } = require("./logger.js");

module.exports = function (err, req, res, next) {
	logError("Error", err);
	const errorMessage =
		err.msg ||
		(err.response &&
			typeof err.response.message === "string" &&
			err.response.message) ||
		(err.response &&
			err.response.data &&
			typeof err.response.data.message === "string" &&
			err.response.data.message) ||
		err.message ||
		"Something went wrong";

	const statusCode =
		err.code || (err.response && err.response.status) || err.statusCode || 500;

	console.log("err ==> ", new Date().getUTCDate(), "<===>", err);

	return JsonResponse(res, statusCode, errorMessage);
};
