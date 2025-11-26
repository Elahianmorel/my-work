window.addEventListener("load", addListener);


function addListener() 
{
	
   document.getElementById("btnsubmit").addEventListener("click",AddInfo);

  }
  


 let dataArray = [];
 let cleararray = [];


 function AddInfo()
 {	
  	let firstname = document.getElementById("txtfname").value;
  	let lastname = document.getElementById("txtlast").value;
  	let Id = document.getElementById("txtid").value;
  	let School = document.getElementById("txtsname").value;
  	let gc = document.getElementById("txtgc").value;
  	let Grade = document.getElementById("txtgrade").value;
  	
  	
  	let allinfo = {firstname, lastname, Id, School, gc, Grade};
  	dataArray.push(allinfo);
  	StoreInfo();
  	Clearinfo();
 }

 function StoreInfo()
 {
  	let datatable = document.getElementById("tblDataTable");
  	
  	datatable.innerHTML = `
  		<tr>
  			<th>First Name</th>
  			<th>Last Name</th>
  			<th>id</th>
  			<th>Grade</th>
  			<th>Email</th>
  			<th>phone#</th>
  		</tr>`;
  		
  	for (let i=0; i<dataArray.length; i++)
  	{
  		let row= `
  			<tr>
  				<td>${dataArray[i].firstname}</td>
  				<td>${dataArray[i].lastname}</td>
  				<td>${dataArray[i].Id}</td>
  				<td>${dataArray[i].Grade}</td>
  				<td>${dataArray[i].Email}</td>
  				<td>${dataArray[i].phone}</td>
  			</tr>` ; 
  		datatable.innerHTML += row;
  		}
		document.getElementById("btnsubmit").addEventListener("click", UseLocal);
  }

function UseLocal() 
{
   
	localStorage.clear();
	
   let fname = document.getElementById("txtfname").value;
   localStorage.setItem("firstname", fname);
   
   let lname = document.getElementById("txtlast").value;
   localStorage.setItem("lastname", lname);
   
   window.location.href = "result.html";
}
