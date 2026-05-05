document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    questionBtn.addEventListener("click", () => {
      // Check if this item is already open
      const isOpen = item.classList.contains("active");

      // Optional: Close all other accordions first (for a cleaner look)
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      });

      // If it wasn't open, open it now
      if (!isOpen) {
        item.classList.add("active");
        // Set max-height to the actual scroll height of the text for a smooth slide
        answer.style.maxHeight = answer.scrollHeight + 32 + "px"; // +32 accounts for padding
      }
    });
  });
});
