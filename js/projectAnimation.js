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

