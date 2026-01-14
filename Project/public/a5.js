window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("DE");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickDE").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("DE");
			
	answer.textContent = "This equation is called an ellipse.";
	answer.style.visibility = "visible";
}