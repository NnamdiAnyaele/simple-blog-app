function JsonResponse(res, status, msg, data = null, meta = null) {
	const body = {
		message: "",
		data: null,
	};

	if (data) {
		body.data = data;
	}

	body.message = msg;

	return res.status(status).json(body);
}

module.exports = JsonResponse;
