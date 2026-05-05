// src/script/scroll.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Find all elements with the fade-up class
  const fadeElements = document.querySelectorAll(".scroll-fade-up");

  // 2. Create the observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the element enters the screen
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Stop observing once it has animated so it doesn't repeat
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05, // Triggers when 10% of the element is visible
      rootMargin: "0px 0px -20px 0px", // Triggers slightly before it hits the bottom of the screen
    },
  );

  // 3. Attach the observer to the elements
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});
