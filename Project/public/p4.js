window.addEventListener("load",Empty);

function Empty(){
	answer = document.getElementById("CD");
			
	answer.style.visibility = "hidden";
	addListener()
}

function addListener(){
		document.getElementById("clickCD").addEventListener("click",Ans);
}

function Ans(){
	answer = document.getElementById("CD");
			
	answer.textContent = "i dont like it here";
	answer.style.visibility = "visible";
}