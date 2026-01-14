window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("BB");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickBB").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("BB");
			
	answer.textContent = "H2O / dihydrogen monoxide";
	answer.style.visibility = "visible";
}