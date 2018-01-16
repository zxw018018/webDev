var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	var sound = "";
	if (animal === "pig"){
		sound = "Oink";
	}
	if (animal === "cow"){
		sound = "Moo";
	}
	if (animal === "dog"){
		sound = "Woof Woof!";
	}
	res.send("The " + animal + " says " + "\'" + sound + "\'");
});

app.get("/repeat/:word/:num", function(req, res){
	var word = req.params.word;
	var num = req.params.num;
	var printWord = "";
	for (var i = 0; i < num; i++){
		printWord = printWord + word + " ";
	}
	res.send(printWord);
})

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
})

app.listen(3000, function(){
	console.log("App is running");
});