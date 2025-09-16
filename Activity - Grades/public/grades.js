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
		document.write("Your classes " + c1 + " " + c2 + " " + c3 + " " + c4 + " " + c5)
		document.write("your average is " + avg)

}
