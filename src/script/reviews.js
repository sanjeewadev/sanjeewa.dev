// src/script/reviews.js

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("reviewsTrack");
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");

  const totalSlides = 2;
  let currentIndex = 0;
  let autoPlayTimer;

  if (!track) return;

  // The function that physically moves the track
  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Move to next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  // Move to previous slide
  function prevSlide() {
    // Adding totalSlides prevents negative numbers when going backward from 0
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Start the automatic sliding
  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 5000); // 5 seconds
  }

  // Reset the timer (used when a user manually clicks an arrow)
  function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    startAutoPlay();
  }

  // --- Event Listeners for Manual Arrows ---
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay(); // Pause timer so it doesn't interrupt the user
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay(); // Pause timer so it doesn't interrupt the user
    });
  }

  // Start the auto-play when the page loads
  startAutoPlay();
});
