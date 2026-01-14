window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("AB");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickAB").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("AB");
			
	answer.textContent = "What is chlorophyll";
	answer.style.visibility = "visible";
}