window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("ED");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickED").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("ED");
			
	answer.textContent = "E (approx.)= 2.72";
	answer.style.visibility = "visible";
}