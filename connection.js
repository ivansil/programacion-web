const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("useUnifiedTopology", true);
mongoose.set('useNewUrlParser', true);

const url = "mongodb+srv://user_admin:2OWKU8h0uavZxqpM@cluster0-visuo.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url)
	.then(()=>{
		console.log("Connected");
	})
	.catch((err)=>{
		console.log("Eror connection");
	});

module.exports = mongoose;	