window.addEventListener("load", addListener)
cart = [];

function addListener()
{
	document.getElementById("btnapple").addEventListener("click", fruits);
	document.getElementById("btnclearword").addEventListener("click", ClearWord);
	drplist = document.getElementById("drdchooseword");
}
function ShowWords()
{
	wordList = document.getElementById("cmbwordlist");
	wordList.innerHTML = "";
	drplist.innerHTML = "";
	wordlength = allwords.length;
	
	for(i = 0; i <= wordlength - 1; i++)
	{
		li = document.createElement("li");
		li.textContent = allwords[i];
		wordList.appendChild(li);
		
		drp = document.createElement("option");
		drp.text = allwords[i];
		drp.value = allwords[i];
		drplist.appendChild(drp);
	}
}
function AddWord()
{
	entwordelement = document.getElementById("txtentword");
	entword = entwordelement.value;
	
	if (entword !== "")
	{
		allwords.push(entword);
		entwordelement.value = "";
		entwordelement.focus();
		ShowWords();
	}
	else
	{
		alert("Enter a word!");
		document.getElementById("txtentword").focus();
	}
}
function ClearWord()
{
	for(i = 0; i <= wordlength - 1; i++)
	{
		allwords.pop();
	}
	ShowWords();
	document.getElementById("txtentword").value = "";
	document.getElementById("txtentword").focus();
}
