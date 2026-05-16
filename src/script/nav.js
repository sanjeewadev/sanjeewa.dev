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
      // Toggle the slide-in menu
      mobileMenu.classList.toggle("is-open");

      // Toggle the hamburger 'X' animation state
      nav.classList.toggle("menu-open");

      // Lock or unlock background scrolling
      document.body.classList.toggle("no-scroll");
    });

    // 3. CLOSE MENU WHEN A LINK IS CLICKED
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Reset everything back to default
        mobileMenu.classList.remove("is-open");
        nav.classList.remove("menu-open");
        document.body.classList.remove("no-scroll");
      });
    });
  }
});
