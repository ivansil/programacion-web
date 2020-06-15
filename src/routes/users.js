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
	User.find({userName: request.body.userName}).exec()
	.then((users)=>{
		if (users.length===0) {
			response.render("no_results");
		}else{
			response.render("users_list", {users});
		}
	})
	.catch((err)=>{
		console.log(err);
		response.send("<h2>ERROR</h2>");
	});
});

router.post("/delete_user", urlEncodedParser, (request,response)=>{
	User.findOneAndDelete({_id: request.body._id}).exec()
		.then(()=>{
			response.render("deleted");
		})
		.catch(()=>{
			response.send("<h2>ERROR</h2>");
		});
});

router.post("/modify", urlEncodedParser,(request,response)=>{
	User.findOne({_id: request.body._id}).exec()
		.then((user)=>{
			response.render("modify_form", {user});
		})
		.catch((err)=>{
			response.send("<h2>ERROR</h2>");
		});
});

router.post("/modify_user", urlEncodedParser, (request, response)=>{
	User.findOneAndUpdate({ _id: request.body._id }, 
		{	_id: request.body._id, 
			userName: request.body.userName, 
			password: request.body.password	}).exec()
		.then((user)=>{
			response.render("registered");
		})
		.catch((err)=>{
			response.send("ERROR");
		});
});

router.post("/register_user", urlEncodedParser,(request, response)=>{
	User.find({userName: request.body.userName}).exec()
		.then(()=>{
			let user = new User({
				userName: request.body.userName,
				password: request.body.password
			});
			user.save((data, err)=>{
				if(err) {
					response.send("<h2>Error saving user</h2>");
				}
			});
			response.render("registered");
		})
		.catch((err)=>{
			response.send("<h2>ERROR</h2>");
		});
});


module.exports = router;