const express = require("express");
const router = express.Router();

const bparser = require("body-parser");
let urlEncodedParser = bparser.urlencoded({extended: false});
let jsonparser = bparser.json();

const controller = require("./../controllers/users");

router.get("/", (request, response)=>{
	response.render("index");
});

router.get("/register", (request,response)=>{
	response.render("register_form");
});

router.get("/search", (request,response)=>{
	response.render("search");
});

router.post("/search_users", urlEncodedParser, controller.search_users);

router.get("/delete_user/:_id", urlEncodedParser, controller.delete_user);

router.get("/modify/:_id", urlEncodedParser, controller.modify);

router.post("/modify_user", urlEncodedParser, controller.modify_user);

router.post("/register_user", urlEncodedParser, controller.register_user);

module.exports = router;