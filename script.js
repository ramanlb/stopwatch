let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let ResetBtn = document.getElementById('reset');
let saveBtn = document.getElementById('save');
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;
var stoparr = []
// let [hour,minute,second,count]=[00, 00,00,00];
startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});


stopBtn.addEventListener('click', function () {
    timer = false;
});

ResetBtn.addEventListener('click', function () {
    hour = 00;
    minute = 00;
    second = 00;
    count = 00;
    document.getElementById('hr').innerHTML = "00"+" :"; document.getElementById('min').innerHTML = "00"+" :"; document.getElementById('sec').innerHTML = "00"+" :"; document.getElementById('count').innerHTML = "00";
});

function stopWatch(){
  if(timer){
    count++;
    if(count == 100){
      second++;
      count =00;
    }
     if(second == 60){
       minute++;
       second = 00;   
     }
    if(minute == 60){
      hour++;
      minute=00;
      second = 00;
    }
    
    let hours = hour < 10 ?  "0" + hour : hour;
    let minutes = minute < 10 ? "0" + minute : minute;
    let seconds = second < 10 ? "0" + second : second;
    let counts = count < 10 ? "0" + count : count;
    
      document.getElementById('hr').innerHTML =  hours + " :";
        document.getElementById('min').innerHTML = minutes+ " :";
        document.getElementById('sec').innerHTML = seconds+ " :";
        document.getElementById('count').innerHTML = counts;
        setTimeout(stopWatch, 10);
    }
}