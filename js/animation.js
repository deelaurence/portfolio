gsap.registerPlugin(ScrollTrigger);

gsap.to(".preloader-backtext", {
  x: -1000,
  duration: 20,
  repeat: -1,
  yoyo:true,
  ease: "none",
});
gsap.to(".preloader-backtext2", {
  x: 1000,
  yoyo:true,
  duration: 30,
  repeat: -1,
  ease: "none",
});
let innerTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".big-p",
    start: "20% top",
    // scrub: 1,
    // markers: true,
  },
});
// innerTL

//   .from(".inner-deverence", {
//     width: 0,
//     duration: 2,
//     ease: "steps(12)",
//   })
//   .from(".inner-portfolio", {
//     x: -50,
//     duration: 2,
//     // repeat: -1,
//     // ease: Bounc,
//   });
let bigPTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".big-p",
    start: "20% top",
    scrub: 1,
    // markers: true,
  },
});
bigPTL.to(".big-p,.elongated-p", {
  xPercent: -50,
  rotate: "-30deg",
  color: "purple",
});

// gsap.to(".parent-header", {
//   yPercent: -100,
//   delay: 3,
//   duration: 2,
//   ease: Expo.easeInOut,
// });
// gsap.to(".A-website", {
//   yPercent: -100,
//   delay: 3,
//   duration: 2,
//   ease: Expo.easeInOut,
// });
// gsap.to(".A-website", {
//   yPercent: 100,
//   opacity: 1,
//   // delay: 3,
//   duration: 2,
//   ease: Expo.easeInOut,
// });


gsap.to(".shutter1", {
  xPercent: -100,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".shutter2",
    start: "center center",
    end: "bottom top",
  },
});
gsap.to(".shutter2", {
  xPercent: 100,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".shutter2",
    start: "center center",
    end: "bottom top",
  },
});
// gsap.from(".alo", {
//   xPercent: -100,
//   opacity: 0,
//   delay: 0.5,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".shutter2",
//     start: "center center",
//     end: "bottom top",
//   },
// });
gsap.from(".hello", {
  rotate: "10deg",
  yPercent: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".shutter2",
    start: "center center",
    end: "bottom top",
  },
});
gsap.from(".drop-dot", {
  y: -400,
  delay: 1.5,
  duration: 1,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".shutter2",
    start: "center center",
    end: "bottom top",
  },
});
gsap.from(".drop-letter", {
  y: -300,
  delay: 1,
  duration: 1.5,
  ease: "Bounce.easeOut",
  scrollTrigger: {
    trigger: ".shutter2",
    start: "center center",
    end: "bottom top",
  },
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-img-cont",
    start: "top 50%",
    end: "bottom 0%",
  },
});

tl3.from(".hero-img-bg", {
  height: "0px",
  duration: 0.5,
});
tl3.from(".hero-img", {
  opacity: "0",
  duration: 0.5,
});

tl3.from(".hero-img-pin", {
  opacity: "0",
  duration: 0.5,
  x: "-30px",
  y: "-20px",
});

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

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-img",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 1,
    // markers: true,
  },
});

gsap.to(".hero-img", {
  duration: 3,
  filter: "grayscale(100%)",
  scrollTrigger: {
    trigger: ".hero-img",
    start: "top 10%",
    end: "70% top",
    scrub: 1,
  },
});
gsap.to(".hero-img-bg", {
  opacity: "0",
  scrollTrigger: {
    trigger: ".hero-img",
    start: "top 10%",
    end: "bottom 30%",
    scrub: 1,
  },
});

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
    // markers: true,
    // scrub: 1,
    // toggleActions: "restart",
    // pin: true,
  },
});
// servicesTL.from(".spinner-cont", {
//   top: "-50px",
//   opacity: 0,
//   ease: "Bounce.easeOut",
//   duration: 1,
// });
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

// gsap
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".work-process",
//     start: "top center",
//     // end: "bottom top",
//     ease: "ease-in-out",
//     // scrub: 1,
//     toggleActions: "restart",
//     // pin: true,
//     // markers: true,
//     anticipatePin: 1,
//   },
// });
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
// let spatzekTL

let spatzekTLopen = gsap.timeline({
  scrollTrigger: {
    trigger: ".spatzek-cont",
    start: "25% 10%",
    end: "=+1500px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  },
});
spatzekTLopen
  .from(".spatzek", {
    opacity: 0,
    scale: 1.3,
    duration: 3,
  })

  .from(".spatzek-ads", {
    opacity: 0,
  })

  .from(".ideal-web-cont", {
    opacity: 0,
    duration: 5,
  })

  .to(".ideal-web-cont", {
    yPercent: -30,
    duration: 5,
  })
  .to(".ideal-web-cont", {
    opacity: 0,
    duration: 5,
  })
  .to(".spatzek-ads", {
    opacity: 0,
  })

  .to(".spatzek-p", {
    y: "-8vh",
    opacity: 1,
    duration: 5,
  })
  .to(".spatzek-p", {
    // y: "-8vh",
    opacity: 0,
    // duration: 5,
  })
  .to(".spatzek", {
    scale: 10,
    opacity: 0,
    duration: 10,
    y: "-1000",
    rotate: "-10deg",
  });

let bridgeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".bridge",
    start: "top 50%",
    end: "top 10%",
    scrub: 1,
    // pin: true,
  },
});

bridgeTL
  .from(".bridge", {
    opacity: 0,
    // duration: 1,
    // rotate: "-45deg",
  })

  .from(".boxes-container", {
    opacity: 0,
    // duration: 2,
    y: "100",
    rotate: "5deg",
  })
  .from(".contact-me", {
    opacity: 0,
  });

gsap.to(".marquee", {
  x: -2000,
  duration: 50,
  repeat: -1,
  yoyo:true,
  ease: "none",
});
// gsap.from(".hire-me", {
//   xPercent:-120 ,
//   scrollTrigger: {
//     trigger: ".hire-me",
//     start: "top center",
//     end: "bottom 30%",
//     scrub: true,
//   },
// });
gsap.to(".hire-me", {
  yPercent:-120 ,
  scrollTrigger: {
    trigger: ".hire-me",
    start: "top center",
    end: "bottom 30%",
    scrub: 2,
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
  y: "-300px",
  duration: 1,
  opacity: 0,
  ease: "Bounce.easeOut",
});

gsap.to(".call-me-cont", {
  xPercent: 100,
  scrollTrigger: {
    trigger: ".call-me-cont",
    start: "top top",
    scrub: 2,
  },
});

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
    end: "=+100px",
  }
  })

  gsap.from(".project-form", {
    yPercent: 100,
    opacity: 0,
    delay:.8,
    duration: 1.5,
    scrollTrigger: {
    trigger: ".got-a-project",
    start: "top 20%",
    end: "=+100px",
  }
  });
// let audio = document.querySelector("audio");
// // audio.play();
// let pianoTL = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".deverence",
//     start: "top 20%",
//     onEnter: playJazz,

//     // end: "=+100px",
//     // scrub: 5,
//     // toggleActions: "restart",
//     // pin: true,
//   },
// });
// function playJazz() {
//   audio.play();
//   console.log("play");
// }
// pianoTL.from(".about-me", {
//   yPercent: 100,
//   opacity: 0,
//   duration: 2,
// });
// pianoTL.from(".hobby", {
//   yPercent: 100,
//   opacity: 0,
//   duration: 2,
// });
