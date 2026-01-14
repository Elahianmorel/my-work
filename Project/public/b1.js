window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("AA");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickAA").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("AA");
			
	answer.textContent = "What is the mitochondrion";
	answer.style.visibility = "visible";
}