const userRepo = require("../repository/authRepo");
const ErrorResponse = require("../utils/errorResponse");

exports.create = async (data) => {
	try {
		if (!data.username || !data.email || !data.password) {
			throw new ErrorResponse("Userame, email and password are required", 400);
		}

		const blog = await userRepo.create(data);

		return blog;
	} catch (error) {
		throw error;
	}
};

exports.findById = async (id) => {
	try {
		if (!id) {
			throw new ErrorResponse("Id must be provided", 400);
		}
		const blog = await userRepo.findById(id);

		return blog;
	} catch (error) {
		throw error;
	}
};

exports.getAllBlogs = async () => {
	try {
		const blogs = await userRepo.getAllBlogs();

		return blogs;
	} catch (error) {
		throw error;
	}
};

exports.login = async () => {
	try {
		const user = await userRepo.login();

		return user;
	} catch (error) {
		throw error;
	}
};

// exports.deleteUser = async (id) => {
// 	try {
// 		if (!id) {
// 			throw new ErrorResponse("Id must be provided", 400);
// 		}
// 		const user = await userRepo.deleteUser(id);
// 		return user;
// 	} catch (error) {
// 		throw error;
// 	}
// };
