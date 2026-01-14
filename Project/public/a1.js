window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("DA");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickDA").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("DA");
			
	answer.textContent = "x = 2";
	answer.style.visibility = "visible";
}