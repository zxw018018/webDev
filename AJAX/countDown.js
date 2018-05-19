function countDown(second){
	var timeId = setInterval(function(){
		second = second-1;
		if (second > 0){
			console.log("Timer: "+second);
		} else {
			console.log("Ring Ring Ring!!!");
			clearInterval(timeId);
		}
		
	},1000);
	
}