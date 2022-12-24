gsap.registerPlugin(ScrollTrigger);

let bigPTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".big-p",
    start: "20% top",
    scrub: true,
  },
});
bigPTL.to(".big-p,.elongated-p", {
  xPercent: -10,
  rotate: "-10deg",
});
bigPTL.to(".dave", {
  xPercent: -30,
  // rotate: "-10deg",
});

gsap.from(".hello", {
  opacity:0,
  yPercent:20,
  // delay:0.5,
  // width:0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});

gsap.from(".drop-letter-0", {
  // opacity:0,
  yPercent:-120,
  transform:"skewX(45deg)",
  delay: 1.2,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
gsap.from(".drop-letter-D", {
  // opacity:0,
  yPercent:-120,
  transform:"skewY(45deg)",
  delay: 1,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
gsap.from(".drop-letter-U", {
  // opacity:0,
  yPercent:-120,
  transform:"skewX(45deg)",
  delay: 1.1,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
gsap.from(".drop-letter-N", {
  // opacity:0,
  yPercent:-120,
  scale:1.3,
  transform:"skewY(15deg)",
  delay: 1.5,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
gsap.from(".drop-letter-A", {
  // opacity:0,
  yPercent:-120,
  transform:"skewX(30deg)",
  delay: 1.1,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
gsap.from(".drop-letter-Y", {
  // opacity:0,
  yPercent:-120,
  transform:"skewX(45deg)",
  delay: .8,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
gsap.from(".drop-letter-O2", {
  // opacity:0,
  yPercent:-120,
  transform:"skewX(45deg)",
  delay: .9,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".hello",
    start: "bottom 80%",
    end: "bottom top",
  },
});
// gsap.from(".drop-letter", {
//   y: -300,
//   opacity:0,
//   delay: 1,
//   duration: 1.5,
//   ease: "Bounce.easeOut",
//   scrollTrigger: {
//     trigger: ".hello",
//     start: "bottom 80%",
//     end: "bottom top",
//   },
// });

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".alo-container",
    start: "30% top",
    end: "bottom top",
    scrub: 1,
    // markers: true,
  },
});

tl4.to(".alo", {
  x: "-100%",
  rotate: "10deg",
  opacity: 0,
});

let tlIcons = gsap.timeline({
  scrollTrigger: {
    trigger: ".alo",
    start: "top 20%",
    // scrub: 1,
    end: "bottom top",
    // toggleActions: "play reverse play reverse ", // scrub: 1,
  },
});
tlIcons.from(".twitter-icon", {
  y: "-50px",
  opacity: 0,
  backgroundColor: "transparent",
  duration: 0.5,
});
tlIcons.from(".linkedIn-icon", {
  y: "-50px",
  opacity: 0,
  backgroundColor: "transparent",
  duration: 0.5,
});
tlIcons.from(".github-icon", {
  y: "-50px",
  backgroundColor: "transparent",
  duration: 0.5,
  opacity: 0,
});

// let tl5 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".hero-img",
//     start: "top 10%",
//     end: "bottom 0%",
//     scrub: 1,
//     // markers: true,
//   },
// });

// gsap.to(".hero-img", {
//   duration: 3,
//   filter: "grayscale(100%)",
//   scrollTrigger: {
//     trigger: ".hero-img",
//     start: "top 10%",
//     end: "70% top",
//     scrub: 1,
//   },
// });
// gsap.to(".hero-img-bg", {
//   opacity: "0",
//   scrollTrigger: {
//     trigger: ".hero-img",
//     start: "top 10%",
//     end: "bottom 30%",
//     scrub: 1,
//   },
// });

let introTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    end: "top 30%",
  },
});

gsap.from(".intro", {
  y: "100%",
  duration: 1,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    end: "top 30%",
  }
});
gsap.from(".introH3-cont", {
  y: "100%",
  opacity:0,
  // width: 0,
  // ease: "steps(18)",
  duration: 1,
  // delay:2,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    end: "top 30%",
  }
});
gsap.from(".introH3-2", {
  y: "100%",
  duration: 1,
  delay:.5,
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    end: "top 30%",
  }
  
});
gsap.from(".intro-details", {
  opacity: 0,
  duration: 1,
  delay:1,
  y: "50%",
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    end: "top 30%",
  }
});
gsap.from(".explore", {
  opacity: 0,
  duration: 1,
  delay:2,
  // rotate:-45,
  // scale:3,
  y: "200%",
  scrollTrigger: {
    trigger: ".introduction",
    start: "top center",
    end: "top 30%",
  }
});

let servicesTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "top 30%",
  },
});
gsap.from(".spinner", {
  scale: 0.5,
  opacity: 0,
  ease: "Bounce.easeOut",
  duration: 2,
  scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "top 30%",
  },
});
gsap.from(".services-H3", {
  y: "100%",
  opacity:0,
  duration: 1,
  delay:.5,
  scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "top 30%",
  },
});
gsap.from(".services-p", {
  y: "120%",
  opacity:0,
  duration: 1,
  delay:.5,
  scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "top 30%",
  },
});
gsap.from(".services-details", {
  opacity: 0,
  duration: 1.2,
  delay:1,
  y:"30%",
    scrollTrigger: {
    trigger: ".services",
    start: "top center",
    end: "top 30%",
  }
});

let designTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".test-box",
    start: "top 10%",
    // end: "bottom top",
    end: "=+1500px",
    scrub: 1,
    pin: true,
    // markers: true,
    anticipatePin: 2,
  },
});
designTL
  .from(".work-process", {
    opacity: 0,
  })
  .from(".number-1", {
    opacity: 0.03,
    ease: "none",
  })
  .to(".research-vid", {
    opacity: 0.05,
  })
  .from(".create-c", {
    opacity: 0.03,
    ease: "none",
  })
  .from(".create-r", {
    opacity: 0.02,
    ease: "none",
  })
  .from(".create-e", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".create-a", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".create-t", {
    opacity: 0.04,
    ease: "none",
  })
  .from(".create-h", {
    opacity: 0.04,
    ease: "none",
  })
  .to(".research-vid", {
    opacity: "0",
  })
  .from(".scrub-text1", {
    opacity: 0,
    duration: 1,
    ease: "bounce.easeOut",
  })
  .to(".scrub-text1", {
    opacity: 0,
    duration: 1,
    ease: "bounce.easeOut",
  })
  .to(".design-vid", {
    opacity: "0.05",
  })
  .from(".number-2", {
    opacity: 0.05,
    ease: "none",
  })
  .from(".design-d", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".design-n", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".design-i", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".design-s", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".design-g", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".design-e", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".scrub-text2", {
    opacity: 0,
    duration: 1,
    ease: "bounce.easeOut",
  })
  .to(".scrub-text2", {
    opacity: 0,
    duration: 1,
    ease: "bounce.easeOut",
  })
  .to(".design-vid", {
    opacity: "0",
  })
  .from(".number-3", {
    opacity: 0.01,
    ease: "none",
  })
  .to(".code-vid", {
    opacity: "0.05",
  })
  .from(".code-c", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".code-d", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".code-o", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".code-e", {
    opacity: 0.01,
    ease: "none",
  })
  .from(".scrub-text3", {
    opacity: 0,
    duration: 1,
    ease: "bounce.easeOut",
  })
  .to(".scrub-text3", {
    opacity: 0,
    duration: 1,
    ease: "bounce.easeOut",
  })
  .to(".code-vid", {
    opacity: "0",
  });

let spatzekTLopen = gsap.timeline({
  scrollTrigger: {
    trigger: ".spatzek",
    start: "90% bottom",
    end: "=+2000px",
    scrub: true,
    pin: true,
    // anticipatePin: 1,
  },
});
spatzekTLopen
  .from(".spatzek", {
    opacity: 0,
    scale: 1.3,
    duration: 3,
  })
.to(".spatzek-ads2", {
    opacity: 0,
    duration:5,
  })
  .to(".spatzek-ads", {
    opacity: 0,
    duration:5,
  })

  .from(".ideal-web-cont", {
    opacity: 0,
    duration: 5,
  })

  .from(".ideal-web-cont", {
    yPercent: 30,
    duration: 20,
  })
  .to(".ideal-web-cont", {
    opacity: 0,
    duration: 5,
  })
  
  .to(".spatzek-ads", {
    opacity: 1,
  })
  .to(".spatzek-ads2", {
    opacity: 1,
  })
  // .to(".spatzek-ads", {
  //   opacity: 0,
  // })
.from(".tv-text-cont",{
  opacity:0
 })
  .from(".tv-text",{
    yPercent:100,
    duration:6,
  })
  .to(".tv-text",{
    yPercent:-100,
    duration:6,
  })
 .to(".tv-text-cont",{
  opacity:0
 })
 .to(".spatzek-ads2",{
  opacity:0
 })
  .to(".spatzek", {
    scale: 10,
    opacity: 0,
    duration: 30,
    y: "-1000",
    // rotate: "-10deg",
  })
  // .to(".spatzek", {
  //   // scale: 10,
  //   opacity: 0,
  //   // duration: 30,
  //   // y: "-1000",
  //   // rotate: "-10deg",
  // });
// let spatzekTLclose = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".tv-text",
//     start: "bottom 20%",
//     end: "=+2000px",
//     scrub: true,
//     markers:true,
//     // pin: true,
//     // anticipatePin: 1,
//   },
// });
// spatzekTLclose.to(".tv-text",{
//     xPercent:-10,
//     opacity:0,
//     duration:6,
//   })

let bridgeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".bridge",
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  },
});

bridgeTL
  .from(".bridge", {
    opacity: 0,
  })
  .from(".contact-me", {
    opacity: 0,
  })

  gsap.from(".html", {
    // opacity: 0,
    // duration: 2,
    yPercent: 300,
    rotate: "-305deg",
    scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    end: "top 10%",
    scrub: 3,
    // pin: true,
  }
  })
  gsap.from(".css", {
    // opacity: 0,
    // duration: 2,
    yPercent: 300,
    rotate: "-75deg",
    scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    end: "top 10%",
    scrub: 1,
    // pin: true,
  }
  })
  gsap.from(".tailwind", {
    // opacity: 0,
    // duration: 2,
    yPercent: 100,
    rotate: "-200deg",
    scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
    // pin: true,
  }
  })
  gsap.from(".git", {
    // opacity: 0,
    // duration: 2,
    yPercent: 300,
    rotate: "155deg",
    scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    end: "top 10%",
    scrub: 5,
    // pin: true,
  }
  })
  gsap.from(".nodejs", {
    // opacity: 0,
    // duration: 2,
    yPercent: 200,
    xPercent: 200,
    rotate: "550deg",
    scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    end: "bottom 10%",
    scrub: 1,
    // pin: true,
  }
  })
  gsap.from(".expressjs", {
    // opacity: 0,
    // duration: 2,
    yPercent: 300,
    xPercent:100,
    // scale:2,
    rotate: "55deg",
    scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    bottom: "top 10%",
    scrub: 1,
    // pin: true,
  }
  })
  gsap.from(".reactjs", {
    // opacity: 0,
    // duration: 2,
    xPercent: -200,
    rotate: "-155deg",
    scrollTrigger: {
    trigger: ".reactjs",
    start: "top bottom",
    end: "top 80%",
    scrub: 1,
    // pin: true,
  }
  })
  gsap.from(".mongodb", {
    // opacity: 0,
    // duration: 2,
    yPercent: 200,
    rotate: "55deg", 
    scrollTrigger: {
    trigger: ".reactjs",
    start: "top bottom",
    end: "top 80%",
    scrub: 1,
    // pin: true,
  }
  })
  


gsap.to(".marquee", {
  x: -2000,
  duration: 80,
  repeat: -1,
  // yoyo:true,
  ease: "none",
  scrollTrigger:{
    trigger:".marquee",
    start:"top bottom"
  }
});
gsap.from(".hire-me-direction-header", {
  yPercent:50 ,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger: ".hire-me",
    start: "top center",
  },
});
gsap.from(".hire-me-direction", {
  yPercent:50 ,
  opacity:0,
  duration:1.5,
  delay:.5,
  scrollTrigger: {
    trigger: ".hire-me",
    start: "top center",
  },
});
gsap.from(".hire-me-superpowers-header", {
  yPercent:50,
  opacity:0,
  duration:1,
  delay:1,
  scrollTrigger: {
    trigger: ".hire-me",
    start: "top center",
  },
});
gsap.from(".hire-me-superpowers", {
  yPercent:50 ,
  opacity:0,
  duration:1,
  delay:1.5,
  scrollTrigger: {
    trigger: ".hire-me",
    start: "top center",
  },
});

let contactmeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-me-h3",
    start: "top 60%",
    end: "=+100px",
  },
});
contactmeTL.from(".contact-me-h3", {
  rotate: "10deg",
  opacity: 0,
  yPercent: 100,
  duration: 1,
});
contactmeTL.from(".contact-a", {
  rotate: "4deg",
  yPercent: 200,
  opacity: 0,
  duration: 1,
});

let callmeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".call-me-cont",
    start: "bottom bottom",
  },
});
callmeTL.from(".call-me", {
  y: "-100px",
  duration: 1,
  opacity: 0,
  ease: "Bounce.easeOut",
});

// gsap.to(".call-me-cont", {
//   xPercent: 100,
//   scrollTrigger: {
//     trigger: ".call-me-cont",
//     start: "top top",
//     end:"center top",
//     scrub: 2,
//     // markers:true,
//   },
// });

let gotProjectTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".got-a-project",
    start: "top 20%", 
  },
});
gotProjectTL
  .from(".got-project", {
    xPercent: -100,
    opacity: 0,
    duration: 1,
  })

  gsap.from(".estimate-project", {
    opacity: 0,
    duration: 1,
    delay:.5,
    scrollTrigger: {
    trigger: ".got-a-project",
    start: "top 20%",
    // end: "=+100px",
  }
  })

  gsap.from(".project-form", {
    yPercent: 20,
    opacity: 0,
    delay:.8,
    duration: 1.5,
    scrollTrigger: {
    trigger: ".got-a-project",
    start: "top 20%",
    // end: "=+100px",
  }
  });
