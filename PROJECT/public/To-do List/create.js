window.addEventListener("load", Click);
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let content = "";
let mondayTasks = "";
let tuesdayTasks = "";
let wednesdayTasks = "";
let thursdayTasks = "";
let fridayTasks = "";
let saturdayTasks = "";
let sundayTasks = "";

function Click(){
	document.getElementById("file").addEventListener("click", CreateFile);
}

function CreateFile() { 
	content = "";
	mondayTasks = "";
    tuesdayTasks = "";
	wednesdayTasks = "";
	thursdayTasks = "";
	fridayTasks = "";
	saturdayTasks = "";
	sundayTasks = "";  
	 
    let mondayList = document.getElementById("Monday");
    for(let i = 0; i < mondayList.options.length; i++) {
        mondayTasks = mondayTasks + mondayList.options[i].text + ", ";
    }
    if(mondayTasks == "") {
        content = content + "Monday: nothing for today!\n";
    }
    else {
        content = content + "Monday: " + mondayTasks + "\n";
    }
	
    let tuesdayList = document.getElementById("Tuesday");
    for(let i = 0; i < tuesdayList.options.length; i++) {
        tuesdayTasks = tuesdayTasks + tuesdayList.options[i].text + ", ";
    }
    if(tuesdayTasks == "") {
        content = content + "Tuesday: nothing for today!\n";
    }
    else {
        content = content + "Tuesday: " + tuesdayTasks + "\n";
    }
    
    let wednesdayList = document.getElementById("Wednesday");
    for(let i = 0; i < wednesdayList.options.length; i++) {
        wednesdayTasks = wednesdayTasks + wednesdayList.options[i].text + ", ";
    }
    if(wednesdayTasks == "") {
        content = content + "Wednesday: nothing for today!\n";
    }
    else {
        content = content + "Wednesday: " + wednesdayTasks + "\n";
    }
    

    let thursdayList = document.getElementById("Thursday");
    for(let i = 0; i < thursdayList.options.length; i++) {
        thursdayTasks = thursdayTasks + thursdayList.options[i].text + ", ";
    }
    if(thursdayTasks == "") {
        content = content + "Thursday: nothing for today!\n";
    }
    else {
        content = content + "Thursday: " + thursdayTasks + "\n";
    }
    
    let fridayList = document.getElementById("Friday");
    for(let i = 0; i < fridayList.options.length; i++) {
        fridayTasks = fridayTasks + fridayList.options[i].text + ", ";
    }
    if(fridayTasks == "") {
        content = content + "Friday: nothing for today!\n";
    }
    else {
        content = content + "Friday: " + fridayTasks + "\n";
    }
    
    let saturdayList = document.getElementById("Saturday");
    for(let i = 0; i < saturdayList.options.length; i++) {
        saturdayTasks = saturdayTasks + saturdayList.options[i].text + ", ";
    }
    if(saturdayTasks == "") {
        content = content + "Saturday: nothing for today!\n";
    }
    else {
        content = content + "Saturday: " + saturdayTasks + "\n";
    }
    
    let sundayList = document.getElementById("Sunday");
    for(let i = 0; i < sundayList.options.length; i++) {
        sundayTasks = sundayTasks + sundayList.options[i].text + ", ";
    }
    if(sundayTasks == "") {
        content = content + "Sunday: nothing for today!\n";
    }
    else {
        content = content + "Sunday: " + sundayTasks + "\n";
    }
    
    let blob = new Blob([content], {type: 'text/plain'});
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    
    a.href = url;
    a.download = "todo_list.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
}