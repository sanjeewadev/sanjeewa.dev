import "@/styles/contact.css";
import ScrollReveal from "@/components/ScrollReveal";
import ContactInteractions from "@/components/ContactInteractions";

export const metadata = {
  title: "Hire a Freelance Web Developer | Get a Free Website Quote",
  description: "Ready to grow your business? Hire an expert freelance web developer for a high-converting, custom website. Request a free quote today. I reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Hire a Freelance Web Developer | Get a Free Website Quote", description: "Ready to grow your business? Hire an expert freelance web developer for a high-converting, custom website. Request a free quote today. I reply within 24 hours.", url: "/contact", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "Hire a Freelance Web Developer | Get a Free Website Quote", description: "Ready to grow your business? Hire an expert freelance web developer for a high-converting, custom website. Request a free quote today. I reply within 24 hours.", images: ["/og-image.png"] },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Sanjeewa Vipula Kumara",
  "description": "Get a free quote for custom website design and development.",
  "url": "https://sanjeewa.dev/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Sanjeewa Vipula Kumara",
    "jobTitle": "Freelance Web Developer",
    "email": "hello.sanjeewa@outlook.com",
    "telephone": "+94776369256",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombo",
      "addressCountry": "LK"
    },
    "sameAs": [
      "https://linkedin.com/in/sanjeewadev",
      "https://github.com/sanjeewadev"
    ]
  }
};

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <header className="contact-hero-minimal">
              <div className="container contact-hero-content-centered scroll-fade-up">
                  <p className="hero-kicker">GET YOUR FREE QUOTE</p>
                  <h1 className="contact-title-minimal text-dark-main">Start getting <br /><span className="text-brand">more customers.</span></h1>
                  <p className="contact-subtitle-minimal text-dark-muted">
                      Whether you need a lightning-fast portfolio or a complete business engine, let's discuss your goals. Fill out the form below, and <strong>I will personally reply within 24 hours</strong> to discuss your project.
                  </p>
              </div>
          </header>
      
          <main className="contact-canvas">
              <div className="container">
                  <div className="contact-grid">
                      
                      <div className="contact-channels scroll-fade-up delay-0">
                          
                          <div className="channel-card">
                              <h3>Direct Email</h3>
                              <div className="copy-link-group">
                                  <a href="mailto:hello.sanjeewa@outlook.com" className="channel-link">hello.sanjeewa@outlook.com ↗</a>
                                  <button className="copy-btn" data-copy="hello.sanjeewa@outlook.com" aria-label="Copy Email">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                  </button>
                              </div>
                          </div>
                          
                          <div className="channel-card">
                              <h3>WhatsApp Direct</h3>
                              <div className="copy-link-group">
                                  <a href="https://wa.me/94776369256" className="channel-link" target="_blank" rel="noopener">+94 77 636 9256 ↗</a>
                                  <button className="copy-btn" data-copy="+94776369256" aria-label="Copy Phone Number">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                  </button>
                              </div>
                          </div>
                          
                          <div className="channel-card">
                              <h3>Social Network</h3>
                              <div className="modern-social-grid">
                                  
                                  <a href="https://linkedin.com/in/sanjeewadev" className="social-link-minimal" aria-label="LinkedIn" target="_blank" rel="noopener">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                          <rect x="2" y="9" width="4" height="12"></rect>
                                          <circle cx="4" cy="4" r="2"></circle>
                                      </svg>
                                  </a>
      
                                  <a href="https://github.com/sanjeewadev" className="social-link-minimal" aria-label="GitHub" target="_blank" rel="noopener">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                      </svg>
                                  </a>
      
                              </div>
                          </div>
                          
                      </div>
      
                      <div className="contact-form-wrapper scroll-fade-up delay-0">
                          <form action="https://api.web3forms.com/submit" method="POST" className="solid-premium-form" id="contactForm" noValidate>
                              
                              <input type="hidden" name="access_key" value="065ef0f5-7ba0-4210-add9-4534771c8b49" />
                              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                              <input type="hidden" name="subject" value="New Lead from Sanjeewa.dev!" />
      
                              <div className="solid-input-group">
                                  <label htmlFor="name">Name / Brand</label>
                                  <input type="text" id="name" name="name" required placeholder="e.g. Sanjeewa" />
                                  <span className="error-text">Please enter your name (at least 2 characters).</span>
                              </div>
                              
                              <div className="solid-input-group">
                                  <label htmlFor="email">Email</label>
                                  <input type="email" id="email" name="email" required placeholder="hello@yourbusiness.com" />
                                  <span className="error-text">Please enter a valid email address.</span>
                              </div>
                              
                              <div className="solid-input-group">
                                  <label htmlFor="country">Location (Country)</label>
                                  <input type="text" id="country" name="country" required placeholder="e.g. Australia or Europe" />
                                  <span className="error-text">Please let me know where you are located.</span>
                              </div>
                              
                              <div className="solid-input-group">
                                  <label htmlFor="message">Project Details</label>
                                  <textarea id="message" name="message" rows="5" required placeholder="Tell me about your business goals, current website problems, or ask me anything..."></textarea>
                                  <span className="error-text">Please provide a few more details (at least 10 characters).</span>
                              </div>
                              
                              <button type="submit" className="submit-btn btn-brand btn-full-width mt-32">Get Your Free Consultation</button>
                              
                              <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.85rem", color: "#666" }}>
                                  🔒 Your information is secure. No commitment required.
                              </p>
                          </form>
                      </div>
      
                  </div>
              </div>
          </main>
      <ScrollReveal />
      <ContactInteractions />
    </>
  );
}
