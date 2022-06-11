const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		author: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Blog = mongoose.model("Blogs", BlogSchema);

module.exports = Blog;
