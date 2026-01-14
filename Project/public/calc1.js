window.addEventListener("load", cost)
let Icost = ""
let TipP = ""
function cost(){
	Icost = document.getElementById("InitialCost");
	TipP = document.getElementById("TipP");	
			
	document.getElementById("1a").addEventListener("click", doA);
	document.getElementById("2a").addEventListener("click", doB);
	document.getElementById("3a").addEventListener("click", doC);
	document.getElementById("4a").addEventListener("click", doD);
	document.getElementById("5a").addEventListener("click", doE);
	document.getElementById("6a").addEventListener("click", doF);
	document.getElementById("7a").addEventListener("click", doG);
	document.getElementById("8a").addEventListener("click", doH);
	document.getElementById("9a").addEventListener("click", doI);
	document.getElementById("0a").addEventListener("click", doJ);
	document.getElementById("decimalA").addEventListener("click", decimalA);
	document.getElementById("deleteA").addEventListener("click", deleteA);
	document.getElementById("AA").addEventListener("click", ClearA);
	
	document.getElementById("1b").addEventListener("click", do1);
	document.getElementById("2b").addEventListener("click", do2);
	document.getElementById("3b").addEventListener("click", do3);
	document.getElementById("4b").addEventListener("click", do4);
	document.getElementById("5b").addEventListener("click", do5);
	document.getElementById("6b").addEventListener("click", do6);
	document.getElementById("7b").addEventListener("click", do7);
	document.getElementById("8b").addEventListener("click", do8);
	document.getElementById("9b").addEventListener("click", do9);
	document.getElementById("0b").addEventListener("click", do0);
	document.getElementById("decimalB").addEventListener("click", decimalB);
	document.getElementById("deleteB").addEventListener("click", deleteB);
	document.getElementById("AB").addEventListener("click", ClearB);
	
	document.getElementById("Calc").addEventListener("click", Calculate);
}
function doA(){
	Icost.value = Icost.value + "1";
}
function doB(){
	Icost.value = Icost.value + "2";
}	
function doC(){
	Icost.value = Icost.value + "3";
}	
function doD(){
	Icost.value = Icost.value + "4";
}	
function doE(){
	Icost.value = Icost.value + "5";
}	
function doF(){
	Icost.value = Icost.value + "6";
}	
function doG(){
	Icost.value = Icost.value + "7";
}	
function doH(){
	Icost.value = Icost.value + "8";
}	
function doI(){
	Icost.value = Icost.value + "9";
}	
function doJ(){
	Icost.value = Icost.value + "0";
}
function decimalA(){
	Icost.value = Icost.value + ".";
}
function deleteA(){
	Icost.value = Icost.value.slice(0, -1);
}
function ClearA(){
	Icost = document.getElementById("InitialCost");
	Icost.value = "";	
}
function do1(){
	TipP.value = TipP.value + "1";
} 
function do2(){
	TipP.value = TipP.value + "2";
}	
function do3(){
	TipP.value = TipP.value + "3";
}	
function do4(){
	TipP.value = TipP.value + "4";
}	
function do5(){
	TipP.value = TipP.value + "5";
}	
function do6(){
	TipP.value = TipP.value + "6";
}	
function do7(){
	TipP.value = TipP.value + "7";
}	
function do8(){
	TipP.value = TipP.value + "8";
}	
function do9(){
	TipP.value = TipP.value + "9";
}	
function do0(){
	TipP.value = TipP.value + "0";
}
function decimalB(){
	TipP.value = TipP.value + ".";
}
function deleteB(){
	TipP.value = TipP.value.slice(0, -1);
}
function ClearB(){
	TipP = document.getElementById("TipP");	
	TipP.value = "";	
}
function Calculate(){
	if (Icost.value == "" || TipP.value === "")
		{
		alert("Please make sure to enter both the cost and tip amounts.")
	}
	else
	{
		let Service = parseFloat(Icost.value);	
		let Tip = parseFloat(TipP.value);
		let tipAmount = Service * (Tip / 100);
		let total = parseFloat(Service) + parseFloat(tipAmount)
			
		document.getElementById("ServiceCost").value = Service.toFixed(2);
		document.getElementById("TipPercent").value = Tip + "%";
		document.getElementById("TipAmount").value = tipAmount.toFixed(2);
		document.getElementById("TotalCost").value = total.toFixed(2);
	}
}
	

function doF(){
	Icost.value = Icost.value + "6";
}	

function doG(){
	Icost.value = Icost.value + "7";
}	

function doH(){
	Icost.value = Icost.value + "8";
}	

function doI(){
	Icost.value = Icost.value + "9";
}	

function doJ(){
	Icost.value = Icost.value + "0";
}

function ClearA(){
	Icost = document.getElementById("InitialCost");
	Icost.value = "";	
}

function do1(){
	TipP.value = TipP.value + "1";
}  

function do2(){
	TipP.value = TipP.value + "2";
}	

function do3(){
	TipP.value = TipP.value + "3";
}	

function do4(){
	TipP.value = TipP.value + "4";
}	

function do5(){
	TipP.value = TipP.value + "5";
}	

function do6(){
	TipP.value = TipP.value + "6";
}	

function do7(){
	TipP.value = TipP.value + "7";
}	

function do8(){
	TipP.value = TipP.value + "8";
}	

function do9(){
	TipP.value = TipP.value + "9";
}	

function do0(){
	TipP.value = TipP.value + "0";
}

function ClearB(){
	TipP = document.getElementById("TipP");	
	TipP.value = "";	
}

function Calculate(){
	if (Icost.value == "" || TipP.value === "")
		{
		alert("Please make sure to enter both the cost and tip amounts.")
	}
	else
	{
		let Service = parseFloat(Icost.value);	
		let Tip = parseFloat(TipP.value);
		let tipAmount = Service * (Tip / 100);
		let total = parseFloat(Service) + parseFloat(tipAmount)
			
		document.getElementById("ServiceCost").value = Service.toFixed(2);
		document.getElementById("TipPercent").value = Tip + "%";
		document.getElementById("TipAmount").value = tipAmount.toFixed(2);
		document.getElementById("TotalCost").value = total.toFixed(2);
	}
}