const router = require("express").Router();
const blogRoute = require("./blogs");
const authRoute = require("./auth");

router.use("/v1", blogRoute);
router.use("/v1", authRoute);

module.exports = router;
