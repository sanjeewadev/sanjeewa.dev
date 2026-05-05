// src/script/hero.js

document.addEventListener("DOMContentLoaded", () => {
  const dynamicTextElement = document.querySelector(".dynamic-word");
  const slides = document.querySelectorAll(".hero-slide");

  // The words that will be typed out
  const words = [
    "Creative Studios.",
    "Independent Artists.",
    "Enterprise Retail.",
    "Global Brands.",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isTypingPaused = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Remove a character
      dynamicTextElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add a character
      dynamicTextElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    // Speed settings
    let typeSpeed = isDeleting ? 50 : 100;

    // If word is fully typed
    if (!isDeleting && charIndex === currentWord.length) {
      isTypingPaused = true;
      typeSpeed = 2500; // Pause for 2.5 seconds to let the user read it
      isDeleting = true;
    }
    // If word is fully deleted
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to the next word
      wordIndex = (wordIndex + 1) % words.length;

      // SWAP THE BACKGROUND IMAGE
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[wordIndex].classList.add("active");

      typeSpeed = 500; // Pause briefly before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Start the loop if the element exists
  if (dynamicTextElement) {
    setTimeout(typeEffect, 1000); // Wait 1 second before starting the very first word
  }
});
