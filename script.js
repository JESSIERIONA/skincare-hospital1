gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.timeline()
  .from(".hero-title", { y: 100, opacity: 0, duration: 1.2 })
  .from(".hero-sub", { y: 80, opacity: 0, duration: 1 }, "-=0.8")
  .from(".hero-btn", { opacity: 0, duration: 1 }, "-=0.6");

// SCROLL REVEALS
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

// PARALLAX
gsap.to(".parallax-img", {
  y: -100,
  scrollTrigger: {
    trigger: ".parallax-img",
    scrub: true
  }
});

// CARD STAGGER
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card-container",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});
