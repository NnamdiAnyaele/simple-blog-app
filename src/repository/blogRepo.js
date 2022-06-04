const BlogModel = require("../models/Blog");

exports.create = async ({ title, content }) => {
	const blog = new BlogModel({
		title,
		content,
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

exports.updateBlog = async (id, { title, content }) => {
	const blog = await BlogModel.findById(id);
	blog.title = title;
	blog.content = content;
	await blog.save();
};

exports.deleteBlog = async (id) => {
	return await BlogModel.deleteOne({ id });
};
