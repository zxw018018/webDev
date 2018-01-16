var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there");
});


app.get("/bye", function(req, res){
	res.send("Goodbye");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	var subredditName = req.params.subredditName;
	var id = req.params.id;
	var title = req.params.title;
	res.send("welcome to " + subredditName + " " + id + " " + title);
});

app.get("*", function(req, res){
	res.send("Error page");
});

app.listen(3000, function(){
	console.log("Server has started");
});
