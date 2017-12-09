var button = document.querySelector("button");
// var body = document.querySelector("body");
// button.addEventListener("click",function(){
//     if(body.style.background=="purple"){
//         body.style.background = "white";
//     } else {
//         body.style.background = "purple";
//     }
// });
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");

});