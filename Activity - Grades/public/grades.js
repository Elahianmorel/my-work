window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btngrade").addEventListener("click",gradeinfo);
}

function gradeinfo()
{
	g1 = document.getElementById("txtgrade1").value;
	g2 = document.getElementById("txtgrade2").value;
	g3 = document.getElementById("txtgrade3").value;
	g4 = document.getElementById("txtgrade4").value;
	g5 = document.getElementById("txtgrade5").value;
	
	if(g1 == "" || g2 == "" || g3 == "" || g4 == "" || g5 == "" )
	{
		alert("Missing grade")
	}
	else
	{
		overall = (int(g1) + int(g2) + int(g3) + int(g4) + int(g5) )
		
		avg = (int(overall)/int(5))
		alert(str(avg));
		document.write("your grade is" + str(avg))
	}
}
