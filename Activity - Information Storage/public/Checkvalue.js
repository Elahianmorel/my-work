window.addEventListener("load",CheckInput);

function CheckInput()
{
	inputfilename = document.getElementById("txtfilename");
	submitfilename = document.getElementById("btnsubmit");
	
	yesnowords = inputfilename.value.trim();
	if(yesnowords.length > 0)
		{
			submitfilename.disabled = false;
		}
		else 
		{
			submitfilename.disable = true;
		}
		inputfilename.addEventListener("input",CheckInput);
}
