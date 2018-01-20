var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


//adding a new cat to the DB

// var newCat = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// newCat.save(function(err, cat){
// 	if(err){
// 		console.log("Something went wrong");
// 	} else {
// 		console.log("we just saved a cat to the db:")
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});



//retrive all cats from the DB and console.log each one

Cat.find({}, function(err, cat){
	if(err){
		console.log("Oh no error");
		console.log(err);
	} else {
		console.log("All the cats...");
		console.log(cat);
	}
});