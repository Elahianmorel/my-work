window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("EB");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickEB").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("EB");
			
	answer.textContent = "E (approx.)= 2.72";
	answer.style.visibility = "visible";
}