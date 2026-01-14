window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("DB");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickDB").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("DB");
			
	answer.textContent = "The coefficient is m";
	answer.style.visibility = "visible";
}