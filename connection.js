const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("useUnifiedTopology", true);
mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', true);
// mongoose.set('useCreateIndex', true);
// mongoose.connect('mongodb+srv://admin:admin@beducluster-eiuzk.mongodb.net/test?retryWrites=true&w=majority'); 
mongoose.connect("mongodb+srv://user_admin:2OWKU8h0uavZxqpM@cluster0-visuo.mongodb.net/test?retryWrites=true&w=majority");

let Schema = mongoose.Schema;

let userSchema = new Schema({
	userName: String,
	password: String
});

let User = mongoose.model("users", userSchema);

module.exports = User;	