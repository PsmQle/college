//js 8/10 by student nr 20005308
function countArea(a,b){
	return a*b
}
function isValid(x){
	var st = '';
	if (isNaN(x)) {
		st+='First input must be a number<br>';
	} else if (x < 0) {
		st+='First number must be positive.<br>';
	}
	return st;
}


function calcCarpet() {	
	var str = '';
	var err = '';
	var a = Number(parseFloat(document.getElementById("car_a").value).toFixed(2));
	var b = Number(parseFloat(document.getElementById("car_b").value).toFixed(2));
	
	//inputs validation
	err+=isValid(a);
	err+=isValid(b);
	
	if (err == '') { //error string is empty, no errors encountered
		str = "To cover room of dimentions <b>"+a+"</b> by <b>"+b+"</b>, you need <b>"+countArea(a,b)+" m<sup>2</sup></b> of carpet";
		document.getElementById("jsOutput").innerHTML = str;
	} else { //there is error, display it
		document.getElementById("jsOutput").innerHTML = '<span style="color:red;">'+err+'</span>';
	}
}
