const ErrorResponse = require("../utils/errorResponse");
const BlogModel = require("../models/Blog");

exports.create = async ({ title, content, author }) => {
	const blog = new BlogModel({
		title,
		content,
		author,
	});
	return blog.save();
};

exports.findById = async (id) => {
	const blog = await BlogModel.findById(id);
	return blog;
};

exports.getAllBlogs = async () => {
	const blogs = await BlogModel.find({});
	return blogs;
};

exports.updateBlog = async (id, { title, content }, author) => {
	const blog = await BlogModel.findById(id);
	if (blog.author !== author) {
		throw new ErrorResponse("You are not authorized to update this blog", 401);
	}
	blog.title = title;
	blog.content = content;
	await blog.save();
};

exports.deleteBlog = async (id, author) => {
	const blog = await BlogModel.findById(id);
	if (blog.author !== author) {
		throw new ErrorResponse("You are not authorized to update this blog", 401);
	}
	return await BlogModel.deleteOne({ id });
};
