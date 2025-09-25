window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnenter").addEventListener("click",gradeinfo);
}

function gradeinfo()
{
	g1 = document.getElementById("txtgrade1").value;
	g2 = document.getElementById("txtgrade2").value;
	g3 = document.getElementById("txtgrade3").value;
	g4 = document.getElementById("txtgrade4").value;
	g5 = document.getElementById("txtgrade5").value;
	
	c1 = document.getElementById("txtClass1").value;
	c2 = document.getElementById("txtClass2").value;
	c3 = document.getElementById("txtClass3").value;
	c4 = document.getElementById("txtClass4").value;
	c5 = document.getElementById("txtClass5").value;

		overall = (parseInt(g1) + parseInt(g2) + parseInt(g3) + parseInt(g4) + parseInt(g5))
		
		avg = (parseInt(overall)/parseInt(5))
		
		
showResult()

}

function showResult()
{
	let message = "";
	
	
	switch (true)
	{
		case (avg >= 90 && avg <= 100):
			message = "Your GPA is 4 and you have an A : "
			break;
		case (avg >= 80 && avg <= 89.99):
			message = "Your GPA is 3 and you have a B : "
			break;
		case (avg >= 70 && avg <= 79.99):
			message = "Your GPA is 2 and you have a C : "
			break;
		case (avg >= 60 && avg <= 69.99):
			message = "Your GPA is 1 and you have a D  "
			break;
		case (avg >= 60 && avg <= 69.99):
			message = "Your GPA is 0 and you have an F : "
			break;
		default:
			message = "invalid"
	}	
			
	document.getElementById("lblResult").textContent = message
	document.getElement

}
