window.addEventListener("load", addListener)
total = 0
fruit_amount = 0
vegetable_amount = 0
snack_amount = 0

function addListener()
{	
	// Fruits //
	document.getElementById("btnapple").addEventListener("click", fruit)
	document.getElementById("btnbanana").addEventListener("click", fruit)
	document.getElementById("btnStrawberry").addEventListener("click", fruit)
	document.getElementById("btnMango").addEventListener("click", fruit)
	document.getElementById("btnDragon").addEventListener("click", fruit)
	document.getElementById("btnPineapple").addEventListener("click", fruit)
	
	// Vegetables //
	document.getElementById("btncarrot").addEventListener("click", vegetables)
	document.getElementById("btnpatato").addEventListener("click", vegetables)
	document.getElementById("btnpumpkin").addEventListener("click", vegetables)
	document.getElementById("btnlettuce").addEventListener("click", vegetables)
	document.getElementById("btnbrocoli").addEventListener("click", vegetables)
	document.getElementById("btncorn").addEventListener("click", vegetables)
	
	// snacks //
	document.getElementById("btnchips").addEventListener("click", snacks)
	document.getElementById("btnGummy").addEventListener("click", snacks)
	document.getElementById("btncookie").addEventListener("click", snacks)
	document.getElementById("btnchocolate").addEventListener("click", snacks)
	document.getElementById("btnmarshmellow").addEventListener("click", snacks)
	document.getElementById("btnPopcorn").addEventListener("click", snacks)
	
}






function fruit()
{	

	total = total + 3
	fruit_amount = fruit_amount + 1
	alert(total)

	

}


function vegetables()
{	

	total = total + 5
	vegetable_amount = vegetable_amount + 1
	alert(total)

	

}


function snacks()
{	

	total = total + 7
	snack_amount = snack_amount + 1
	alert(total)
	

}


function show()
{
	
}
