// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


// Small mouse movement effect for the background
const background = document.querySelector(".background-image");

document.addEventListener("mousemove", (event) => {

  if (window.innerWidth < 850) return;

  const x = (event.clientX / window.innerWidth - 0.5) * 8;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;

  background.style.transform =
    `scale(1.06) translate(${x}px, ${y}px)`;
});


// Highlight navigation item while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.style.color = "";

    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#ffffff";
    }

  });

});
