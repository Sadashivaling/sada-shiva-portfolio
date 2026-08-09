// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// Active navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNav);


// Back to top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// Small reveal animation
const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .about-card, .education-card"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});
