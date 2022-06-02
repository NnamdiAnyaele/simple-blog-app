const router = require("express").Router();
const blogRoute = require("./blogs");

router.use("/v1", blogRoute);

module.exports = router;
