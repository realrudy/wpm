// Timer code was used from Rahman Samadzade's github repo called Stopwatch_timer
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let timerRunning;
let anticheatnum = 0;


const cpsOutput = document.getElementById('cpsOutput');
const timer = document.getElementById('timer');

function startTimer(){
    startTime = Date.now() - elapsedTime
    timerRunning = 'started';
    timerInterval = setInterval( ()=> {
        function antiCheat(){
            anticheatnum++;
            console.log('nuh uh '+anticheatnum);
        }
        antiCheat();
        elapsedTime = Date.now() - startTime 
        timer.innerText = formatTimer(elapsedTime);

        // console.log(formatTimer(elapsedTime))
    }, 10)


}

function stopTimer(){
    clearInterval(timerInterval);
}

function formatTimer(elapsedTime){
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const mseconds = Math.floor((elapsedTime % 1000) / 10);
    return (
       
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
        (mseconds > 9 ? mseconds : "0" + mseconds));
}

 




var disableClicker;

var clicks = 0;
function clickPressed(){
  
if(!timerRunning){
startTimer();
} else {
    if(disableClicker) return;
    clicks++;
cpsOutput.innerText = clicks + ' clicks';
    console.log(clicks)
}

if(Math.floor((elapsedTime % (1000 * 60)) / 1000) >= 5){
    stopTimer();
    if(clicks/5 >= 6){
            cpsOutput.innerText = 'CPS = '+ clicks/5 + ' (above average)';
        cpsOutput.style.color = "green";
    } else {
             cpsOutput.innerText = 'CPS = '+ clicks/5 + ' (below average)';
        cpsOutput.style.color = "red";
    }
disableClicker = true;
}

}
