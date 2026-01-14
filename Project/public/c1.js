window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("BA");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickBA").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("BA");
			
	answer.textContent = "The study of matter / atoms / molecules (any answers are correct)";
	answer.style.visibility = "visible";
}