target = document.getElementById('clicker');

target.style.width = '75px';
target.style.height = '75px';
var clicks = 0;
var clickOutput = document.getElementById('clickOutput');
var timerRunning;
var startTime;
var elapsedTime = 0;

function moveTarget() {
    if(!timerRunning){
        startTimer();
    }
    let randY = Math.floor((Math.random() * 300) + 1);
    let randX = Math.floor((Math.random() * 400) + 1);
    target.style.transform = `translate(${randX}px, ${randY}px)`;
    clicks++;
    clickOutput.innerText = clicks+' targets clicked.'
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    if(clicks >= 15 ){
        stopTimer();
        target.style.display = 'none';
        clickOutput.innerText = 'Your click time per target is '+seconds/clicks+'s'
    }

}



function startTimer(){
    startTime = Date.now() - elapsedTime
    timerRunning = true;
    timerInterval = setInterval( ()=> {
        elapsedTime = Date.now() - startTime 

    }, 10)


}

function stopTimer(){
    clearInterval(timerInterval);
}
