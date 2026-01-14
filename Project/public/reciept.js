
window.addEventListener("load", addListener);
function addListener() {
   document.getElementById("file").addEventListener("click", CreateFile);
}
function CreateFile() {
	let filename = document.getElementById("RecieptN").value.trim();
   let service = document.getElementById("ServiceCost").value.trim();
   let TipPercent = document.getElementById("TipPercent").value.trim();
   let TipA = document.getElementById("TipAmount").value.trim();
   let Total = document.getElementById("TotalCost").value.trim();
  
   if (service === "" || TipPercent === "" || TipA === "" || Total === "") {
       alert("All values must be entered before creating a file. Please click Calculate first.");
       return;
   }
  
	if (filename == ""){
		alert("Please enter a name for your reciept.")
		return;
	}
	else{
		filename = filename + ".txt"
	}
  
   let content = "Service Cost: $" + service + "\n" + "Tip Percent: " + TipPercent + "\n" + "Tip Amount: $" + TipA + "\n" + "Total Cost: $" + Total;
   let blob = new Blob([content], {type: 'text/plain'});
  
	let url = URL.createObjectURL(blob);
  
   let a = document.createElement("a");
  
	a.href = url;
	
   a.download = filename;
  
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
  
   URL.revokeObjectURL(url);
  
   alert("Receipt file created successfully!");
}

