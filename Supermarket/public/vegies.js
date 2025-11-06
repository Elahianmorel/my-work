window.addEventListener("load", addListener)
total = 0
vege_amount = 0
items = [carrot, pumpkin, patato, lettuce, brocoli, corn]

function addListener()
{	
	// vegies //
	document.getElementById("btncarrot").addEventListener("click", vegies)
	document.getElementById("btnpumpkin").addEventListener("click", vegies)
	document.getElementById("btnpatato").addEventListener("click", vegies)
	document.getElementById("btnlettuce").addEventListener("click", vegies)
	document.getElementById("btnbrocoli").addEventListener("click", vegies)
	document.getElementById("btncorn").addEventListener("click", vegies)
	
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


function vegies()
{	

	total = total + 4
	vege_amount = vege_amount + 1
	alert (total);
	

}


function show()
{	
	alert(total)
	amount = ["your total is $"+total,"you bought " + vege_amount + " Fruits", "you bought " + vegetable_amount + " vegetables", "you bought " + snack_amount + " snacks" ];
	
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
