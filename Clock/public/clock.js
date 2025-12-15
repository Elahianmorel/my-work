function time()
{
    var date = new Date();
	let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
	setTimeout(time, 1000)


    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour % 12; 
        session = "PM";
    }


    hour = ("0" + hour).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);


    var time = hour + ":" + min + ":" + sec + " " + session;
    
    document.getElementById("clock").innerHTML = time;
    
    setTimeout(time, 1000); 
}