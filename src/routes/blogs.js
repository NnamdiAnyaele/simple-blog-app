const express = require("express");
const router = express.Router();
const blogService = require("../service/blog");
const apiResponse = require("../utils/apiResponse");
const { verifyToken } = require("../middleware/auth");

router.post("/blogs", verifyToken, async (req, res, next) => {
	try {
		const data = req.body;
		const { user } = req;
		const blog = await blogService.create({ data, author: user.username });

		return apiResponse(res, 201, "Blog created successfully", blog);
	} catch (error) {
		next(error);
	}
});

router.get("/blogs/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const blog = await blogService.findById(id);

		return apiResponse(res, 200, "Blogs fetched successfully", blog);
	} catch (error) {
		next(error);
	}
});
router.get("/blogs", async (req, res, next) => {
	try {
		const blogs = await blogService.getAllBlogs();

		return apiResponse(res, 200, "Blogs fetched successfully", blogs);
	} catch (error) {
		next(error);
	}
});

router.put("/blogs/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = req.body;
		const { user } = req;
		const blog = await blogService.updateBlog(id, data, user.username);
		return apiResponse(res, 200, "Blogs updated successfully", blog);
	} catch (error) {
		next(error);
	}
});

router.delete("/blogs/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const blog = await blogService.deleteBlog(id, user.username);
		return apiResponse(res, 200, "Blog deleted successfully", blog);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
