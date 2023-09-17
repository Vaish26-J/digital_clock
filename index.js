var today, hour, min, seconds, meridian;
var clock = document.querySelector("#clock");

function getTime(){
     today = new Date();
     hour = today.getHours();
     min = today.getMinutes();
     seconds = today.getSeconds();
     meridian = 'AM';
    if(hour>12){
        hour -= 12;
        meridian = 'PM';
    }else if(hour == 0){
        hour = 12;
        meridian = 'AM';
    }
    if(min < 10){
        min = '0' + min;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    if(hour < 10){
        hour = '0' + hour;
    }
}

function updateClock(){
    getTime();
    clock.innerHTML = hour + ":" + min + ":" + seconds + " " + meridian;
}

updateClock();
setInterval(updateClock, 1000)
