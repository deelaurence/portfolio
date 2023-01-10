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
    scale: 1.1,
    scrollTrigger: {
        trigger: ".tools",
        start: "top 30%",
        end: "+=300",
        // markers: true,
        scrub: 1,
        // pin: true,
        // anticipatePin: 3,
        pinSpacing: false
    },
});
gsap.to(".project-img2", {
    // yPercent: 8,
    scale: 1.1,
    // xPercent: -15,
    // rotate: "-2deg",
    scrollTrigger: {
        trigger: ".project-card2",
        start: "top 20%",
        end: "+=300",
        // markers: true,
        scrub: 1,
        // pin: true,
        // anticipatePin: 3,
        pinSpacing: false
    },
});

