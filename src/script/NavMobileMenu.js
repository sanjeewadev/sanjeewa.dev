// Simple Native JS for Mobile Menu
const toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("active");
});
