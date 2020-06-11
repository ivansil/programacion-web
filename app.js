const express = require("express");
const app = express();
const port = 3000;

const routes = require("./src/routes/index");

app.use("/", routes);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.listen(port, ()=>{
	console.log("Listening...");
});