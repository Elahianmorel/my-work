window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("BE");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickBE").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("BE");
			
	answer.textContent = "Vibrational movement";
	answer.style.visibility = "visible";
}