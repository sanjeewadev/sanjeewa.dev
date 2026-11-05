"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`main-nav${scrolled ? " nav-scrolled" : ""}${menuOpen ? " menu-open" : ""}`} id="mainNav">
      <div className="container nav-container">
        <a href="/" className="nav-brand" aria-label="Sanjeewa.dev Homepage" onClick={closeMenu}>Sanjeewa<span className="text-brand">.dev</span></a>
        <nav className="nav-links desktop-links" aria-label="Main navigation">
          <a href="/#services">Web Development</a>
          <a href="/#maintenance">Maintenance</a>
          <a href="/#work">Case Studies</a>
          <a href="/#packages">Pricing</a>
        </nav>
        <div className="nav-cta desktop-cta"><a href="/contact" className="btn-brand-small">Get a Free Quote</a></div>
        <button className="mobile-toggle" aria-label="Toggle Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} type="button">
          <span className="hamburger-line"></span><span className="hamburger-line"></span><span className="hamburger-line"></span>
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        <nav className="mobile-menu-inner" aria-label="Mobile navigation">
          <a href="/#services" className="mobile-link" onClick={closeMenu}>Web Development</a>
          <a href="/#maintenance" className="mobile-link" onClick={closeMenu}>Website Maintenance</a>
          <a href="/coming-soon" className="mobile-link" onClick={closeMenu}>Case Studies</a>
          <a href="/#packages" className="mobile-link" onClick={closeMenu}>Website Pricing</a>
          <a href="/contact" className="btn-brand" style={{ marginTop: "24px", width: "100%" }} onClick={closeMenu}>Get a Free Quote</a>
        </nav>
      </div>
    </header>
  );
}
