const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
	},
	{ timestamps: true }
);

const Blog = mongoose.model("Blogs", BlogSchema);

module.exports = Blog;
