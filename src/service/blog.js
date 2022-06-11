const blogRepo = require("../repository/blogRepo");
const ErrorResponse = require("../utils/errorResponse");

exports.create = async (data) => {
	try {
		if (!data.title || !data.content) {
			throw new ErrorResponse("Title and content are required", 400);
		}

		const blog = await blogRepo.create(data);

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
		const blog = await blogRepo.findById(id);

		return blog;
	} catch (error) {
		throw error;
	}
};

exports.getAllBlogs = async () => {
	try {
		const blogs = await blogRepo.getAllBlogs();

		return blogs;
	} catch (error) {
		throw error;
	}
};

exports.updateBlog = async (id, { title, content }, author) => {
	try {
		if (!id) {
			throw new ErrorResponse("Id must be provided", 400);
		}
		if (!title || !content) {
			throw new ErrorResponse("Title and content are required", 400);
		}
		const blog = await blogRepo.updateBlog(id, { title, content }, author);

		return blog;
	} catch (error) {
		throw error;
	}
};

exports.deleteBlog = async (id, author) => {
	try {
		if (!id) {
			throw new ErrorResponse("Id must be provided", 400);
		}
		const blog = await blogRepo.deleteBlog(id, author);
		return blog;
	} catch (error) {
		throw error;
	}
};
