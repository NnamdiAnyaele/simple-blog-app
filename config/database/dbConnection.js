const mongoose = require("mongoose");

require("dotenv").config();
let database;

const connect = () => {
	// add your own uri below
	const uri = process.env.MONGODB_URI;
	if (database) {
		return;
	}
	mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	database = mongoose.connection;
	database.once("open", async () => {
		console.log("Connected to database");
	});
	database.on("error", () => {
		console.log("Error connecting to database");
	});
};

const disconnect = () => {
	if (!database) {
		return;
	}
	mongoose.disconnect();
};

module.exports = { connect, disconnect };
