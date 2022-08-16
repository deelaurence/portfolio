gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-img",
    start: "10% top",
    end: "bottom 30%",
    scrub: 1,
  },
});
tl.from(".logo", {
  //   y: "-50vh",
  letterSpacing: "1rem",
  duration: 1,
  borderRight: "solid 1px white",
});
tl.from(".text", {
  x: "-50vh",
  scale: 2,
  //   fontSize: "6rem",
  duration: 1,
});
gsap.to(".header-img", {
  //   x: "-50vh",
  scale: 2,
  filter: "grayscale(100%)",
  //   fontSize: "6rem",
  duration: 1,
  scrollTrigger: {
    trigger: ".header-img",
    start: "20% top",
    end: "bottom top",
    scrub: 1,
  },
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-img",
    start: "bottom center",
    end: "bottom 30%",
    scrub: 3,
    // pin: true,
    // toggleActions: "play reverse play reverse",
  },
});
tl3.from(".shutter1", {
  y: "20px",
  duration: 1,

  //   fontSize: "6rem",
});
tl3.from(".shutter2", {
  x: "0px",
  duration: 1,
  //   fontSize: "6rem",
});
tl3.from(".alo-underline", {
  //   x: "-50vh",
  width: "100%",
  //   fontSize: "6rem",
  duration: 0.5,
});
tl3.from(".hero-img-bg", {
  //   x: "-50vh",
  height: "0px",
  //   fontSize: "6rem",
  duration: 0.5,
  delay: 1,
});
tl3.from(".hero-img", {
  //   x: "-50vh",
  filter: "blur(6px)",
  opacity: "0",
  //   transform: "translateY(-120%)",
  //   fontSize: "6rem",
  duration: 0.5,
  delay: 1,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-img",
    start: "10% top",
    end: "30% top",
    scrub: 1,
  },
});

tl2.from(".header", {
  backgroundColor: "pink",
});
//<!-- translate-y-[-150px] text-[6rem] -->

// slideshow

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".alo",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 1,
    // markers: true,
  },
});

tl4.to(".alo", {
  transform: "translateY(-100%)",
  duration: 3,
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-img",
    start: "top 10%",
    end: "bottom 0%",
    scrub: 1,
    markers: true,
  },
});

tl5.to(".hero-img", {
  transform: "translateX(-100%)",
  duration: 3,
});
tl5.to(".hero-img-cont", {
  transform: "translateX(100%)",
  duration: 3,
});

// gsap.set(".massiveImage", {
//   backgroundImage: `url(https://source.unsplash.com/random/${
//     innerWidth * 3
//   }x${innerHeight})`,
// });

// gsap.to(".massiveImage", {
//   xPercent: -100,
//   x: () => innerWidth,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".massiveImage",
//     start: "top top",
//     end: () => innerWidth * 3,
//     scrub: true,
//     pin: true,
//     invalidateOnRefresh: true,
//     anticipatePin: 1,
//   },
// });

gsap.to(".test-box", {
  x: -2000,
  duration: 8,
  scrollTrigger: {
    trigger: ".test-box",
    start: "top top",
    end: "bottom top",
    scrub: 7,
    toggleActions: "restart",
    pin: true,
  },
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}
