//js 6/10 by student nr 20005308

function updateTable() {	
	var min1999 = Number(parseFloat(document.getElementById("min1999").value).toFixed(2));
	var cost1999 = Number(parseFloat(document.getElementById("cost1999").value).toFixed(2));
	var fph1999 = min1999/cost1999;
	//alert(typeof min1999);
	document.getElementById("fph1999").value = Number(parseFloat(fph1999).toFixed(2));
	
	var min = Number(parseFloat(document.getElementById("min").value).toFixed(2));
	var cost = Number(parseFloat(document.getElementById("cost").value).toFixed(2));
	var fph = Number(parseFloat(min/cost).toFixed(2));
	if (isNaN(fph)) {fph=0;}
	document.getElementById("fph").value = fph;
	
	var y1999 = Number(parseFloat(document.getElementById("y1999").value).toFixed(2));
	var year = Number(parseFloat(document.getElementById("year").value).toFixed(2));
	
	var nph = Number(parseFloat(fph1999*cost));
	var str = "";
	//i want to specify another case, where fph in 1999 and in user-inputted year is the same
	if (isNaN(nph)) {
		str = "You have to put proper numbers in proper places.";
	} else {
		
		//if statements
		if (fph == fph1999) {
			str = "In <b>"+year+"</b>, earning <b>£"+min+"</b> per hour, you can buy just as many Freddos per hour of labour as in year <b>"+y1999+"</b> (<b>"+fph1999+"</b> Freddos per hour)"; 
		} else if (fph > fph1999) {
			var howMany = fph-fph1999;
			str = "In <b>"+year+"</b>, earning <b>£"+min+"</b> per hour, you can buy more Freddos per hour than in year <b>"+y1999+"</b> ("+howMany+" Freddos more)"; 
		} else {
		str = "To buy <b>"+fph1999+"</b> Freddos per hour of labour like in year <b>"+y1999+"</b>, in year <b>"+year+"</b> you would have to earn <b>£"+nph+"</b> per hour.";
		}
		
		/*
		case (fph == fph1999) {
			str = "In <b>"+year+"</b>, earning <b>£"+min+"</b> per hour, you can buy just as many Freddos per hour of labour as in year <b>"+y1999+"</b> (<b>"+fph1999+"</b> Freddos per hour)"; 
		} else if (fph > fph1999) {
			var howMany = fph-fph1999;
			str = "In <b>"+year+"</b>, earning <b>£"+min+"</b> per hour, you can buy more Freddos per hour than in year <b>"+y1999+"</b> ("+howMany+" Freddos more)"; 
		} else {
		str = "To buy <b>"+fph1999+"</b> Freddos per hour of labour like in year <b>"+y1999+"</b>, in year <b>"+year+"</b> you would have to earn <b>£"+nph+"</b> per hour.";
		}
		*/
	}
	document.getElementById("jsOutput").innerHTML = str;
}