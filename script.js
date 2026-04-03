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
