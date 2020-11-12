//Code for Clock2 Program
function formatString(s)
{
	s+="";
	if (s.length == 1) {
		s = "0"+s;
	}
	return s;
}

function displayDate()
{
    now = new Date();
    localtime = now.toString();
    hours = formatString(now.getHours());
    mins = formatString(now.getMinutes());
    secs = formatString(now.getSeconds());
    document.getElementById("dateDisp").innerHTML = "In this very moment, the time is <b>" + hours + ":" + mins + ":" + secs + "</b>";
    
}