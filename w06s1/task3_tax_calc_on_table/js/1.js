//js 6/10 by student nr 20005308

function updateTable() {
	var hourlyWage = parseFloat(document.getElementById("hourlyWage").value).toFixed(2);
	var OTRate = parseFloat(document.getElementById("OTRate").value).toFixed(2);
	//parseFloat(document.getElementById("OTHours").value).toFixed(2);

	if (!hourlyWage) hourlyWage = 10;
	if (!OTRate) OTRate = 1.5;
	
	var otHourly = hourlyWage*OTRate;
	document.getElementById("OTHourly").value = otHourly;
	
	//var grossPay = (hours*wage)+(othours*otwage)
	var hoursTotal = parseFloat(document.getElementById("hoursTotal").value).toFixed(2);
	if (!hoursTotal) hoursTotal = 40;
	var OtHours = parseFloat(document.getElementById("OTHours").value).toFixed(2);
	if (!OtHours) OtHours = 0;
	var grossPay = (hoursTotal*hourlyWage)+(OtHours*otHourly);
	document.getElementById("grossPay").value = grossPay;
	
	//var totalTaxes = (grosspay-otherDed)*taxrate;
	var taxRate = parseFloat(document.getElementById("taxRate").value).toFixed(2);
	if (!taxRate) taxRate = 0.25;
	var otherDed = parseFloat(document.getElementById("otherDed").value).toFixed(2);
	if (!otherDed) otherDed = 0;
	var totalTaxes = (grossPay-otherDed)*taxRate;
	document.getElementById("totalTax").value = totalTaxes;
	
	//paycheck = grosspay - taxes
	var paycheck = grossPay - parseFloat(totalTaxes);
	//alert(tmp);
	document.getElementById("paycheck").value = parseFloat(paycheck).toFixed(2);
}

//alert(otHourly);

//console.log(hourlyWage);
//document.getElementById("jsOutput").innerHTML = hourlyWage;