window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("EE");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickEE").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("EE");
			
	answer.textContent = "E (approx.)= 2.72";
	answer.style.visibility = "visible";
}