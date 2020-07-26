console.log('Alarm clock');


let button = document.getElementById('btn')
button.addEventListener('click',setAlarm);
var audio = new Audio('https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg')

function ringBell() {
    audio.play();
}

function setAlarm() {
    const alarm = document.getElementById('setTime');
    alarmDate = new Date(alarm.value);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
    

}

let input = document.getElementById('setTime').value;
let alarm_time = new Date();

function displayTime() {
    // console.log(time);
    let dateWithSecond = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute:'2-digit',second:'2-digit' });
    document.getElementById('time').innerHTML = dateWithSecond;
}
setInterval(displayTime, 1000);
