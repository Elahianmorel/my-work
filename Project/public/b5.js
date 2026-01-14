window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("AE");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickAE").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("AE");
			
	answer.textContent = "What are cyclins and CDKs";
	answer.style.visibility = "visible";
}