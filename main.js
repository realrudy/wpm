// Timer code was used from Rahman Samadzade's github repo called Stopwatch_timer
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let timerRunning;
const sentence = 'a quick brown fox jumped over the lazy dog';


function startTimer(){
    startTime = Date.now() - elapsedTime
    timerRunning = true;
    timerInterval = setInterval( ()=> {
        elapsedTime = Date.now() - startTime 
        console.log(formatTimer(elapsedTime))
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

function WordCount(str) { 
    return str.split(" ").length;
  }

let wpm;



const sentenceP = document.getElementById("sentenceOutput");

sentenceP.innerText = sentence;
const usertyping = document.getElementById("usertyping");

function check(){
    if(!timerRunning){
        startTimer();
    }
    
    console.log(usertyping.value);
    if(usertyping.value == sentence){
    stopTimer();
    wpm = WordCount(sentence) / (elapsedTime * 60000) ;

        sentenceP.innerText = 'Typing duration = '+formatTimer(elapsedTime);
        
    }


}