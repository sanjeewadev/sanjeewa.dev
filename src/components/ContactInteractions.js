"use client";
import { useEffect } from "react";
export default function ContactInteractions() {
  useEffect(() => {
    const copyButtons = Array.from(document.querySelectorAll("[data-copy]"));
    const copyCleanups = copyButtons.map((button) => {
      const onClick = async () => { try { await navigator.clipboard.writeText(button.dataset.copy || ""); button.classList.add("copied"); window.setTimeout(() => button.classList.remove("copied"), 2000); } catch { button.classList.remove("copied"); } };
      button.addEventListener("click", onClick); return () => button.removeEventListener("click", onClick);
    });
    const form = document.getElementById("contactForm");
    if (!form) return () => copyCleanups.forEach((fn) => fn());
    const nameInput = document.getElementById("name"), emailInput = document.getElementById("email"), serviceInput = document.getElementById("service"), countryInput = document.getElementById("country"), messageInput = document.getElementById("message");
    const validName = () => nameInput.value.trim().length >= 2;
    const validEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
    const validService = () => serviceInput.value.trim().length >= 2;
    const validCountry = () => countryInput.value.trim().length >= 2;
    const validMessage = () => messageInput.value.trim().length >= 10;
    const update = (input, valid) => { input.classList.toggle("is-valid", valid); input.classList.toggle("is-invalid", !valid); };
    const handlers = [[nameInput, () => update(nameInput, validName())],[emailInput, () => update(emailInput, validEmail())],[serviceInput, () => update(serviceInput, validService())],[countryInput, () => update(countryInput, validCountry())],[messageInput, () => update(messageInput, validMessage())]];
    handlers.forEach(([input, handler]) => input?.addEventListener("input", handler));
    const onSubmit = (event) => {
      const values = [validName(), validEmail(), validService(), validCountry(), validMessage()];
      update(nameInput, values[0]); update(emailInput, values[1]); update(serviceInput, values[2]); update(countryInput, values[3]); update(messageInput, values[4]);
      if (values.some((value) => !value)) event.preventDefault();
    };
    form.addEventListener("submit", onSubmit);
    return () => { copyCleanups.forEach((fn) => fn()); handlers.forEach(([input, handler]) => input?.removeEventListener("input", handler)); form.removeEventListener("submit", onSubmit); };
  }, []);
  return null;
}
