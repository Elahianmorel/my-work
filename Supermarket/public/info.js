window.addEventListener("load", addListener)
total = 0
function addListener()
{
	document.getElementById("btnapple").addEventListener("click", fruit)
}

function fruit()
{	

	total = total + 5
	alert(total)

	

}
