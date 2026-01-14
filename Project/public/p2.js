window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("CB");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickCB").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("CB");
			
	answer.textContent = "The energy of an object in movement";
	answer.style.visibility = "visible";
}