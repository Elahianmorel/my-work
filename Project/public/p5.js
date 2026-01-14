window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("CE");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickCE").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("CE");
			
	answer.textContent = "Gravity";
	answer.style.visibility = "visible";
}