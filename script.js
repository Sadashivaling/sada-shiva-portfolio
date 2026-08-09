/* =========================================
   PORTFOLIO INTERACTIONS
========================================= */


/* -----------------------------------------
   SCROLL PROGRESS
----------------------------------------- */

const progressBar =
  document.querySelector(".scroll-progress");

function updateScrollProgress() {
  const scrollTop =
    window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  progressBar.style.width =
    `${progress}%`;
}

window.addEventListener(
  "scroll",
  updateScrollProgress,
  { passive: true }
);

updateScrollProgress();


/* -----------------------------------------
   SCROLL REVEAL
----------------------------------------- */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );
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


/* -----------------------------------------
   MOBILE MENU
----------------------------------------- */

const menuButton =
  document.querySelector(".menu-button");

const mobileMenu =
  document.querySelector(".mobile-menu");

menuButton.addEventListener(
  "click",
  () => {

    mobileMenu.classList.toggle(
      "open"
    );

  }
);


const mobileLinks =
  document.querySelectorAll(
    ".mobile-menu a"
  );

mobileLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove(
        "open"
      );

    }
  );

});


/* -----------------------------------------
   ACTIVE NAVIGATION
----------------------------------------- */

const sections =
  document.querySelectorAll(
    "section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".nav-link"
  );

const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const id =
            entry.target.getAttribute(
              "id"
            );

          navLinks.forEach((link) => {

            link.classList.remove(
              "active"
            );

            if (
              link.getAttribute(
                "href"
              ) === `#${id}`
            ) {
              link.classList.add(
                "active"
              );
            }

          });

        }

      });

    },
    {
      threshold: 0.35
    }
  );

sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* -----------------------------------------
   BACK TO TOP
----------------------------------------- */

const floatingTop =
  document.querySelector(
    ".floating-top"
  );

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 600) {

      floatingTop.classList.add(
        "show"
      );

    } else {

      floatingTop.classList.remove(
        "show"
      );

    }

  },
  { passive: true }
);

floatingTop.addEventListener(
  "click",
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* -----------------------------------------
   YEAR
----------------------------------------- */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();


/* -----------------------------------------
   BUTTON MAGNETIC EFFECT
----------------------------------------- */

const magneticButtons =
  document.querySelectorAll(
    ".button, .contact-button"
  );

magneticButtons.forEach((button) => {

  button.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        button.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left -
        rect.width / 2;

      const y =
        event.clientY -
        rect.top -
        rect.height / 2;

      button.style.transform =
        `translate(${x * 0.08}px, ${y * 0.08}px)`;

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.transform =
        "";

    }
  );

});


/* -----------------------------------------
   HERO PARALLAX
----------------------------------------- */

const heroBackground =
  document.querySelector(
    ".hero-background"
  );

window.addEventListener(
  "scroll",
  () => {

    if (
      !heroBackground ||
      window.innerWidth < 700
    ) {
      return;
    }

    const scroll =
      window.scrollY;

    if (scroll < window.innerHeight) {

      heroBackground.style.transform =
        `scale(1.08) translateY(${scroll * 0.12}px)`;

    }

  },
  { passive: true }
);


/* -----------------------------------------
   3D CARD TILT
----------------------------------------- */

const cards =
  document.querySelectorAll(
    ".skill-card, .stat-card"
  );

cards.forEach((card) => {

  card.addEventListener(
    "mousemove",
    (event) => {

      if (window.innerWidth < 800) {
        return;
      }

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left;

      const y =
        event.clientY -
        rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (y - centerY) /
        18;

      const rotateY =
        (centerX - x) /
        18;

      card.style.transform =
        `perspective(700px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        "";

    }
  );

});


/* -----------------------------------------
   RANDOM FLOATING PARTICLES
----------------------------------------- */

const hero =
  document.querySelector(".hero");

function createParticle() {

  const particle =
    document.createElement("span");

  particle.style.position =
    "absolute";

  particle.style.width =
    `${Math.random() * 3 + 1}px`;

  particle.style.height =
    particle.style.width;

  particle.style.borderRadius =
    "50%";

  particle.style.background =
    "rgba(150,190,255,0.55)";

  particle.style.boxShadow =
    "0 0 12px rgba(100,160,255,0.6)";

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.top =
    `${Math.random() * 100}%`;

  particle.style.pointerEvents =
    "none";

  particle.style.zIndex =
    "-1";

  particle.animate(
    [
      {
        transform:
          "translateY(0) scale(1)",
        opacity: 0
      },
      {
        transform:
          `translateY(-${Math.random() * 120 + 50}px) scale(1.4)`,
        opacity: 0.8
      },
      {
        transform:
          `translateY(-${Math.random() * 200 + 100}px) scale(0.4)`,
        opacity: 0
      }
    ],
    {
      duration:
        Math.random() * 5000 + 5000,

      iterations: Infinity,

      delay:
        Math.random() * -6000,

      easing:
        "ease-in-out"
    }
  );

  hero.appendChild(
    particle
  );
}


for (let i = 0; i < 28; i++) {
  createParticle();
}


/* -----------------------------------------
   SMOOTH ANCHOR FALLBACK
----------------------------------------- */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        const targetId =
          link.getAttribute(
            "href"
          );

        if (
          targetId === "#" ||
          !targetId
        ) {
          return;
        }

        const target =
          document.querySelector(
            targetId
          );

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


/* -----------------------------------------
   INITIAL PAGE LOAD
----------------------------------------- */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

  }
);
