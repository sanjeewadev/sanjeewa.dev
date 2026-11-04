"use client";
import { useEffect } from "react";
export default function HomeInteractions() {
  useEffect(() => {
    const dynamicText = document.querySelector(".dynamic-word");
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const words = ["Creative Studios.", "Independent Artists.", "Premium Brands."];
    let wordIndex = 0, charIndex = 0, deleting = false, typingTimer, stopped = false;
    const typeEffect = () => {
      if (stopped || !dynamicText) return;
      const currentWord = words[wordIndex];
      if (deleting) { dynamicText.textContent = currentWord.substring(0, charIndex - 1); charIndex -= 1; }
      else { dynamicText.textContent = currentWord.substring(0, charIndex + 1); charIndex += 1; }
      let delay = deleting ? 50 : 100;
      if (!deleting && charIndex === currentWord.length) { deleting = true; delay = 2500; }
      else if (deleting && charIndex === 0) {
        deleting = false; wordIndex = (wordIndex + 1) % words.length;
        slides.forEach((slide) => slide.classList.remove("active"));
        if (slides.length) slides[wordIndex % slides.length].classList.add("active");
        delay = 500;
      }
      typingTimer = window.setTimeout(typeEffect, delay);
    };
    if (dynamicText) typingTimer = window.setTimeout(typeEffect, 1000);

    const track = document.getElementById("reviewsTrack");
    const prev = document.querySelector(".prev-arrow");
    const next = document.querySelector(".next-arrow");
    const totalSlides = track ? track.children.length : 0;
    let currentIndex = 0, autoplay;
    const updateSlider = () => { if (track) track.style.transform = `translateX(-${currentIndex * 100}%)`; };
    const nextSlide = () => { if (totalSlides) { currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); } };
    const prevSlide = () => { if (totalSlides) { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateSlider(); } };
    const restart = () => { if (autoplay) window.clearInterval(autoplay); if (totalSlides > 1) autoplay = window.setInterval(nextSlide, 5000); };
    const onNext = () => { nextSlide(); restart(); };
    const onPrev = () => { prevSlide(); restart(); };
    next?.addEventListener("click", onNext); prev?.addEventListener("click", onPrev); restart();
    return () => { stopped = true; if (typingTimer) window.clearTimeout(typingTimer); if (autoplay) window.clearInterval(autoplay); next?.removeEventListener("click", onNext); prev?.removeEventListener("click", onPrev); };
  }, []);
  return null;
}
