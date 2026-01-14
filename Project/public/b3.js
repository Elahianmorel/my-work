window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("AC");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickAC").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("AC");
			
	answer.textContent = "What is mutualism";
	answer.style.visibility = "visible";
}