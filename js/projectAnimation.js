gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline()
// tl
// .from('project-card1',{yPercent:-100})
// // .from('project-card2',{yPercent:-100})
// .from('project-card2',{scale:2})

// ScrollTrigger.create({
//     animation:tl,
//     trigger:'.project-card1',
//     start:'top 30%',
//     end:'+=425',
//     scrub:3,
//     anticipatePin:1,
//     pin:true,
//     pinSpacing:false
// })


// gsap.from('.text-blockquoteMid',{
//     yPercent:50,
//     ease:"none",
//     duration:.8,
//     opacity:0,
// })
// gsap.from('.text-blockquote',{
//     yPercent:50,
//     duration:.5,
//     delay:.5,
//     opacity:0,
// })


// gsap.to('.project-card1', {
//     opacity: 0.3,
//     ScrollTrigger: {
//         trigger: '.project-card2',
//         start: 'top 70%',
//         end: '+=425',
//         scrub: 1,
//         markers: true,
//         anticipatePin: 1,
//         pin: true,
//         pinSpacing: false
//     }
// })
gsap.to(".project-card1", {

    scrollTrigger: {
        trigger: ".project-card1",
        start: "top 20%",
        end: "=+250",
        // markers: true,
        scrub: 1,
        pin: true,
        pinSpacing: false
    },
});

