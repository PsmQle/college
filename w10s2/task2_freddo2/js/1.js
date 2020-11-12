//js 6/10 by student nr 20005308
function freddosPerHour(min, cost) {
	var fph = Number(parseFloat(min).toFixed(2))/Number(parseFloat(cost).toFixed(2));
	return Number(parseFloat(fph).toFixed(2));
}
function updatePicture(which){
	var imgPath = '';
	var newTop = 0;
	var newLeft = 0;
	switch(which){
		case 1: //if you have enough
			imgPath = 'img/HappyFreddo.jpg';
			newTop = 300;
			newLeft = 120;			
			break;
		case 2: //if you dont earn enough
			imgPath = 'img/GrumpyFreddo.jpg';
			newTop = 300;
			newLeft = 70;
			break;
		default:
			imgPath = 'img/index.jpg';
			newTop = 300;
			newLeft = 0;
			break;
	}
	document.getElementById("image_cont").style.top = newTop+'px';
	document.getElementById("image_cont").style.left = newLeft+'px';
	document.getElementById("image").src = imgPath;
}

function updateTable() {
	var currCost = document.getElementById("cost").value;
	
	var fph1999 = freddosPerHour(document.getElementById("min1999").value, document.getElementById("cost1999").value);
	document.getElementById("fph1999").value = fph1999;
	
	var fph = freddosPerHour(document.getElementById("min").value, currCost);
	if (isNaN(fph)) {fph=0;}
	document.getElementById("fph").value = fph;
	
	var y1999 = Number(parseFloat(document.getElementById("y1999").value).toFixed(2));
	var year = Number(parseFloat(document.getElementById("year").value).toFixed(2));
	
	var nph = Number(parseFloat(fph1999*currCost));
	var str = "";
	//i want to specify another case, where fph in 1999 and in user-inputted year is the same
	if (isNaN(nph)) {
		str = "You have to put proper numbers in proper places.";
	} else {
		
		//if statements
		if (fph == fph1999) {
			str = "In <b>"+year+"</b>, earning <b>£"+document.getElementById("min").value+"</b> per hour, you can buy just as many Freddos per hour of labour as in year <b>"+y1999+"</b> (<b>"+fph1999+"</b> Freddos per hour)"; 
			updatePicture(1);
		} else if (fph > fph1999) {
			var howMany = fph-fph1999;
			str = "In <b>"+year+"</b>, earning <b>£"+document.getElementById("min").value+"</b> per hour, you can buy more Freddos per hour than in year <b>"+y1999+"</b> ("+howMany+" Freddos more)"; 
			updatePicture(1);
		} else {
			str = "To buy <b>"+fph1999+"</b> Freddos per hour of labour like in year <b>"+y1999+"</b>, in year <b>"+year+"</b> you would have to earn <b>£"+nph+"</b> per hour.";
			updatePicture(2);
		}
	}
	document.getElementById("jsOutput").innerHTML = str;
}