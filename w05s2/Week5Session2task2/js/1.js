//js 1/10 by student nr 20005308

var forename, surname, age, mood, height, tmpString, minHeight, tmpHeight;
var input = prompt("What is your height?");

forename = "Piotr";
surname = "Jurgiel";
age = 26;
mood = "bit sleepy";
height = 195.4;

//surename firstname age mood height (concatenation)
//write out "Hello (name), you are (age) years old, you're (mood) and yuor height is (height)."

//document.getElementById("jsOutput").innerHTML = "Is it working?";
//document.getElementById("jsOutput").innerHTML = "Hello "+forename+" "+surname+". You are "+age+" years old, you're "+mood+", and your height is "+height;


//create var that stores min height (17 in), compare user height and then display bigger one

minHeight = 100.20
if (input > minHeight) {
	tmpHeight = input;
} else {
	tmpHeight = minHeight;
}

tmpStr = "Hello "+forename+" "+surname+". You are "+age+" years old, you're "+mood+", and your height is "+tmpHeight;

document.getElementById("jsOutput").innerHTML = tmpStr;