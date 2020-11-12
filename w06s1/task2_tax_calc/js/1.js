//js 1/10 by student nr 20005308

var tmpString, taxable, tmpTaxable, tmpStr2, tmpTax;
var basic = parseInt(prompt("What is your basic income?"));
var bonus = parseInt(prompt("What is your bonus income?"));
var taxfree = parseInt(prompt("What is your tax-free allowance?"));

if (!basic) basic = 0;
if (!bonus) bonus = 0;
if (!taxfree) taxfree = 0;

taxable = basic+bonus-taxfree;

if (taxable < 0){
	taxable = 0;
	tmpStr2 = "You don't have any tax due.";
} else {
	tmpStr2 = "Your tax due is ";
}

//tax for first 40k is 25% (?)
if (taxable < 40000) {
	//if its less than 40k, calculate tax
	tmpTax = taxable * 0.25;
	tmpStr2 += "25% out of "+taxable+" is <b>"+tmpTax+"</b>.";	
	tmpTaxable = 0; //set temporary variable to 0 to stop processing rest of the amount
} else {
	//if there is more than 40k, remove 40k from taxable and keep processing
	tmpTaxable = taxable;
	tmpTax = 40000 * 0.25;
	tmpStr2 += "25% out of 40k is <b>"+tmpTax+"</b>,";
	tmpTaxable -= 40000 //remove 40k thats already taxed and keep calculating rest of amount
}
var taxTogether = tmpTax;
if (tmpTaxable > 0) { //if there is anything to tax at higher rate
	//anything above 40k is taxed at 40% (i believe)
	tmpTax = tmpTaxable * 0.4;
	taxTogether += tmpTax;
	tmpStr2 += " and  40% out of remaining "+tmpTaxable+" is <b>"+tmpTax+"</b>, which gives us total of <b>"+taxTogether+"</b> tax due.";
	
}

tmpStr = "Hello. With your basic income and bonus being "+basic+"+"+bonus+", your taxable income is "+taxable+".<br>"+tmpStr2;

var total = taxable-taxTogether;
tmpStr += "<br>Your net income is <b>"+total+"</b>, and your weekly net income is <b>"+parseFloat(total/52).toFixed(2)+"</b>";

document.getElementById("jsOutput").innerHTML = tmpStr;