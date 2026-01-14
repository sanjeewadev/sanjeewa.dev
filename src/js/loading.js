document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loading-page-section");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden");
    }
  }, 5500);
});
