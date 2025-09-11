let seconds = 0;
let interval = null;

const time = document.getElementById("time");

function padStart(value) {
    return String(value).padStart(2, '0');
}
function setTime(){
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    time.innerHTML = `${padStart(min)}:${padStart(sec)}`;
}

function timer() {
    seconds++;
    setTime();
}

function start() {
    if (interval) stop()
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
     stop();           
    seconds = 0;      
    setTime();  
}