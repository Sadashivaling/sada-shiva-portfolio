// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("mobile-open");
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("mobile-open");
  });
});


// Active navigation link while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });

});
