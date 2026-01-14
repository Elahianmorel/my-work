window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("EA");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickEA").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("EA");
			
	answer.textContent = "E (approx.)= 2.72";
	answer.style.visibility = "visible";
}