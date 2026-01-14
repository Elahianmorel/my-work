window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("DD");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickDD").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("DD");
			
	answer.textContent = "E (approx.)= 2.72";
	answer.style.visibility = "visible";
}