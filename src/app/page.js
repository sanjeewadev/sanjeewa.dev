import "@/styles/home.css";
import ScrollReveal from "@/components/ScrollReveal";
import HomeInteractions from "@/components/HomeInteractions";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "Custom Website Development & Maintenance | Freelance Web Developer",
  description: "Custom website development for small businesses, plus reliable monthly website maintenance for existing sites. Build, improve, and keep your website running properly.",
  alternates: { canonical: "/" },
  openGraph: { title: "Custom Website Design for Small Businesses | Freelance Web Developer", description: "Custom website development for small businesses, plus reliable monthly website maintenance for existing sites. Build, improve, and keep your website running properly.", url: "/", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "Custom Website Design for Small Businesses | Freelance Web Developer", description: "Custom website development for small businesses, plus reliable monthly website maintenance for existing sites. Build, improve, and keep your website running properly.", images: ["/og-image.png"] },
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
      "description": "Custom website development for small businesses with optional monthly website maintenance and ongoing technical support",
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
                          <h1 className="hero-title-split">Get a fast, custom website that brings you more customers.</h1>
                          
                          <h2 className="hero-subtitle-split text-dark-muted">
                              High-converting designs for <br />
                              <span className="dynamic-word-wrapper">
                                  <span className="dynamic-word text-brand editorial-accent">Small Businesses.</span><span className="type-cursor">|</span>
                              </span>
                          </h2>
                          
                          <p className="hero-description-split text-dark-muted">
                              Stop losing clients to slow, outdated templates. I build hassle-free, lightning-fast websites that look incredible, rank higher on Google, and turn your visitors into paying customers.
                          </p>
                          
                          <div className="hero-actions-split">
                              <a href="/contact" className="btn-brand">Get Your Website in 7 Days</a>
                              <a href="/#work" className="btn-text-link text-dark-main ml-24">See Real Results ↗</a>
                          </div>
                          <p className="hero-service-note text-dark-muted">
                              Already have a website? <a href="/#maintenance">View monthly website maintenance →</a>
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
                          Your business doesn't just need a digital brochure. It needs an engine for growth. By focusing on <strong className="text-brand">lightning-fast speeds</strong> and <strong className="text-brand">conversion-first design</strong>, I build digital assets that actually generate leads.
                      </h2>
                  </section>
      
                  
                  <section id="services" className="container section-expertise">
                      <div className="section-label-block">
                          <p className="section-kicker text-dark-muted">01 // MY SERVICES</p>
                          <h2 className="scroll-fade-up">Website development first.<br /><span className="text-brand editorial-accent">Ongoing care when you need it.</span></h2>
                          <p className="section-intro text-dark-muted scroll-fade-up delay-100">
                              My main service is building high-converting websites from the ground up. I also provide monthly website maintenance for businesses that want reliable ongoing technical support after launch—or already have a website that needs looking after.
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
                                  Custom websites designed and developed around your business goals—not a generic template. From fast landing pages to complete business, commerce, and portfolio websites.
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
                                  Already have a website? I can keep it updated, healthy, secure, and working properly every month so you do not have to deal with the technical side yourself.
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
                                  <p className="work-subtitle">Event Photography Booking Platform</p>
                                  <p className="work-description">I replaced a website that was failing to convert with a fast custom WordPress platform, local SEO, and secure payments—giving ElinaPix a clearer path from visitor to direct booking.</p>
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
                                  <p className="work-subtitle">Custom Website & SEO Strategy</p>
                                  <p className="work-description">I rebuilt Christerna’s restricted old setup into a custom WordPress website he fully owns, then strengthened the site for search visibility and direct bookings in the competitive Dubai market.</p>
                                  <div className="tech-stack-row work-tags">
                                      <span>100% Ownership</span>
                                      <span>Custom WordPress</span>
                                      <span>Dubai SEO</span>
                                  </div>
                              </div>
                          </a>
      
                      </div>
      
                      <div className="view-all-wrapper scroll-fade-up delay-300">
                          <a href="/coming-soon" className="btn-brand">View All Case Studies</a>
                      </div>
                  </section>
                  
                  
                  <section id="packages" className="container section-pricing">
                      <div className="section-label-block centered mb-64">
                          <p className="section-kicker text-dark-muted">03 // WEBSITE DEVELOPMENT</p>
                          <h2 className="scroll-fade-up">Choose the right website<br /><span className="text-brand">for your business.</span></h2>
                          <p className="section-intro text-dark-muted scroll-fade-up delay-100">
                              One-time website development packages. Every project is built around your business, with clear scope and no surprise development fees.
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
                                  <strong>Perfect for simple portfolios.</strong><br /><br />
                                  Ultra-fast, highly secure sites built to turn visitors into leads. <em>Note: Does not include a dashboard to change your own content.</em>
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Maximum loading speed</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Flawless mobile layout</li>
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
                                  <strong>The complete business engine.</strong><br /><br />
                                  Includes a simple dashboard to change your own content, full e-commerce capabilities, and local search engine optimization.
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Easy content management</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Full online store integration</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced SEO configuration</li>
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
                                  <strong>For high-end, scaling brands.</strong><br /><br />
                                  Elite architecture offering unbreakable security, 100% custom UI design, and significantly faster speeds than standard platforms.
                              </p>
                              <hr className="card-divider" />
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Enterprise-grade security</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Unrestricted custom design</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Elite performance metrics</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom admin dashboard</li>
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
                              Monthly website care for businesses that want their site kept updated, healthy, and working properly without worrying about the technical side. You can use this service even if I did not build your website.
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
                                  <strong>For simple websites that need a dependable monthly check-in.</strong>
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
                                  <strong>For active business websites that need regular updates and faster support.</strong>
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
                                  <strong>For websites that need hands-on care, faster fixes, and continuous improvements.</strong>
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
                      <div className="section-label-block">
                          <p className="section-kicker text-dark-muted">05 // CLIENT TRUST</p>
                          <h2 className="scroll-fade-up">Verified <span className="text-brand">Google Reviews</span></h2>
                      </div>
      
                      <div className="reviews-carousel-container scroll-fade-up delay-150">
                          
                          <button className="slider-arrow prev-arrow" aria-label="Previous Review">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                          </button>
      
                          <div className="reviews-slider-wrapper">
                              <div className="reviews-track" id="reviewsTrack">
                                  
                                  <div className="google-review-card">
                                      <div className="review-header">
                                          <div className="reviewer-info">
                                              <div className="reviewer-avatar">E</div>
                                              <div className="reviewer-details">
                                                  <span className="reviewer-name">Elina Kabakova</span>
                                                  <div className="review-stars">★★★★★</div>
                                              </div>
                                          </div>
                                          <div className="google-logo">
                                              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="24" height="24" />
                                          </div>
                                      </div>
                                      <p className="review-text">I’m happy with the work done by Sanjeewa. The website looks aesthetically beautiful and elegant, exactly as I envisioned. The entire project was handled with a high level of professionalism, and I truly appreciate the attention to detail. Highly recommended!</p>
                                  </div>
      
                                  <div className="google-review-card">
                                      <div className="review-header">
                                          <div className="reviewer-info">
                                              <div className="reviewer-avatar brand-bg">C</div>
                                              <div className="reviewer-details">
                                                  <span className="reviewer-name">chris terna</span>
                                                  <div className="review-stars">★★★★★</div>
                                              </div>
                                          </div>
                                          <div className="google-logo">
                                              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="24" height="24" />
                                          </div>
                                      </div>
                                      <p className="review-text">Wow this is amazing knowing how this guy building website for me
      He amazing he knows the work🙌🏿👍🏼</p>
                                  </div>
      
                              </div>
                          </div>
      
                          <button className="slider-arrow next-arrow" aria-label="Next Review">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                          </button>
                          
                      </div> 
      
                      <div className="review-ctas scroll-fade-up delay-300">
                          <a href="#" className="btn-brand" target="_blank" rel="noopener">Leave a Review</a>
                          <a href="#" className="btn-text-link text-dark-main" target="_blank" rel="noopener">View all on Google ↗</a>
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
                                  <h2 className="scroll-fade-up delay-150 about-title">The partner <br /><span className="text-brand editorial-accent">behind your growth.</span></h2>
                              </div>
                              <div className="about-text scroll-fade-up delay-300">
                                  <p>Hi, I’m Sanjeewa—an independent web developer based in Sri Lanka, working with businesses across Australia, Europe, and worldwide. I build high-converting websites and provide reliable monthly maintenance when clients want ongoing support.</p>
                                  
                                  <p>My approach is simple: clear communication, dependable delivery, and technology that solves a real business problem. My technical foundation includes Software Engineering studies at <strong className="text-dark-main">Cardiff Metropolitan University</strong>, but my focus is always on making the web side of your business easier to run.</p>

                                  <div className="about-credentials" aria-label="Developer highlights">
                                      <div><span className="credential-label">Focus</span><strong>Web Development</strong></div>
                                      <div><span className="credential-label">Also</span><strong>Monthly Maintenance</strong></div>
                                      <div><span className="credential-label">Based in</span><strong>Sri Lanka • Worldwide</strong></div>
                                  </div>
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
                                  <p>Most standard business websites are launched within 7 to 14 days. Because I write clean custom code and do not rely on clunky page builders, I can move quickly while maintaining an elite standard of quality.</p>
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
                                  <p>I work seamlessly with clients in Australia, Europe, and worldwide on a daily basis. We rely on clear communication via email and scheduled milestone reviews to ensure your project is delivered flawlessly, no matter your time zone.</p>
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
                          <h2 className="final-cta-title">Need a new website—or help <span className="text-brand editorial-accent">looking after one?</span></h2>
                          <p className="final-cta-text">Start a new website project with me, or choose monthly maintenance for an existing site. Either way, you get clear communication and reliable technical support.</p>
                          <div className="final-cta-actions">
                              <a href="/contact" className="btn-brand">Start a Website Project</a>
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
