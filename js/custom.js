document.getElementById("vid0").play()
document.getElementById("vid1").play()
const timeDOM = document.querySelector(".clock")
const intro = document.querySelector(".intro-nav")
// const how = document.querySelector(".how-nav")
const projects = document.querySelector(".projects-nav")
const contact = document.querySelector(".contact-nav")
//\\**********************************************************//\\
//**********************************************************//\\
const introduction = document.querySelector(".introducing")
// const workProcess = document.querySelector(".services")
const spatzekCont = document.querySelector(".scroll-project")
const spatzekCont2 = document.querySelector(".copyright")
const call = document.querySelector(".got-a-project")


const html = document.documentElement;

intro.addEventListener('click',scr)
function scr() {
 introduction.scrollIntoView()
} 
// how.addEventListener('click',scr3)
// function scr3() {
//  workProcess.scrollIntoView()
// } 
projects.addEventListener('click',scr4)
function scr4() {
    spatzekCont.scrollIntoView()
    
    setTimeout(() => {
        window.scrollBy(0,-500)
    }, 1000);
    console.log(html.scrollTop)
} 
contact.addEventListener('click',scr5)
function scr5() {
 call.scrollIntoView()
 
 setTimeout(() => {
     window.scrollBy(0,-100)
 }, 1500);
 console.log(html.scrollTop)
} 

window.addEventListener("scroll",()=>{

function elementInViewport(element) {
    let myElementHeight = element.offsetHeight;
    let myElementWidth = element.offsetWidth;
    let bounding = element.getBoundingClientRect();

    if (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

        let stringElement= JSON.stringify(element.classList)
        if(stringElement.includes('introducing')){
            console.log('intro in view');
            intro.classList.add('active')
            // how.classList.remove('active')
            projects.classList.remove('active')
            contact.classList.remove('active')
        }
        else if(stringElement.includes('services')){
            console.log('how in view');
            intro.classList.remove('active')
            // how.classList.add('active')
            projects.classList.remove('active')
            contact.classList.remove('active')
            
        }
        else if(stringElement.includes('scroll-project')){
            console.log('project in view');
            intro.classList.remove('active')
            // how.classList.remove('active')
            projects.classList.add('active')
            contact.classList.remove('active')
        }
        else if(stringElement.includes('got-a-project')){
            console.log('contact us in view');
            intro.classList.remove('active')
            // how.classList.remove('active')
            projects.classList.remove('active')
            contact.classList.add('active')
        }
    } else {

        console.log('Element is NOT in the viewport!');
    }
}
elementInViewport(introduction)
// elementInViewport(workProcess)
elementInViewport(spatzekCont)
elementInViewport(call)
})
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

const spinArrow=document.querySelector('.spin-arrow')
const spinArrowCont=document.querySelector('.spinner-cont')

images= ['yellowbg.jpeg','whitebg.jpg','laptopbg.jpg']

// function randomImages(){
    // }
    
    
    
    function manipulateImg(){
        // ranNum= Math.floor(Math.random()*3)
        let num=0
        let interval;
        interval=500
        spinArrowCont.addEventListener('mouseover',()=>{
            spinArrow.src=`images/Portfolioimg/laptopbg.jpg`
            
        })
        spinArrowCont.addEventListener('mouseleave',()=>{
            spinArrow.src=`images/Portfolioimg/whitebg.jpg`
            
        })
    //     setInterval(() => {
    //         num++
    //         if(num==3){
    //             num=0
    //         }
    //     spinArrow.src=`images/Portfolioimg/${images[num]}`
    //     console.log(interval)
    // }, interval);
    console.log(interval)
}
manipulateImg()
console.log(spinArrowCont)