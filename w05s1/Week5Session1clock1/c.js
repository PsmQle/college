    now = new Date();
    localtime = now.toString();
    
    document.write("<strong>Local time:</strong> " + localtime + "<br/>");
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();
    document.write("<h1>");
    document.write(hours + ":" + mins + ":" + secs);
    document.write("</h1>");