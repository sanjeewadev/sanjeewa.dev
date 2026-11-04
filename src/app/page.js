import "@/styles/home.css";
import ScrollReveal from "@/components/ScrollReveal";
import HomeInteractions from "@/components/HomeInteractions";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "Custom Website Design for Small Businesses | Freelance Web Developer",
  description: "Need a fast, stunning website? I am a freelance web developer building high-converting, custom websites for small businesses. Get more clients today.",
  alternates: { canonical: "/" },
  openGraph: { title: "Custom Website Design for Small Businesses | Freelance Web Developer", description: "Need a fast, stunning website? I am a freelance web developer building high-converting, custom websites for small businesses. Get more clients today.", url: "/", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "Custom Website Design for Small Businesses | Freelance Web Developer", description: "Need a fast, stunning website? I am a freelance web developer building high-converting, custom websites for small businesses. Get more clients today.", images: ["/og-image.png"] },
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
      "description": "High-Converting Custom Website Design for Small Businesses",
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
                                  <span className="dynamic-word text-brand">Small Businesses.</span><span className="type-cursor">|</span>
                              </span>
                          </h2>
                          
                          <p className="hero-description-split text-dark-muted">
                              Stop losing clients to slow, outdated templates. I build hassle-free, lightning-fast websites that look incredible, rank higher on Google, and turn your visitors into paying customers.
                          </p>
                          
                          <div className="hero-actions-split">
                              <a href="/contact" className="btn-brand">Get Your Website in 7 Days</a>
                              <a href="/#work" className="btn-text-link text-dark-main ml-24">See Real Results ↗</a>
                          </div>
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
                          <h2 className="scroll-fade-up">High-Converting Websites for <br /><span className="text-brand">Small Businesses</span></h2>
                      </div>
      
                      <div className="bento-grid">
                          
                          <div className="competency-card scroll-fade-up delay-0">
                              <div className="card-header">
                                  <p className="card-num text-dark-muted">01</p>
                                  <div className="card-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                  </div>
                              </div>
                              <h3>Ultra-Fast Landing Pages</h3>
                              <p className="card-description">High-speed, custom-coded landing pages designed to capture leads immediately. Built for perfect Google scores, zero lag, and a flawless mobile experience to stop visitors from leaving.</p>
                              <div className="tech-stack-row">
                                  <span>Lightning Fast</span>
                                  <span>Mobile Optimized</span>
                                  <span>More Leads</span>
                              </div>
                          </div>
      
                          <div className="competency-card highlight-blue scroll-fade-up delay-150">
                              <div className="card-header">
                                  <p className="card-num text-brand">02</p>
                                  <div className="card-icon text-brand">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                  </div>
                              </div>
                              <h3>Done-For-You Business Sites</h3>
                              <p className="card-description">Fully tailored websites for service businesses. I handle the setup, SEO formatting, and secure contact forms so you can focus entirely on running your day-to-day business.</p>
                              <div className="tech-stack-row">
                                  <span>Easy to Manage</span>
                                  <span>Local SEO Setup</span>
                                  <span>Secure Forms</span>
                              </div>
                          </div>
      
                          <div className="competency-card scroll-fade-up delay-300">
                              <div className="card-header">
                                  <p className="card-num text-dark-muted">03</p>
                                  <div className="card-icon">
                                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                  </div>
                              </div>
                              <h3>Premium Portfolio Designs</h3>
                              <p className="card-description">Bespoke digital portfolios for creative professionals like DJs and photographers. Focused on stunning visuals and highly reliable email routing so you never miss a booking.</p>
                              <div className="tech-stack-row">
                                  <span>Increase Bookings</span>
                                  <span>Reliable Email</span>
                                  <span>Stunning Design</span>
                              </div>
                          </div>
      
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
                                  <p className="work-description">Her previous website was failing to generate sales. I engineered a custom, lightning-fast WordPress platform with integrated local SEO and a secure payment gateway. Today, the business consistently ranks on Google and captures direct, automated client bookings.</p>
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
                                  <p className="work-description">The client was locked out of his previous website by a restrictive developer. I rebuilt his entire digital presence using custom WordPress, handing over 100% ownership of his domain, hosting, and code. I also implemented an aggressive SEO strategy to help him grow in the highly competitive Dubai market.</p>
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
                          <p className="section-kicker text-dark-muted">03 // UPFRONT PRICING</p>
                          <h2 className="scroll-fade-up">Transparent pricing.<br /><span className="text-brand">No hidden fees.</span></h2>
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
                              
                              <hr className="card-divider">
      
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Maximum loading speed</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Flawless mobile layout</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Technical SEO Foundation</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Zero ongoing maintenance</li>
                              </ul>
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
      
                              <hr className="card-divider">
                              
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Easy content management</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Full online store integration</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced SEO Configuration</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Secure payment gateways</li>
                              </ul>
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
      
                              <hr className="card-divider">
                              
                              <ul className="package-features">
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Enterprise-grade security</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Unrestricted custom design</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Elite performance metrics</li>
                                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom admin dashboard</li>
                              </ul>
                          </div>
      
                      </div>
      
                      
                      <div className="seo-upsell-block scroll-fade-up delay-450">
                          <div className="seo-upsell-content">
                              <h3>Already have a website? Need more traffic?</h3>
                              <p>In addition to web design, I offer dedicated Monthly SEO Campaigns. Whether I built your site or someone else did, I can optimize your platform to bring you more clients.</p>
                              <a href="/contact" className="btn-text-link text-brand">Get a Free SEO Audit ↗</a>
                          </div>
                      </div>
      
                  </section>
      
                  
                  <section className="container section-google-reviews">
                      <div className="section-label-block">
                          <p className="section-kicker text-dark-muted">04 // CLIENT TRUST</p>
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
                                  <p className="section-kicker text-dark-muted">05 // YOUR DEVELOPER</p>
                                  <h2 className="scroll-fade-up delay-150 about-title">The partner <br /><span className="text-brand">behind your growth.</span></h2>
                              </div>
                              <div className="about-text scroll-fade-up delay-300">
                                  <p>Hi, I’m Sanjeewa. I am an independent web developer based in Sri Lanka, dedicated to building high-converting websites for businesses across Australia, Europe, and worldwide.</p>
                                  
                                  <p>I understand that hiring an international developer can be stressful. My approach is built on clear communication, absolute reliability, and delivering exactly what I promise. While my technical foundation is backed by a Software Engineering degree from <strong className="text-dark-main">Cardiff Metropolitan University</strong>, my daily focus is entirely on solving your business problems. I handle the complex technology, so you can focus on running your business.</p>
                                  
                                  <p>I don't just write code; I build digital assets that help you grow. Whether we are launching a lightning-fast portfolio to showcase your work or a dynamic WordPress engine to capture local leads, my priority is getting you a return on your investment.</p>
                                  
                                  <p>When I step away from the keyboard, I focus on analog creativity—studying photography and the visual arts.</p>
                              </div>
                          </div>
                      </div>
                  </section>
      
                  
                  <section id="faq" className="container section-faq">
                      <div className="section-label-block centered mb-64">
                          <p className="section-kicker text-dark-muted">06 // PROJECT DETAILS</p>
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
                                  <p>Yes. Every website I build includes a strict Technical SEO foundation—meaning it is lightning-fast and mobile-optimized so Google can read it easily and rank you higher. We can also discuss ongoing monthly SEO campaigns if you want to aggressively outrank your local competitors.</p>
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
                          <h2 className="final-cta-title">Ready to get <span className="text-brand">more customers?</span></h2>
                          <p className="final-cta-text">Let's discuss your business goals and build a website that actually generates revenue.</p>
                          <a href="/contact" className="btn-brand">Get Your Free Consultation</a>
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
