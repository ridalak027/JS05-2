
function showtime(){  
    
    const d = new Date();
    var s = d.getSeconds();
    var m = d.setMinutes();
    var h = d.getHours();

    m = (m < 10)? "0" + m : m; 

    document.getElementById("sec").innerHTML = s; 
    document.getElementById("min").innerHTML = m;
    document.getElementById("hour").innerHTML = h;
    
}

setTimeout(showtime , 1000);
