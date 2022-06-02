const express = require("express");
const router = express.Router();
const blogService = require("../service/blog");
const apiResponse = require("../utils/apiResponse");

router.post("/blog", async (req, res, next) => {
	try {
		const data = req.body;
		console.log("I ran");
		const blog = await blogService.create(data);

		return apiResponse(res, 201, "Blog created successfully", blog);
	} catch (error) {
		next(error);
	}
});

router.get("/blog/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const blog = await blogService.findById(id);

		return apiResponse(res, 200, "Blogs fetched successfully", blog);
	} catch (error) {
		next(error);
	}
});
router.get("/blog", async (req, res, next) => {
	try {
		const blogs = await blogService.getAllBlogs();

		return apiResponse(res, 200, "Blogs fetched successfully", blogs);
	} catch (error) {
		next(error);
	}
});

router.put("/blog/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = req.body;
		const blog = await blogService.updateBlog(id, data);
		return apiResponse(res, 200, "Blogs updated successfully", blog);
	} catch (error) {
		next(error);
	}
});

router.delete("/blog/:id", async (req, res, next) => {
	const { id } = req.params;
	try {
		const blog = await blogService.deleteBlog(id);
		return apiResponse(res, 200, "Blog deleted successfully", blog);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
