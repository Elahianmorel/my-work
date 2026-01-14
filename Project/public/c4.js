window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("BD");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickBD").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("BD");
			
	answer.textContent = "The pH of an acidic solution is lower";
	answer.style.visibility = "visible";
}