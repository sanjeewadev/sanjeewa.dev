document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!nav) return;

  // 1. SCROLL LOGIC (Glassmorphism)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  // 2. MOBILE MENU TOGGLE LOGIC
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
      nav.classList.toggle("menu-open"); // Used to force dark text when menu is open at the top

      // Optional: Animate the hamburger to an 'X'
      const icon = mobileToggle.querySelector(".menu-icon");
      if (mobileMenu.classList.contains("is-open")) {
        icon.innerHTML = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;
      } else {
        icon.innerHTML = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
      }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        nav.classList.remove("menu-open");
        mobileToggle.querySelector(".menu-icon").innerHTML =
          `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
      });
    });
  }
});
