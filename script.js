/* =========================================================
   SADA SHIVA PORTFOLIO
   Interactive behaviour
   ========================================================= */


/* =========================================================
   YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  if (scrollProgress) {
    scrollProgress.style.width = `${progress}%`;
  }
}

window.addEventListener(
  "scroll",
  updateScrollProgress,
  { passive: true }
);

updateScrollProgress();


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {
  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener(
  "scroll",
  updateNavbar,
  { passive: true }
);

updateNavbar();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navbar) {

  menuButton.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

    const isOpen =
      navbar.classList.contains("menu-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach((link) => {

  link.addEventListener("click", () => {

    if (navbar) {
      navbar.classList.remove("menu-open");
    }

  });

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navItems =
  document.querySelectorAll(".nav-link");

const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const id =
          entry.target.getAttribute("id");

        navItems.forEach((link) => {

          link.classList.remove("active");

          const href =
            link.getAttribute("href");

          if (href === `#${id}`) {
            link.classList.add("active");
          }

        });

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );


sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* =========================================================
   HERO CARD MOUSE MOVEMENT
   ========================================================= */

const heroVisual =
  document.querySelector(".hero-visual");

const heroCard =
  document.querySelector(".hero-card");


if (heroVisual && heroCard) {

  heroVisual.addEventListener(
    "mousemove",
    (event) => {

      /*
        Keep the effect subtle.
        It creates a premium interactive card
        without making the page distracting.
      */

      const rect =
        heroVisual.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -3;

      const rotateY =
        ((x - centerX) / centerX) * 3;

      heroCard.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
    }
  );


  heroVisual.addEventListener(
    "mouseleave",
    () => {

      heroCard.style.transform =
        "perspective(1000px) rotate(3deg)";

    }
  );

}


/* =========================================================
   PROJECT CARD TILT
   ========================================================= */

const projectCards =
  document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (event) => {

      if (window.innerWidth < 700) return;

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const rotateY =
        ((x / rect.width) - 0.5) * 2;

      const rotateX =
        ((y / rect.height) - 0.5) * -2;

      card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
    }
  );


  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform = "";

    }
  );

});


/* =========================================================
   SMOOTH INTERNAL LINKS
   ========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {

    anchor.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");

        if (!targetId || targetId === "#") {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursorGlow =
  document.createElement("div");

cursorGlow.className =
  "cursor-glow";

document.body.appendChild(cursorGlow);


let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener(
  "mousemove",
  (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

  }
);


function animateCursorGlow() {

  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  cursorGlow.style.transform =
    `translate3d(
      ${glowX - 120}px,
      ${glowY - 120}px,
      0
    )`;

  requestAnimationFrame(animateCursorGlow);
}

animateCursorGlow();


/* =========================================================
   KEYBOARD ESCAPE
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      if (navbar) {
        navbar.classList.remove("menu-open");
      }

    }

  }
);
