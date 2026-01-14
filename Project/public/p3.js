window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("CC");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickCC").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("CC");
			
	answer.textContent = "K = (1/2)mv^2";
	answer.style.visibility = "visible";
}