const mongoose = require("./../../connection");

let { Schema } = mongoose;

let userSchema = new Schema({
	userName: String,
	password: String
});

module.exports = mongoose.model("users", userSchema);
