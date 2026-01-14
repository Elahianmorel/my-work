window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("DC");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickDC").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("DC");
			
	answer.textContent = "The factors are (x+2) and (x+10)";
	answer.style.visibility = "visible";
}