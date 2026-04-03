const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const menuLinks = Array.from(document.querySelectorAll(".menu a"));
const sections = menuLinks
  .map((link) => {
    const id = link.getAttribute("href");
    return id ? document.querySelector(id) : null;
  })
  .filter(Boolean);

function setActiveLink() {
  const marker = window.scrollY + 120;
  let currentId = "#home";

  sections.forEach((section) => {
    if (section && section.offsetTop <= marker) {
      currentId = `#${section.id}`;
    }
  });

  menuLinks.forEach((link) => {
    const active = link.getAttribute("href") === currentId;
    link.classList.toggle("is-active", active);
  });
}

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("load", setActiveLink);

// Scroll reveal animation for sections + hero
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(() => {
          entry.target.classList.add("reveal-visible");
          entry.target.classList.remove("reveal-hidden");
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

const revealTargets = document.querySelectorAll(
  "section, .hero, .card, .about-card, .testimonial-card, .hours-card, .contact-card"
);

revealTargets.forEach((target, index) => {
  target.classList.add("reveal-hidden");
  target.style.transitionDelay = `${Math.min(index * 120, 200)}ms`;
  revealObserver.observe(target);
});

if (!window.IntersectionObserver) {
  revealTargets.forEach((target) => {
    target.classList.add("reveal-visible");
    target.classList.remove("reveal-hidden");
  });
}
