document.getElementById("vid0").play()
document.getElementById("vid1").play()
const timeDOM = document.querySelector(".clock")
const intro = document.querySelector(".intro-nav")
const about = document.querySelector(".about-nav")
const how = document.querySelector(".how-nav")
const projects = document.querySelector(".projects-nav")
const contact = document.querySelector(".contact-nav")
//\\**********************************************************//\\
//**********************************************************//\\
const introduction = document.querySelector(".alo-container")
const introduction2 = document.querySelector(".introduction")
const workProcess = document.querySelector(".services")
const spatzekCont = document.querySelector(".spatzek-ads-cont")


const html = document.documentElement;

intro.addEventListener('click',scr)
function scr() {
 introduction.scrollIntoView()
 console.log('hi')
} 
about.addEventListener('click',scr2)
function scr2() {
 introduction2.scrollIntoView()
 console.log('hi 2')
} 
how.addEventListener('click',scr3)
function scr3() {
 workProcess.scrollIntoView()
 console.log('hi 2')
} 
projects.addEventListener('click',scr4)
function scr4() {
 spatzekCont.scrollIntoView()
 console.log('hi 2')
} 


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

const isFirefox = navigator.userAgent.includes("Firefox")
console.log(isFirefox)
const grain = document.querySelectorAll(".svg")
const svg = document.querySelector("svg")
grain.forEach((singleGrain)=>{
    !isFirefox?singleGrain.style.display="block":singleGrain.style.display="none"
})
