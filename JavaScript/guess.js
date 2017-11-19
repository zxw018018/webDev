var targetNumber = 10;
var guessNumber = prompt("Guess the Number!");
if (guessNumber < targetNumber){
    alert("You are too small");
}
else if (guessNumber > targetNumber){
    alert("You are too big");
}
else {
    alert("You are right");
}