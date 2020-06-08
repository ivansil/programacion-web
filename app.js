const express = require("express");
const User = require("./connection");
const bparser = require("body-parser");
const app = express();
const port = 3000;

let urlEncodedParser = bparser.urlencoded({extended: false});
let jsonparser = bparser.json();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (request,response)=>{
	response.render("index");
});

app.get("/add", (request,response)=>{
	response.render("add");
});

app.get("/search", (request,response)=>{
	response.render("search");
});

app.post("/delete_user", urlEncodedParser, (request,response)=>{
	User.findOneAndDelete({_id: request.body._id}, (err)=>{
		if(err){
			response.send("<h2>ERROR</h2>");
		}else{
			response.send("Borrado!!!!!!");
		}
	});
});

app.post("/modify", urlEncodedParser,(request,response)=>{
	User.findOne({_id: request.body._id}, (err, user)=>{
		if (err) {
			response.send("<h2>ERROR</h2>");
		}else{
			response.render("modify_form", {user});
		}
	});
});

app.post("/modify_user", urlEncodedParser, (request, response)=>{
	User.findOneAndUpdate({ _id: request.body._id }, 
		{	_id: request.body._id, 
			userName: request.body.userName, 
			password: request.body.password	},
		(err, user)=>{
		if (err) {
			response.send("ERROR");
		}else{
			response.render("modify_form", {user});
		}
	});
});

app.post("/user", urlEncodedParser,(request, response)=>{
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
			response.render("add_success");
		}
	});
});

app.post("/users", urlEncodedParser,(request, response)=>{
	User.find({userName: request.body.userName}, (err, doc)=>{
		if (err) {
			response.send("<h2>ERROR</h2>");
		}else{	
			if (doc.length===0) {
				response.send("0 resultados");
			}else{
				response.render("users", {users: doc});
			}
		}
	});
});

app.listen(port, ()=>{
	console.log("Listening...");
});
