window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("AD");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickAD").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("AD");
			
	answer.textContent = "What is heterozygous";
	answer.style.visibility = "visible";
}