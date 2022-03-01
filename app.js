// gsap.fromTo()
// gsap.fromTo(".text", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

// working with timeline
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

// first parameter is the element you want to give animation
// second is from
// third is to
// and the fourth is optional '<' means it will execute at the same time with the previous animation
// '<50%' means it will execute after the previous version is 50% executed
// browse for gsapp ease for further information
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
tl.fromTo(
  ".cookie",
  { x: -50, opacity: 0, rotation: "-45deg" },
  { x: 0, opacity: 1, rotation: "0deg" },
  "<50%"
);
tl.fromTo(".text", { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "<");

// Cookie Jump
tl.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: 10, rotation: "-20deg", yoyo: true, repeat: -1 }
);
tl.fromTo("#crumbs", { y: 0 }, { y: -10, yoyo: true, repeat: -1 }, "<");

const button = document.querySelector("button");
const cookieContainer = document.querySelector(".cookie-container");

// Fading cookie container
button.addEventListener("click", async () => {
  await gsap.to(".cookie-container", { opacity: 0, y: 30, duration: 1 });
  cookieContainer.style.display = "none";
});
