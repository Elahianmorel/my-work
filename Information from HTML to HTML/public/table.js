window.addEventListener("load",AddInfo);

let dataArray = [];
let cleararray = [];


function AddInfo()
{	
	let firstname = document.getElementById("txtfname").value;
	let lastname = document.getElementById("txtlast").value;
	let Age = document.getElementById("txtage").value;
	let Grade = document.getElementById("txtGrade").value;
	let Email = document.getElementById("txtemail").value;
	let phone = document.getElementById("txtphone").value;
	
	
	let allinfo = {firstname, lastname, Age, Grade, Email, phone};
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
			<th>Age</th>
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
				<td>${dataArray[i].Age}</td>
				<td>${dataArray[i].Grade}</td>
				<td>${dataArray[i].Email}</td>
				<td>${dataArray[i].phone}</td>
			</tr>` ; 
		datatable.innerHTML += row;
		}
		
}
