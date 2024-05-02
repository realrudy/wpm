
// Timer code was used from Rahman Samadzade's github repo called Stopwatch_timer
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let timerRunning;

const sentences = [
"For the life of me, I can't figure out these outrageous new guidelines for fixing mistakes.",
"He had a vague sense that trees gave birth to dinosaurs.",
"A kangaroo is really just a rabbit on steroids.",
"Facing his greatest fear, he ate his first marshmallow.",
"You're unsure whether or not to trust him, but very thankful that you wore a turtle neck.",
"The knives were out and she was sharpening hers."


]

const sentence = sentences[Math.round(Math.random(0,6))];
const timer = document.getElementById('timer');

function startTimer(){
    startTime = Date.now() - elapsedTime
    timerRunning = true;
    timerInterval = setInterval( ()=> {
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

function WordCount(str) { 
    return str.split(" ").length;
  }

let wpm;



const sentenceP = document.getElementById("sentenceOutput");

sentenceP.innerText = sentence;
const usertyping = document.getElementById("usertyping");

window.onload = () => {

    
      document.addEventListener('contextmenu', event=> event.preventDefault()); 
      document.onkeydown = function(e) { 
      if(event.keyCode == 123) { 
      return false; 
      } 
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){ 
      return false; 
      } 
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){ 
      return false; 
      } 
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){ 
      return false; 
      } 
      } 


    
 usertyping.onpaste = e => e.preventDefault();

     document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
 });
 document.addEventListener('keydown', function(e) {
 if (event.keyCode == 123) {
  return false;
 }
 if (e.ctrlKey && e.shiftKey) {
  return false;
 }
 if (event.ctrlKey && event.keyCode == 85) {
  return false;
 }
});
    
}



usertyping.placeholder = sentence;
function check(){
    if(!timerRunning){
        startTimer();
    }
 
    console.log(usertyping.value);
    console.log(sentence);

    if(usertyping.value == sentence){
end(1);

    } 
else if (usertyping.value.length > sentence.length){
        end(0);
    }
function end(result){
  if(result == 1){
    usertyping.style.color = "#22bb33";
    usertyping.disabled = true;
stopTimer();
wpm = WordCount(sentence) / ((elapsedTime / 1000)/60) ;

sentenceP.innerText = 'WPM = '+Math.round(wpm)
  } else if (result == 0){
    usertyping.style.color = "red";
    usertyping.disabled = true;
stopTimer();

sentenceP.innerText = 'INVALID TEST';
  }
}
}

