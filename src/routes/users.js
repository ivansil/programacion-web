const express = require("express");
const router = express.Router();

const bparser = require("body-parser");
let urlEncodedParser = bparser.urlencoded({extended: false});
let jsonparser = bparser.json();

// Agrega el schema User y la conneccion de mongodb
const User = require("./../models/userModels");

router.get("/", (request, response)=>{
	response.render("index");
});

router.get("/register", (request,response)=>{
	response.render("register_form");
});

router.get("/search", (request,response)=>{
	response.render("search");
});

router.post("/search_users", urlEncodedParser, async (request, response)=>{
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
});

router.post("/delete_user", urlEncodedParser, async (request,response)=>{
	try{
		await User.findOneAndDelete({_id: request.body._id});
		response.render("deleted");
	}catch(err){
		response.send("<h2>ERROR</h2>");
	}
});

router.post("/modify", urlEncodedParser,async (request,response)=>{
	try{
		let user = await User.findOne({_id: request.body._id});	
		response.render("modify_form", {user});
	}catch(err){
		response.send("<h2>ERROR</h2>");
	}
});

router.post("/modify_user", urlEncodedParser, async (request, response)=>{
	try{
		let newData = {	_id: request.body._id, userName: request.body.userName, password: request.body.password	}
		let user = await User.findOneAndUpdate({ _id: request.body._id }, newData);
		response.render("registered");
	}catch(err){
		response.send("ERROR");
	}
});

router.post("/register_user", urlEncodedParser, async (request, response)=>{
	try{
		let user = new User({ userName: request.body.userName, password: request.body.password });
		await user.save();
		response.render("registered");
	}catch(err){
		response.send("<h2>ERROR</h2>");
	}
});


module.exports = router;