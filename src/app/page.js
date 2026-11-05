import "@/styles/home.css";
import ScrollReveal from "@/components/ScrollReveal";
import HomeInteractions from "@/components/HomeInteractions";
import FaqInteractions from "@/components/FaqInteractions";
import CertificateCredential from "@/components/CertificateCredential";

export const metadata = {
  title: "Thoughtful Website Development & Maintenance | Sanjeewa.dev",
  description: "Thoughtful, high-performing custom websites and monthly maintenance for service businesses, creative professionals, boutique brands, and growing teams.",
  alternates: { canonical: "/" },
  openGraph: { title: "Custom Website Design for Small Businesses | Freelance Web Developer", description: "Thoughtful, high-performing custom websites and monthly maintenance for service businesses, creative professionals, boutique brands, and growing teams.", url: "/", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "Custom Website Design for Small Businesses | Freelance Web Developer", description: "Thoughtful, high-performing custom websites and monthly maintenance for service businesses, creative professionals, boutique brands, and growing teams.", images: ["/og-image.png"] },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sanjeewa.dev/#person",
      "name": "Sanjeewa Vipula Kumara",
      "jobTitle": "Freelance Web Developer",
      "url": "https://sanjeewa.dev",
      "alumniOf": {
         "@type": "CollegeOrUniversity",
         "name": "Cardiff Metropolitan University"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sanjeewa.dev/#service",
      "url": "https://sanjeewa.dev",
      "name": "Sanjeewa Dev",
      "description": "Thoughtful custom website development and ongoing website care for service businesses, creative professionals, boutique brands, and growing teams"
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a custom small business website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A high-performance custom website starts at $99 for a fast, static landing page. Full business and commerce websites with content management start at $199."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need SEO for my small business website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every website I build includes a strict Technical SEO foundation—meaning it is lightning-fast and mobile-optimized so Google can read it easily and rank you higher."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need technical knowledge to work with a web developer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Clients can explain their business goals in normal language. I handle the technical decisions, explain important choices clearly, and keep the process straightforward without requiring a technical brief."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer monthly website maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. I offer monthly website maintenance plans for websites I build and for existing websites after a quick technical review. Plans can include health checks, small content updates, bug fixes, performance checks, security and update checks, and ongoing technical support."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <main className="hybrid-site">
              
      
              <section className="hero-split-modern">
                  <div className="container hero-split-grid">
                      
                      
                      <div className="hero-split-content scroll-fade-up">
                          <p className="hero-kicker">Freelance Web Developer</p>
                          <h1 className="hero-title-split">Build a website that feels right for your brand—and helps your business grow.</h1>
                          
                          <h2 className="hero-subtitle-split text-dark-muted">
                              Thoughtful websites for <br />
                              <span className="dynamic-word-wrapper">
                                  <span className="dynamic-word text-brand editorial-accent">Service Businesses.</span><span className="type-cursor">|</span>
                              </span>
                          </h2>
                          
                          <p className="hero-description-split text-dark-muted">
                              I design and build polished, high-performing websites that make your business feel credible, clear, and easy to choose—without turning the process into a technical headache.
                          </p>
                          
                          <div className="hero-actions-split">
                              <a href="/contact" className="btn-brand">Start Your Website Project</a>
                              <a href="/#work" className="btn-text-link text-dark-main ml-24">View My Work ↗</a>
                          </div>
                          <p className="hero-service-note text-dark-muted">
                              Already have a website? <a href="/#maintenance">I can look after it each month →</a>
                          </p>
                      </div>
      
                      
                      <div className="hero-split-visual scroll-fade-up delay-150">
                          <div className="visual-frame">
                              <img src="/assets/hero/premium-website-design-for-creative-studios.webp" alt="Custom website design for creative studios" className="hero-slide active" loading="eager" />
                              <img src="/assets/hero/high-performance-photography-portfolio-website.webp" alt="High-converting website design for small businesses" className="hero-slide" loading="lazy" />
                              <img src="/assets/hero/custom-event-booking-website-development.webp" alt="Automated event booking website layout" className="hero-slide" loading="lazy" />
                              <div className="visual-overlay"></div>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              
              <div className="light-canvas">
      
                  
                  <section className="container section-philosophy text-center">
                      <p className="section-kicker text-dark-muted">THE STANDARD</p>
                      <h2 className="scroll-fade-up philosophy-title">
                          A good website should feel like your business at its best. It should build trust quickly, make what you offer easy to understand, and give the right people a <strong className="text-brand">clear next step</strong>. I combine thoughtful design, fast performance, and conversion-focused structure so it looks polished and works hard for your business.
                      </h2>
                  </section>
      
                  
                  <section id="services" className="container section-expertise">
                      <div className="section-label-block">
                          <p className="section-kicker text-dark-muted">01 // MY SERVICES</p>
                          <h2 className="scroll-fade-up">Website development first.<br /><span className="editorial-accent text-editorial-ink">Ongoing care when you need it.</span></h2>
                          <p className="section-intro text-dark-muted scroll-fade-up delay-100">
                              My main service is building websites from the ground up around your brand, audience, and goals. I also offer monthly care for businesses that want the technical side handled after launch—or already have a website that needs attention.
                          </p>
                      </div>

                      <div className="service-pillars">
                          <article className="service-pillar service-pillar-primary scroll-fade-up delay-0">
                              <div className="service-pillar-top">
                                  <span className="service-badge">PRIMARY SERVICE</span>
                                  <span className="service-number">01</span>
                              </div>
                              <h3>Website Development</h3>
                              <p className="service-pillar-description">
                                  A polished custom website shaped around your brand, audience, and goals. Clear enough to feel effortless, distinctive enough to feel like your business—not a generic template.
                              </p>
                              <div className="service-feature-list">
                                  <span>Custom Design</span>
                                  <span>Responsive Development</span>
                                  <span>Technical SEO</span>
                                  <span>Performance Optimization</span>
                                  <span>Business & Portfolio Sites</span>
                                  <span>Commerce & Booking Solutions</span>
                              </div>
                              <a href="/#packages" className="btn-brand">View Website Packages</a>
                          </article>

                          <article className="service-pillar service-pillar-maintenance scroll-fade-up delay-150">
                              <div className="service-pillar-top">
                                  <span className="service-badge service-badge-muted">MONTHLY SERVICE</span>
                                  <span className="service-number">02</span>
                              </div>
                              <h3>Website Maintenance</h3>
                              <p className="service-pillar-description">
                                  You run your business. I’ll look after the website—small updates, checks, fixes, and ongoing technical support without the stress of handling the technical side yourself.
                              </p>
                              <div className="service-feature-list">
                                  <span>Website Health Checks</span>
                                  <span>Small Content Updates</span>
                                  <span>Bug Fixes</span>
                                  <span>Performance Checks</span>
                                  <span>Security & Update Checks</span>
                                  <span>Ongoing Technical Support</span>
                              </div>
                              <a href="/#maintenance" className="btn-text-link text-brand">View Maintenance Plans →</a>
                          </article>
                      </div>
                  </section>

                  
                  <section id="work" className="container section-work">
                      <div className="section-label-block">
                          <p className="section-kicker text-dark-muted">02 // PROVEN RESULTS</p>
                          <h2 className="scroll-fade-up">Client <span className="text-brand">Success Stories</span></h2>
                      </div>
      
                      <div className="work-grid">
                          
                          <a href="/elinapix-case-study" className="work-card-case scroll-fade-up delay-0">
                              <div className="work-visual">
                                  <img src="/assets/Project/elinapix-photography-portfolio-website.webp" alt="Custom event photography website design for French Riviera photographer" loading="lazy" />
                              </div>
                              <div className="work-meta">
                                  <h3>ElinaPix (French Riviera)</h3>
                                  <p className="work-subtitle">A polished booking experience for a visual brand</p>
                                  <p className="work-description">Her previous site did not reflect the quality of her photography or make booking feel easy. I rebuilt the experience around her work, faster performance, local visibility, and a clearer path from first impression to enquiry.</p>
                                  <div className="tech-stack-row work-tags">
                                      <span>Custom WordPress</span>
                                      <span>Local SEO</span>
                                      <span>Payment Gateway</span>
                                  </div>
                              </div>
                          </a>
      
                          <a href="/dj-christerna-case-study" className="work-card-case scroll-fade-up delay-150">
                              <div className="work-visual">
                                  <img src="/assets/Project/dj-christerna-dj-booking-website.webp" alt="Custom DJ website design for Dubai event professional" loading="lazy" />
                              </div>
                              <div className="work-meta">
                                  <h3>DJ Christerna (Dubai)</h3>
                                  <p className="work-subtitle">A clearer, fully owned platform for direct enquiries</p>
                                  <p className="work-description">Chris needed control of his own website and a more professional way for promoters to book him. I rebuilt the site on hosting he owns, clarified the enquiry journey, and strengthened local search visibility.</p>
                                  <div className="tech-stack-row work-tags">
                                      <span>100% Ownership</span>
                                      <span>Custom WordPress</span>
                                      <span>Dubai SEO</span>
                                  </div>
                              </div>
                          </a>
      
                      </div>

                  </section>
                  
                  
                  <section id="packages" className="container section-pricing">
                      <div className="section-label-block centered mb-64">
                          <p className="section-kicker text-dark-muted">03 // WEBSITE DEVELOPMENT</p>
                          <h2 className="scroll-fade-up">Choose the right website<br /><span className="text-brand">for your business.</span></h2>
                          <p className="section-intro text-dark-muted scroll-fade-up delay-100">
                              Clear starting points for different stages of business. We’ll choose the right level based on what you actually need—without unnecessary complexity or surprise development fees.
                          </p>
                      </div>

                      <div className="pricing-grid">
                          <div className="pricing-card scroll-fade-up delay-0">
                              <h3 className="package-name">Static Launch</h3>
                              <div className="price-block">
                                  <span className="price-label">Starting at</span>
                                  <div className="price-amount">$99</div>
                              </div>
                              <p className="package-desc">
                                  <strong>For a focused portfolio or simple service business.</strong><br /><br />
                                  A polished, fast website for businesses that need a professional presence without frequent self-editing. <em>Note: This plan does not include a content dashboard.</em>
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Fast-loading experience</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Responsive mobile experience</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Technical SEO foundation</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Clean custom build</li>
                              </ul>
                              <a href="/contact" className="package-cta">Choose Static Launch →</a>
                          </div>

                          <div className="pricing-card highlight-blue scroll-fade-up delay-150">
                              <div className="popular-badge">MOST POPULAR</div>
                              <h3 className="package-name">Business & Commerce</h3>
                              <div className="price-block">
                                  <span className="price-label">Starting at</span>
                                  <div className="price-amount text-brand">$199</div>
                              </div>
                              <p className="package-desc">
                                  <strong>For growing businesses that need more flexibility.</strong><br /><br />
                                  Ideal for editable content, booking or commerce features, and a stronger search foundation as your business grows.
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Easy content management</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Commerce / booking options</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Strong SEO foundation</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Secure payment gateways</li>
                              </ul>
                              <a href="/contact" className="package-cta package-cta-primary">Choose Business & Commerce →</a>
                          </div>

                          <div className="pricing-card scroll-fade-up delay-300">
                              <h3 className="package-name">Bespoke Enterprise</h3>
                              <div className="price-block">
                                  <span className="price-label">Starting at</span>
                                  <div className="price-amount">$299</div>
                              </div>
                              <p className="package-desc">
                                  <strong>For brands that need something more tailored.</strong><br /><br />
                                  A custom solution for larger websites, distinctive design systems, or functionality built around a specific business workflow.
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Tailored security setup</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Fully custom design</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced performance optimization</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom admin experience</li>
                              </ul>
                              <a href="/contact" className="package-cta">Choose Bespoke Enterprise →</a>
                          </div>
                      </div>
                  </section>

                  <section id="maintenance" className="section-maintenance">
                      <div className="container maintenance-inner">
                      <div className="maintenance-heading">
                          <div>
                              <p className="section-kicker text-dark-muted">04 // WEBSITE MAINTENANCE</p>
                              <h2 className="scroll-fade-up">Your website should not be<br /><span className="text-brand editorial-accent">forgotten after launch.</span></h2>
                          </div>
                          <p className="maintenance-heading-copy text-dark-muted scroll-fade-up delay-100">
                              You run the business; I’ll keep the website healthy. Monthly care can cover updates, checks, small fixes, and ongoing support so you do not have to keep thinking about the technical side. I can also maintain websites I did not originally build.
                          </p>
                      </div>

                      <div className="pricing-grid maintenance-pricing-grid">
                          <div className="pricing-card maintenance-card scroll-fade-up delay-0">
                              <span className="maintenance-plan-label">MONTHLY CARE</span>
                              <h3 className="package-name">Essential Care</h3>
                              <div className="price-block">
                                  <span className="price-label">Per month</span>
                                  <div className="price-amount">$29<span className="price-period">/mo</span></div>
                              </div>
                              <p className="package-desc">
                                  <strong>For simple websites that need dependable routine care.</strong>
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Monthly website health check</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 1 small content update / month</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Broken link & form checks</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic minor bug fixes</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Email support</li>
                              </ul>
                              <a href="/contact" className="package-cta">Choose Essential Care →</a>
                          </div>

                          <div className="pricing-card maintenance-card highlight-blue scroll-fade-up delay-150">
                              <div className="popular-badge">MOST POPULAR</div>
                              <span className="maintenance-plan-label text-brand">MONTHLY CARE</span>
                              <h3 className="package-name">Business Care</h3>
                              <div className="price-block">
                                  <span className="price-label">Per month</span>
                                  <div className="price-amount text-brand">$59<span className="price-period">/mo</span></div>
                              </div>
                              <p className="package-desc">
                                  <strong>For active businesses that need regular updates and quicker support.</strong>
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Everything in Essential Care</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Up to 3 small content updates / month</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Performance review</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Security & software update checks</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Backup verification where supported</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority support</li>
                              </ul>
                              <a href="/contact" className="package-cta package-cta-primary">Choose Business Care →</a>
                          </div>

                          <div className="pricing-card maintenance-card scroll-fade-up delay-300">
                              <span className="maintenance-plan-label">MONTHLY CARE</span>
                              <h3 className="package-name">Premium Care</h3>
                              <div className="price-block">
                                  <span className="price-label">Per month</span>
                                  <div className="price-amount">$99<span className="price-period">/mo</span></div>
                              </div>
                              <p className="package-desc">
                                  <strong>For brands that want more hands-on care and room for ongoing improvements.</strong>
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Everything in Business Care</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Up to 6 small content updates / month</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Up to 1 hour improvement work / month</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority minor bug fixes</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Monthly improvement recommendations</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Fastest support priority</li>
                              </ul>
                              <a href="/contact" className="package-cta">Choose Premium Care →</a>
                          </div>
                      </div>

                      <div className="maintenance-scope scroll-fade-up delay-300">
                          <div>
                              <p className="maintenance-scope-eyebrow">CLEAR SCOPE. NO CONFUSION.</p>
                              <h3>What counts as a maintenance update?</h3>
                              <p>
                                  Small updates include things like changing text or images, updating contact details, minor layout corrections, checking forms and links, small bug fixes, and routine software or security checks where applicable.
                              </p>
                              <p className="maintenance-scope-note">
                                  New pages, redesigns, new functionality, e-commerce features, major development work, or large content uploads are quoted separately.
                              </p>
                          </div>
                          <a href="/contact" className="btn-brand">Ask About Maintenance</a>
                      </div>
                      </div>
                  </section>

                  
                  <section className="container section-google-reviews">
                      <div className="section-label-block reviews-heading">
                          <p className="section-kicker text-dark-muted">05 // CLIENT TRUST</p>
                          <h2 className="scroll-fade-up">Verified <span className="text-brand">Google Reviews</span></h2>
                          <p className="section-intro text-dark-muted scroll-fade-up delay-100">
                              Feedback from clients who trusted me with their business online. Two reviews below are verified; the third card is a temporary placeholder until the next client review is added.
                          </p>
                      </div>
      
                      <div className="reviews-carousel-container scroll-fade-up delay-150">
                          <button className="slider-arrow prev-arrow" aria-label="Previous review" type="button">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                          </button>
      
                          <div className="reviews-slider-wrapper">
                              <div className="reviews-track" id="reviewsTrack">
                                  
                                  <article className="google-review-card">
                                      <div className="review-header">
                                          <div className="reviewer-info">
                                              <div className="reviewer-avatar warm-avatar">E</div>
                                              <div className="reviewer-details">
                                                  <span className="reviewer-name">Elina Kabakova</span>
                                                  <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                              </div>
                                          </div>
                                          <div className="google-logo">
                                              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="24" height="24" />
                                          </div>
                                      </div>
                                      <p className="review-text">I’m happy with the work done by Sanjeewa. The website looks aesthetically beautiful and elegant, exactly as I envisioned. The entire project was handled with a high level of professionalism, and I truly appreciate the attention to detail. Highly recommended!</p>
                                  </article>
      
                                  <article className="google-review-card">
                                      <div className="review-header">
                                          <div className="reviewer-info">
                                              <div className="reviewer-avatar brand-bg">C</div>
                                              <div className="reviewer-details">
                                                  <span className="reviewer-name">Chris Terna</span>
                                                  <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                                              </div>
                                          </div>
                                          <div className="google-logo">
                                              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="24" height="24" />
                                          </div>
                                      </div>
                                      <p className="review-text">Wow this is amazing knowing how this guy building website for me. He amazing he knows the work 🙌🏿👍🏼</p>
                                  </article>
      
                                  <article className="google-review-card demo-review-card">
                                      <div className="review-header">
                                          <div className="reviewer-info">
                                              <div className="reviewer-avatar demo-avatar">D</div>
                                              <div className="reviewer-details">
                                                  <span className="reviewer-name">Demo Client</span>
                                                  <div className="review-stars" aria-label="Demo 5-star rating">★★★★★</div>
                                              </div>
                                          </div>
                                          <span className="demo-review-badge">DEMO</span>
                                      </div>
                                      <p className="review-text">Sanjeewa was clear, responsive, and easy to work with. The website feels polished, performs smoothly, and the whole process was handled professionally from start to finish.</p>
                                      <p className="demo-review-note">Temporary placeholder — replace with your next verified Google review.</p>
                                  </article>
      
                              </div>
                          </div>
      
                          <button className="slider-arrow next-arrow" aria-label="Next review" type="button">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                          </button>
                      </div>
      
                      <div className="review-dots" aria-label="Review navigation">
                          <button className="review-dot active" type="button" aria-label="Show review 1" data-review-index="0"></button>
                          <button className="review-dot" type="button" aria-label="Show review 2" data-review-index="1"></button>
                          <button className="review-dot" type="button" aria-label="Show review 3" data-review-index="2"></button>
                      </div>
      
                      <div className="review-trust-line scroll-fade-up delay-300">
                          <span className="review-trust-stars">★★★★★</span>
                          <span>Google client feedback</span>
                          <span className="review-trust-separator">•</span>
                          <span>2 verified reviews + 1 demo placeholder</span>
                      </div>
                  </section>
      
         
                  <section id="about" className="container section-about">
                      <div className="about-grid">
                          <div className="about-visual scroll-fade-up">
                              <img src="/assets/me/sanjeewa-vipula-kumara-freelance-web-developer.webp" alt="Sanjeewa Vipula Kumara - Freelance Web Developer for Small Businesses" className="profile-img" loading="lazy" />
                          </div>
                          
                          <div className="about-content">
                              <div className="about-header">
                                  <p className="section-kicker text-dark-muted">06 // YOUR DEVELOPER</p>
                                  <h2 className="scroll-fade-up delay-150 about-title">The partner <br /><span className="editorial-accent text-editorial-ink">behind your growth.</span></h2>
                              </div>
                              <div className="about-text scroll-fade-up delay-300">
                                  <p>Hi, I’m Sanjeewa—an independent web developer based in Sri Lanka, working remotely with clients worldwide. I build thoughtful, high-performing websites for people who care about how their business looks, feels, and works online.</p>
                                  
                                  <p>You do not need to speak tech to work with me. I keep the process clear, collaborative, and straightforward: I listen first, explain decisions in plain language, and make sure you always know what is happening next. My technical foundation includes Software Engineering studies at <strong className="text-dark-main">Cardiff Metropolitan University</strong>, but my job is to make the web side of your business feel easier.</p>

                                  <div className="best-fit-block">
                                      <span className="credential-label">Who I work best with</span>
                                      <p>Service businesses and creative brands—photographers, beauty & wellness businesses, consultants, coaches, studios, personal brands, boutique teams, and women-led businesses that care about a polished client experience.</p>
                                  </div>

                                  <div className="about-credentials" aria-label="Developer highlights">
                                      <div><span className="credential-label">Focus</span><strong>Web Development</strong></div>
                                      <div><span className="credential-label">Also</span><strong>Monthly Maintenance</strong></div>
                                      <div><span className="credential-label">Based in</span><strong>Sri Lanka • Worldwide</strong></div>
                                  </div>

                                  <CertificateCredential />
                              </div>
                          </div>
                      </div>
                  </section>
      
                  
                  <section id="faq" className="container section-faq">
                      <div className="section-label-block centered mb-64">
                          <p className="section-kicker text-dark-muted">07 // PROJECT DETAILS</p>
                          <h2 className="scroll-fade-up">Common <span className="text-brand">Questions.</span></h2>
                      </div>
      
                      <div className="faq-container">
                          
                          <div className="faq-item scroll-fade-up delay-0">
                              <button className="faq-question">
                                  <span>How much does a custom small business website cost?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>A high-performance custom website starts at $99 for a fast, static landing page. Full business and commerce websites with content management start at $199. I provide transparent pricing with absolutely no hidden fees.</p>
                              </div>
                          </div>
      
                          <div className="faq-item scroll-fade-up delay-100">
                              <button className="faq-question">
                                  <span>Do I need SEO for my small business website?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>Yes. Every website I build includes a strong technical SEO foundation, including performance and mobile optimization so search engines can understand the site properly. The monthly maintenance plans focus on ongoing website care rather than SEO campaigns.</p>
                              </div>
                          </div>
      
                          <div className="faq-item scroll-fade-up delay-200">
                              <button className="faq-question">
                                  <span>How long does it take to build a custom business website?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>Most standard business websites are launched within 7 to 14 days. I work in focused stages, share progress clearly, and keep feedback simple so you always know what is happening and what comes next.</p>
                              </div>
                          </div>
      
                          <div className="faq-item scroll-fade-up delay-250">
                              <button className="faq-question">
                                  <span>I’m not technical. Is that a problem?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>Not at all. You can explain your business in normal language—I’ll handle the technical decisions and explain anything important clearly. You do not need to arrive with a technical brief or know exactly what platform you need.</p>
                              </div>
                          </div>

                          <div className="faq-item scroll-fade-up delay-300">
                              <button className="faq-question">
                                  <span>How does the process work if we are in different countries?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>I regularly work remotely with clients in Australia, Europe, and elsewhere. We use clear email communication and simple milestone reviews, so distance does not make the project feel complicated or disconnected.</p>
                              </div>
                          </div>
      
                          <div className="faq-item scroll-fade-up delay-350">
                              <button className="faq-question">
                                  <span>Can you maintain a website that you did not build?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>Yes. You do not need to have had your website built by me. I can take over ongoing maintenance for an existing website after a quick technical review to make sure I have the access and setup needed to support it properly.</p>
                              </div>
                          </div>

                          <div className="faq-item scroll-fade-up delay-400">
                              <button className="faq-question">
                                  <span>What is included in monthly website maintenance?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>Maintenance covers the ongoing care defined by your plan, such as health checks, small content changes, minor bug fixes, form and link checks, performance reviews, and software or security checks where applicable. Major redesigns, new pages, or new features are separate development work.</p>
                              </div>
                          </div>

                          <div className="faq-item scroll-fade-up delay-400">
                              <button className="faq-question">
                                  <span>Do I own the website and the domain?</span>
                                  <div className="faq-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </div>
                              </button>
                              <div className="faq-answer">
                                  <p>Absolutely. I build transparent partnerships. Once the final invoice is paid, you have 100% ownership of your domain, hosting, and all project files. You are never locked into a contract.</p>
                              </div>
                          </div>
      
                      </div>
                  </section>
      
                  
                  <section className="container section-final-cta scroll-fade-up">
                      <div className="final-cta-content">
                          <h2 className="final-cta-title">Have a website idea—or a site that needs <span className="editorial-accent text-editorial-ink">a little more care?</span></h2>
                          <p className="final-cta-text">Tell me what you are building, changing, or struggling with. You do not need a technical brief—just tell me what you want your business and website to do better.</p>
                          <div className="final-cta-actions">
                              <a href="/contact" className="btn-brand">Tell Me About Your Project</a>
                              <a href="/#maintenance" className="btn-text-link text-dark-main">View Maintenance Plans →</a>
                          </div>
                      </div>
                  </section>
      
              </div> 
      
          </main>
      <ScrollReveal />
      <HomeInteractions />
      <FaqInteractions />
    </>
  );
}
