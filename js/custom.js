try {


    document.getElementById("vid0").play();
    document.getElementById("vid1").play();
    const timeDOM = document.querySelector(".clock");
    const intro = document.querySelector(".intro-nav");
    // const how = document.querySelector(".how-nav")
    const projects = document.querySelector(".projects-nav");
    const contact = document.querySelector(".contact-nav");
    //\\**********************************************************//\\
    //**********************************************************//\\
    const introduction = document.querySelector(".introducing");
    // const workProcess = document.querySelector(".services")
    const spatzekCont = document.querySelector(".scroll-project");
    // const spatzekCont2 = document.querySelector(".copyright")
    const call = document.querySelector(".got-a-project");


    // const html = document.documentElement;

    // intro.addEventListener('click', scr)
    // function scr() {
    //     introduction.scrollIntoView();
    // }

    // projects.addEventListener('click', scr4)
    // function scr4() {
    //     spatzekCont.scrollIntoView();
    //     let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
    //     window.onscroll = function () {
    //         let currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    //         console.log(previousPosition, currentPosition);
    //         if (previousPosition > currentPosition) {
    //             setTimeout(() => {
    //                 // spatzekCont.scrollIntoView()
    //                 window.scrollBy(0, 300)
    //             }, 1000);

    //             console.log('scrolling up');
    //             previousPosition = currentPosition;
    //             return;
    //         }

    //     }
    //     setTimeout(() => {
    //         window.scrollBy(0, -500);
    //     }, 1000);
    // }
    // contact.addEventListener('click', scr5);
    // function scr5() {
    //     call.scrollIntoView();

    //     setTimeout(() => {
    //         window.scrollBy(0, -100);
    //     }, 1500);
    //     console.log(html.scrollTop);
    // }

    // window.addEventListener("scroll", () => {

    //     function elementInViewport(element) {
    //         let myElementHeight = element.offsetHeight;
    //         let myElementWidth = element.offsetWidth;
    //         let bounding = element.getBoundingClientRect();

    //         if (bounding.top >= -myElementHeight
    //             && bounding.left >= -myElementWidth
    //             && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
    //             && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

    //             let stringElement = JSON.stringify(element.classList);
    //             if (stringElement.includes('introducing')) {
    //                 // console.log('intro in view');
    //                 intro.classList.add('active');
    //                 projects.classList.remove('active');
    //                 contact.classList.remove('active');
    //             }
    //             // else if (stringElement.includes('services')) {
    //             //     console.log('how in view');
    //             //     intro.classList.remove('active')
    //             //     projects.classList.remove('active')
    //             //     contact.classList.remove('active')

    //             // }
    //             else if (stringElement.includes('scroll-project')) {
    //                 // console.log('project in view')
    //                 intro.classList.remove('active');
    //                 projects.classList.add('active');
    //                 contact.classList.remove('active');
    //             }
    //             else if (stringElement.includes('got-a-project')) {
    //                 // console.log('contact us in view');
    //                 intro.classList.remove('active');
    //                 projects.classList.remove('active');
    //                 contact.classList.add('active');
    //             }
    //         } else {

    //             // console.log('Element is NOT in the viewport!');
    //         }
    //     }
    //     elementInViewport(introduction);
    //     elementInViewport(spatzekCont);
    //     elementInViewport(call);
    // })
    const formatTime = () => {
        const currentTime = new Date()
        const hours = currentTime.getHours()
        const minutes = currentTime.getMinutes()
        const seconds = currentTime.getSeconds()
        const day = currentTime.getDay()
        const weekdays = ["Sn", "Mn", "Tu", "Wd", "Th", "Fr", "St"]
        // console.log(seconds)

        let newHour;
        let newSeconds;
        let newMinute
        let amPm;

        hours > 12 ? newHour = hours % 12 : newHour = hours
        hours > 12 ? amPm = "pm" : amPm = "am"
        seconds < 10 ? newSeconds = `0${seconds}` : newSeconds = seconds
        minutes < 10 ? newMinute = `0${minutes}` : newMinute = minutes
        const fullTime = `${weekdays[day]}/${newHour}:${newMinute}:${newSeconds} ${amPm}`

        timeDOM.textContent = fullTime
    }

    setInterval(() => {

        formatTime()
    }, 1000);

    // const isFirefox = navigator.userAgent.includes("Firefox")
    // console.log(isFirefox)
    // const grain = document.querySelectorAll(".svg")
    // const svg = document.querySelector("svg")
    // grain.forEach((singleGrain) => {
    //     !isFirefox ? singleGrain.style.display = "block" : singleGrain.style.display = "none"
    // })
    let toggle = document.querySelector('.toggle')

    let change = true;
    toggle.addEventListener('click', () => {
        change = !change
        console.log("change");
        if (change) {
            let backGrounds = document.getElementsByClassName('bg-primaryBg')
            let backGrounds2 = document.getElementsByClassName('bg-secondaryBg')
            let text = document.getElementsByClassName('text-primaryText')
            let text2 = document.getElementsByClassName('text-secondaryText')
            let text3 = document.getElementsByClassName('text-blockquote')
            let text4 = document.getElementsByClassName('text-blockquoteMid')
            let text5 = document.getElementsByClassName('text-white')
            console.log(backGrounds)
            console.log(typeof backGrounds)
            for (let i = 0;
                i < backGrounds.length;
                i++) {
                // backGrounds[i].style.backgroundColor = "#103732"
                // backGrounds[i].style.backgroundColor = "#7e7e7e"
                backGrounds[i].style.backgroundColor = "#333647"
            }
            for (let i = 0;
                i < backGrounds2.length;
                i++) {
                // backGrounds2[i].style.backgroundColor = "#103732"
                // backGrounds2[i].style.backgroundColor = "#7e7e7e"
                backGrounds2[i].style.backgroundColor = "#252734"
            }
            // for (let i = 0;
            //     i < text.length;
            //     i++) {
            //     text[i].style.color = "#212121"
            // }
            // for (let i = 0;
            //     i < text2.length;
            //     i++) {
            //     text2[i].style.color = "#212121"
            // }
            // for (let i = 0;
            //     i < text3.length;
            //     i++) {
            //     text3[i].style.color = "#212121"
            // }
            // for (let i = 0;
            //     i < text4.length;
            //     i++) {
            //     text4[i].style.color = "#212121"
            // }

            // Array.prototype.forEach(backGrounds, (element) => {
            //     console.log(element);
            // });
        }
        else {
            let backGrounds = document.getElementsByClassName('bg-primaryBg')
            let backGrounds2 = document.getElementsByClassName('bg-secondaryBg')
            let text = document.getElementsByClassName('text-primaryText')
            let text2 = document.getElementsByClassName('text-secondaryText')
            let text3 = document.getElementsByClassName('text-blockquote')
            let text4 = document.getElementsByClassName('text-blockquoteMid')
            let text5 = document.getElementsByClassName('text-white')
            console.log(backGrounds)
            console.log(typeof backGrounds)
            for (let i = 0;
                i < backGrounds.length;
                i++) {
                // backGrounds[i].style.backgroundColor = "#103732"
                // backGrounds[i].style.backgroundColor = "#7e7e7e"
                backGrounds[i].style.backgroundColor = "#272727"
            }
            for (let i = 0;
                i < backGrounds2.length;
                i++) {
                // backGrounds2[i].style.backgroundColor = "#103732"
                // backGrounds2[i].style.backgroundColor = "#7e7e7e"
                backGrounds2[i].style.backgroundColor = "#212121"
            }
            // for (let i = 0;
            //     i < text.length;
            //     i++) {
            //     text[i].style.color = "#212121"
            // }
            // for (let i = 0;
            //     i < text2.length;
            //     i++) {
            //     text2[i].style.color = "#212121"
            // }
            // for (let i = 0;
            //     i < text3.length;
            //     i++) {
            //     text3[i].style.color = "#212121"
            // }
            // for (let i = 0;
            //     i < text4.length;
            //     i++) {
            //     text4[i].style.color = "#212121"
            // }

            // Array.prototype.forEach(backGrounds, (element) => {
            //     console.log(element);
            // });
        }
    })

} catch (error) {
    console.log(error)
}