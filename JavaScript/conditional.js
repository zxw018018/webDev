var age = Number(prompt("what's your age"));

if (age<0){
    console.log("error");
}
if (age==21){
    console.log("happy 21st birthday");
}
if (age%2==1){
    console.log("your age is odd");
}
if (age % Math.sqrt(age)==0){
    console.log("perfect match");
}

