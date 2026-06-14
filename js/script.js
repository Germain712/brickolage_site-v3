// ===============================
// Mobile Navigation Toggle
// ===============================

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

// Toggle menu open/close
navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;

  navToggle.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("show");
});

// ===============================
// Close menu when clicking a link
// ===============================

document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===============================
// Close menu when clicking outside
// ===============================

document.addEventListener("click", (event) => {
  const isClickInside =
    navMenu.contains(event.target) || navToggle.contains(event.target);

  if (!isClickInside) {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ===============================
// Close menu with Escape key
// ===============================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// ===============================
// Auto-close on window resize
// (prevents stuck menu when resizing)
// ===============================

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  }
});
