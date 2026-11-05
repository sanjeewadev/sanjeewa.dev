"use client";
import { useEffect } from "react";
export default function HomeInteractions() {
  useEffect(() => {
    const dynamicText = document.querySelector(".dynamic-word");
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const words = ["Service Businesses.", "Creative Studios.", "Boutique Brands."];
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
    const dots = Array.from(document.querySelectorAll(".review-dot"));
    const totalSlides = track ? track.children.length : 0;
    const mobileQuery = window.matchMedia("(max-width: 900px)");
    let currentIndex = 0;

    const updateSlider = () => {
      if (!track) return;
      if (mobileQuery.matches) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      } else {
        currentIndex = 0;
        track.style.transform = "";
      }
      dots.forEach((dot, index) => dot.classList.toggle("active", index === currentIndex));
    };

    const nextSlide = () => {
      if (!mobileQuery.matches || !totalSlides) return;
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    };

    const prevSlide = () => {
      if (!mobileQuery.matches || !totalSlides) return;
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    };

    const onDotClick = (event) => {
      if (!mobileQuery.matches) return;
      const index = Number(event.currentTarget.dataset.reviewIndex);
      if (Number.isInteger(index)) {
        currentIndex = index;
        updateSlider();
      }
    };

    const onViewportChange = () => updateSlider();

    next?.addEventListener("click", nextSlide);
    prev?.addEventListener("click", prevSlide);
    dots.forEach((dot) => dot.addEventListener("click", onDotClick));
    mobileQuery.addEventListener?.("change", onViewportChange);
    updateSlider();

    return () => {
      stopped = true;
      if (typingTimer) window.clearTimeout(typingTimer);
      next?.removeEventListener("click", nextSlide);
      prev?.removeEventListener("click", prevSlide);
      dots.forEach((dot) => dot.removeEventListener("click", onDotClick));
      mobileQuery.removeEventListener?.("change", onViewportChange);
    };
  }, []);
  return null;
}
