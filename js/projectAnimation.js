gsap.registerPlugin(ScrollTrigger);
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
