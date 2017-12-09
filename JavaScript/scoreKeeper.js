var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var winScore = 5;
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameOver = false;
var numInput = document.querySelector("input");
var winScoreDisplay = document.querySelector("p span");


p1.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score===winScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }


});

p2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score===winScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
});

reset.addEventListener("click",function(){
    resetFunc();
});

numInput.addEventListener("change",function(){
    winScoreDisplay.textContent = this.value;
    winScore = Number(this.value);
    resetFunc();
    
});

function resetFunc(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;

}