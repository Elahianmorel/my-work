window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnsubmit").addEventListener("click",CreateFile);
}

function CreateFile()
{
	filename = document.getElementById("txtfilename").value.trim();
	mid = document.getElementById("txtmid").value.trim();
	gpa = document.getElementById("txtgpa").value.trim();
	grade = document.getElementById("txtgrade").value.trim();
	
	content = "NAME:" + filename + "\n" + "middle name" + mid + "\n"
	
	filename = filename = ".txt"
	
	blob= new Blob([content],{type: 'text/plain'});
	
	url = URL.createObjectURL(blob);
	
	a = document.createElement("a");
	
	a.href = url;
	
	a.download = filename;
	
	document.body.appendChild(a);
	a.click();
	document.body.remove(a);
	
	URL.revokeObjectURL(url);
}