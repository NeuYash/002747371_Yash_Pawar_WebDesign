

var displayHr=0;
displayMins=0;
displaySecs=0;
var hr=0;
var secs=0;
var mins=0;
var timeoutId=null;
var check="stop";

function timer(){
  secs++;// to increment 
  if(secs/60==1){
    mins++;
    secs=0;
  if(mins/60==1){
    hr++;
    mins=0;
  }}
    if(secs<10){ displaySecs="0"+secs.toString(); }// 
    else{ displaySecs=secs.toString(); }
   if(mins<59){ displayMins="0"+mins.toString(); }
   else{ displayMins=mins.toString(); }
   if(hr<59){ displayHr="0"+hr.toString(); }
   else{ displayHr=hr.toString(); }
  document.getElementById("timer").innerHTML=displayHr+":"+displayMins+":"+displaySecs;
}

function startTimer(){
    if(check==="stop"){
        timeoutId=window.setInterval(timer,1000); 
        check="start";
    }else{
    window.clearInterval(timeoutId);
    document.getElementById("start").innerHTML="Start";
    check="stop";
}}

function resetTimer(){
    window.clearInterval(timeoutId);
    secs=0,mins=0,hr=0;
    document.getElementById("timer").innerHTML="00:00:00";
    document.getElementById("start").innerHTML="Start";
}

function stopTimer(){
    {
    window.clearInterval(timeoutId);
    check="stop";
}}