gsap.to(".marquee", {
  xPercent: -100, // Move the text left by 100% of its width
  ease: "none", // No easing for smooth movement
  repeat: -1, // Repeat infinitely
  duration: 30, // Adjust the speed as needed
  modifiers: {
    xPercent: gsap.utils.wrap(-100, 0), // Create an infinite loop
  },
});

// Debounce function to prevent rapid event firing
function debounce(func, wait = 80) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener(
  "wheel",
  debounce(function (event) {
    // Marquee-top: scroll down moves it left, scroll up moves it right
    if (event.deltaY > 0) {
      gsap.to(".marquee-top", {
        xPercent: -200,
        repeat: -1,
        duration: 4,
        ease: "none",
        overwrite: "auto", // Automatically overwrite any ongoing animations
        modifiers: {
          xPercent: gsap.utils.wrap(-200, 0), // Infinite loop
        },
      });
    } else {
      gsap.to(".marquee-top", {
        xPercent: 0,
        repeat: -1,
        duration: 4,
        ease: "none",
        overwrite: "auto",
        modifiers: {
          xPercent: gsap.utils.wrap(-200, 0), // Infinite loop
        },
      });
    }

    // Marquee-bottom: scroll down moves it right, scroll up moves it left
    if (event.deltaY > 0) {
      gsap.to(".marquee-bottom", {
        xPercent: 0,
        repeat: -1,
        duration: 4,
        ease: "none",
        overwrite: "auto",
        modifiers: {
          xPercent: gsap.utils.wrap(-200, 0), // Infinite loop
        },
      });
    } else {
      gsap.to(".marquee-bottom", {
        xPercent: -200,
        repeat: -1,
        duration: 4,
        ease: "none",
        overwrite: "auto",
        modifiers: {
          xPercent: gsap.utils.wrap(-200, 0), // Infinite loop
        },
      });
    }
  }, 100)
); // Debounce delay of 100ms to smooth scrolling

// Star rotation with debounce
window.addEventListener(
  "wheel",
  debounce(function (event) {
    if (event.deltaY > 0) {
      // Rotate right (clockwise)
      gsap.to(".stars", {
        rotate: 360, // Complete rotation
        repeat: -1, // Repeat infinitely
        duration: 4, // Adjust duration as needed
        ease: "none",
        overwrite: "auto", // Prevent animation stacking
      });
    } else {
      // Rotate left (counter-clockwise)
      gsap.to(".stars", {
        rotate: -360, // Complete rotation in the opposite direction
        repeat: -1, // Repeat infinitely
        duration: 4, // Adjust duration as needed
        ease: "none",
        overwrite: "auto",
      });
    }
  }, 100)
); // Debounce delay for smoother star rotation
