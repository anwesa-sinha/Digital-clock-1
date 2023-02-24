function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var session = document.getElementById('session');

    var dname = dateTime.getDay();
    var mo = dateTime.getMonth();
    var dnum = dateTime.getDate();
    var yr = dateTime.getFullYear();

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs -12;
    }
 
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}

setInterval(displayTime, 10);