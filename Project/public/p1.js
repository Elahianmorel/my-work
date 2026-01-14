window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("CA");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickCA").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("CA");
			
	answer.textContent = "Gravity";
	answer.style.visibility = "visible";
}