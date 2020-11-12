//Code for Clock2 Program
function displayDate()
{
    now = new Date();
    localtime = now.toString();
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();
    document.getElementById("dateDisp").innerHTML = hours + ":" + mins + ":" + secs;
    
}