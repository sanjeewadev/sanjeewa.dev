"use client";
import { useEffect } from "react";
export default function FaqInteractions() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".faq-item"));
    const cleanups = [];
    items.forEach((item) => {
      const button = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!button || !answer) return;
      const onClick = () => {
        const wasOpen = item.classList.contains("active");
        items.forEach((other) => { other.classList.remove("active"); const a = other.querySelector(".faq-answer"); if (a) a.style.maxHeight = ""; });
        if (!wasOpen) { item.classList.add("active"); answer.style.maxHeight = `${answer.scrollHeight + 32}px`; }
      };
      button.addEventListener("click", onClick);
      cleanups.push(() => button.removeEventListener("click", onClick));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
  return null;
}
