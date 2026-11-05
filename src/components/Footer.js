"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-main-grid">
          <div className="footer-brand-column">
            <a href="/" className="footer-logo" aria-label="Homepage">Sanjeewa<span className="text-brand">.dev</span></a>
            <p className="footer-tagline text-light-muted">Thoughtful, high-performing websites and ongoing care for service businesses, creative professionals, and growing brands.</p>
          </div>
          <nav className="footer-column" aria-label="Footer Navigation">
            <h4 className="footer-heading">Navigation</h4><a href="/" className="footer-link">Home</a><a href="/#services" className="footer-link">Services</a><a href="/#work" className="footer-link">Case Studies</a><a href="/#packages" className="footer-link">Pricing Plans</a>
          </nav>
          <nav className="footer-column" aria-label="Social Links">
            <h4 className="footer-heading">Connect</h4><a href="/contact" className="footer-link">Get a Free Quote</a><a href="https://linkedin.com/in/sanjeewadev" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/sanjeewadev" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="copyright text-light-muted">&copy; {year} Sanjeewa Vipula Kumara. All rights reserved.</p>
          <div className="footer-meta">
            <span className="location-text">Based in Sri Lanka • Serving Australia & Europe</span>
            <button className="back-to-top-btn" aria-label="Back to top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
