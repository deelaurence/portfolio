gsap.registerPlugin(ScrollTrigger);

gsap.to(".project-card1", {

    scrollTrigger: {
        trigger: ".project-card1",
        start: "top 20%",
        end: "bottom 20%",
        // markers: true,
        scrub: 1,
        pin: true,
        // anticipatePin: 3,
        pinSpacing: false
    },
});

gsap.to(".project-img1", {
    yPercent: -30,
    rotate: "3deg",
    scrollTrigger: {
        trigger: ".project-card1",
        start: "top 20%",
        end: "bottom 20%",
        // markers: true,
        scrub: 1,
        // pin: true,
        // anticipatePin: 3,
        pinSpacing: false
    },
});
gsap.to(".project-img2", {
    yPercent: -10,
    // rotate: "6deg",
    scale: 1.2,
    scrollTrigger: {
        trigger: ".project-img2",
        start: "top 20%",
        end: "bottom top",
        // markers: true,
        scrub: 1,
        // pin: true,
        // anticipatePin: 3,
        pinSpacing: false
    },
});

