const express = require("express");
const router = express.Router();

const bparser = require("body-parser");
let urlEncodedParser = bparser.urlencoded({extended: false});
let jsonparser = bparser.json();

// Agrega el schema User y la conneccion de mongodb
const User = require("./../../connection");

router.get("/", (request, response)=>{
	response.render("index");
});

router.get("/register", (request,response)=>{
	response.render("register_form");
});

router.get("/search", (request,response)=>{
	response.render("search");
});

router.post("/search_users", urlEncodedParser,(request, response)=>{
	User.find({userName: request.body.userName}, (err, doc)=>{
		if (err) {
			response.send("<h2>ERROR</h2>");
		}else{	
			if (doc.length===0) {
				response.send("0 resultados");
			}else{
				response.render("users_list", {users: doc});
			}
		}
	});
});

router.post("/delete_user", urlEncodedParser, (request,response)=>{
	User.findOneAndDelete({_id: request.body._id}, (err)=>{
		if(err){
			response.send("<h2>ERROR</h2>");
		}else{
			response.render("deleted");
		}
	});
});

router.post("/modify", urlEncodedParser,(request,response)=>{
	User.findOne({_id: request.body._id}, (err, user)=>{
		if (err) {
			response.send("<h2>ERROR</h2>");
		}else{
			response.render("modify_form", {user});
		}
	});
});

router.post("/modify_user", urlEncodedParser, (request, response)=>{
	User.findOneAndUpdate({ _id: request.body._id }, 
		{	_id: request.body._id, 
			userName: request.body.userName, 
			password: request.body.password	},
		(err, user)=>{
		if (err) {
			response.send("ERROR");
		}else{
			response.render("registered");
		}
	});
});

router.post("/register_user", urlEncodedParser,(request, response)=>{
	User.find({userName: request.body.userName}, (err, doc)=>{
		if (err) {
			response.send("<h2>ERROR</h2>");
		}else{	
			let user = new User({
				userName: request.body.userName,
				password: request.body.password
			});
			user.save((data, err)=>{
				if(err) {
					response.render("Error al guardar");
				}
			});
			response.render("registered");
		}
	});
});


module.exports = router;