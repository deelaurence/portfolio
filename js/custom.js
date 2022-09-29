const timeDOM = document.querySelector(".clock")

const formatTime =()=>{
const currentTime = new Date()
const hours= currentTime.getHours()
const minutes= currentTime.getMinutes()
const seconds= currentTime.getSeconds()
const day= currentTime.getDay()
const weekdays=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
// console.log(seconds)

let newHour;
let newSeconds;
let newMinute
let amPm;

    hours>12?newHour=hours%12:newHour=hours
    hours>12?amPm="pm":amPm="am"
    seconds<10?newSeconds=`0${seconds}`:newSeconds=seconds
    minutes<10?newMinute=`0${minutes}`:newMinute=minutes
    const fullTime = `${weekdays[day]}/${newHour}:${newMinute}:${newSeconds} ${amPm}`
    
    timeDOM.textContent=fullTime
}

setInterval(() => {
    
    formatTime()
}, 1000);