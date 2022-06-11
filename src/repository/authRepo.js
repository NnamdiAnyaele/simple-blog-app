const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const { generateToken } = require("../utils/auth");

exports.create = async ({ username, email, password }) => {
	const existingUser = await UserModel.findOne({ username });
	if (existingUser) {
		throw new ErrorResponse("User already exists", 400);
	}
	const salt = await bcrypt.genSalt(10);
	const hashedPass = await bcrypt.hash(password, salt);
	const user = new UserModel({
		username,
		email,
		password: hashedPass,
	});
	const savedUser = user.save();
	const token = generateToken(user._id);
	return { user: savedUser, token };
};

exports.findById = async (id) => {
	const user = await UserModel.findById(id);
	return user;
};

exports.getAllusers = async () => {
	const users = await UserModel.find({});
	return users;
};

exports.login = async ({ username, password }) => {
	const user = await UserModel.findOne({ username });
	if (!user) {
		throw new ErrorResponse("Wrong credentials", 400);
	}

	const validated = await bcrypt.compare(password, user.password);
	if (!validated) {
		throw new ErrorResponse("Wrong credentials", 400);
	}

	const token = generateToken(user._id);

	return { user, token };
};

// exports.deleteUser = async (id) => {
// 	return await UserModel.deleteOne({ id });
// };
