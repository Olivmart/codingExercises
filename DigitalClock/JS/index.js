let page = document.getElementById("clock")

setInterval(function(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if(hour<10)
        hour += "0"
    if(min<10)
        min += "0"
    if(seconds<10)
        seconds += "0"

let time = `${hour}:${min}:${seconds}`
document.getElementById("clock").innerText = time;
})