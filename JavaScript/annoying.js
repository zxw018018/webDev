var value = prompt("Are we there yet");
// while(value!=='yes'&&value!=='yeah'){
//     value = prompt("Are we there yet");
// }

while(value.indexOf('yes')===-1){
    value = prompt("Are we there yet");;
}
alert('Yay, we finally made it!');