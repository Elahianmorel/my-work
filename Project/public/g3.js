window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("EC");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickEC").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("EC");
			
	answer.textContent = "E (approx.)= 2.72";
	answer.style.visibility = "visible";
}