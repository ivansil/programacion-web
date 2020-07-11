const User = require("./../models/userModels");

controller = {
	search_users: async (request, response)=>{
		try {
			let users = await User.find({userName: request.body.userName});
			if (users.length===0) {
				response.render("no_results");
			}
			response.render("users_list", {users});
		}catch(err){
			console.log(err);
			response.send("<h2>ERROR</h2>");
		}
	},
	delete_user: async (request,response)=>{
		console.log(request.body);
		try{
			await User.findOneAndDelete({_id: request.params._id});
			response.render("deleted");
		}catch(err){
			response.send("<h2>ERROR</h2>");
		}
	},
	modify: async (request,response)=>{
		try{
			console.log({_id: request.params._id});
			let user = await User.findOne({_id: request.params._id});	
			response.render("modify_form", {user});
		}catch(err){
			response.send("<h2>ERROR</h2>");
		}
	},
	modify_user: async (request, response)=>{
		try{
			let newData = {	_id: request.body._id, userName: request.body.userName, password: request.body.password	}
			let user = await User.findOneAndUpdate({ _id: request.body._id }, newData);
			response.render("registered");
		}catch(err){
			response.send("<h2>ERROR</h2>");
		}
	},
	register_user: async (request, response)=>{
		try{
			let user = new User({ userName: request.body.userName, password: request.body.password });
			await user.save();
			response.render("registered");
		}catch(err){
			response.send("<h2>ERROR</h2>");
		}
	}
}

module.exports = controller;