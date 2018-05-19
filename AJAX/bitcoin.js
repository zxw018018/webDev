var btn = document.querySelector("#btn");

var realPrice = document.querySelector("#price");

btn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){
		if (XHR.status==200 && XHR.readyState==4){
			var price = JSON.parse(XHR.responseText).bpi.USD.rate;
			realPrice.innerText = price+" USD";
		}
	}
	XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
	XHR.send();
})