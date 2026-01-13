window.addEventListener("load", AddListener);
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function AddListener(){
	document.getElementById("addT").addEventListener("click", Add);
	document.getElementById("removeT").addEventListener("click", Remove);
	document.getElementById("clear").addEventListener("click", Clear);
}

function Add(){
	let day = document.getElementById("days").value;
	let task = document.getElementById("task").value;

	if(day == "" || task == ""){
		alert("Please select a day and enter a task!");
	}
	else{
		let dayList = document.getElementById(day);
		let thingTD = document.createElement("option");
		thingTD.text = task;
		dayList.add(thingTD);
		document.getElementById("task").value = "";
		document.getElementById("days").value = "";
	}
}

function Remove(){
	for(let i = 0; i < days.length; i++){
		let dayList = document.getElementById(days[i]);
		let whichday = dayList.selectedIndex;
		if(whichday != -1){
			dayList.remove(whichday);
			return;
		}
	}
	alert("Please select a task to remove!");
}

function Clear(){
	for(let i = 0; i < days.length; i++){
		let dayList = document.getElementById(days[i]);
		dayList.innerHTML = "";
	}
}