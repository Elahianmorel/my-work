window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("BC");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickBC").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("BC");
			
	answer.textContent = "8 valence electrons";
	answer.style.visibility = "visible";
}