//js 8/10 by student nr 20005308

function updateTable() {	
	var min1999 = Number(parseFloat(document.getElementById("min1999").value).toFixed(2));
	var cost1999 = Number(parseFloat(document.getElementById("cost1999").value).toFixed(2));
	var fph1999 = min1999/cost1999;
	document.getElementById("fph1999").value = Number(parseFloat(fph1999).toFixed(2));
	
	var min = Number(parseFloat(document.getElementById("min").value).toFixed(2));
	var cost = Number(parseFloat(document.getElementById("cost").value).toFixed(2));
	var fph = Number(parseFloat(min/cost).toFixed(2));
	if (isNaN(fph)) {fph=0;}
	document.getElementById("fph").value = fph;
	
	
	
	var y1999 = Number(parseFloat(document.getElementById("y1999").value).toFixed(2));
	var year = Number(parseFloat(document.getElementById("year").value).toFixed(2));
	
	var nph = Number(parseFloat(fph1999*cost));
	var str = "To buy <b>"+fph1999+"</b> Freddos per hour of labour like in year <b>"+y1999+"</b>, in year <b>"+year+"</b> you would have to earn <b>£"+nph+"</b> per hour.";
	document.getElementById("jsOutput").innerHTML = str;
}
