window.addEventListener("load", addListener)
total = 0
fruit_amount = 0
items = [apple, banana, Strawberry, Mango, Dragon, pineapple]

function addListener()
{	
	// Fruits //
	document.getElementById("btnapple").addEventListener("click", fruit)
	document.getElementById("btnbanana").addEventListener("click", fruit)
	document.getElementById("btnStrawberry").addEventListener("click", fruit)
	document.getElementById("btnMango").addEventListener("click", fruit)
	document.getElementById("btnDragon").addEventListener("click", fruit)
	document.getElementById("btnPineapple").addEventListener("click", fruit)
	
	document.getElementById("btnresult").addEventListener("click", check)	
}



function check()
{
	if (total == 0 )
		{
			alert("please click what you want to add")
		}
	else
	{
		show()
	}
}


function fruit()
{	

	total = total + 3
	fruit_amount = fruit_amount + 1
	alert (total);
	

}


function show()
{	
	alert(total)
	amount = ["your total is $"+total,"you bought " + fruit_amount + " Fruits", "you bought " + vegetable_amount + " vegetables", "you bought " + snack_amount + " snacks" ];
	
	amount.innerHTML = "";
	itemList = document.getElementById("cmbitemlist")
	amtlength = itemList.length
	
	for (i=0; i <= 4 - 1; i++)
		{
			li = document.createElement("li");
			li.textContent = amount[i]
			itemList.appendChild(li)
			
			
		}
	
}
