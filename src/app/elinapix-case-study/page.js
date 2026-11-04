import "@/styles/case-study.css";
import ScrollReveal from "@/components/ScrollReveal";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "ElinaPix Case Study | French Riviera Event Photography Web Design",
  description: "See how I transformed a failing website into a high-converting WordPress booking platform for a French Riviera event photographer with perfect 100/100 SEO scores.",
  alternates: { canonical: "/elinapix-case-study" },
  openGraph: { title: "ElinaPix Case Study | French Riviera Event Photography Web Design", description: "See how I transformed a failing website into a high-converting WordPress booking platform for a French Riviera event photographer with perfect 100/100 SEO scores.", url: "/elinapix-case-study", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "ElinaPix Case Study | French Riviera Event Photography Web Design", description: "See how I transformed a failing website into a high-converting WordPress booking platform for a French Riviera event photographer with perfect 100/100 SEO scores.", images: ["/og-image.png"] },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Case Study: High-Converting Photography Website for ElinaPix",
      "author": {
        "@type": "Person",
        "name": "Sanjeewa Vipula Kumara"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sanjeewa.dev"
      },
      "description": "How a custom WordPress build and technical SEO helped a French Riviera event photographer capture direct, automated bookings."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is website speed important for a photography portfolio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Photography websites usually load very slowly because of large, high-resolution images. By optimizing the images and writing clean custom code, I achieved a perfect 100/100 Google Lighthouse score, ensuring visitors stay on the page and book services."
          }
        },
        {
          "@type": "Question",
          "name": "Can a WordPress website have automated payment gateways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For ElinaPix, I integrated a secure, automated payment gateway directly into her custom WordPress platform, allowing clients to book and pay for event photography without manual invoicing."
          }
        }
      ]
    }
  ]
};

export default function ElinaPixCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <main className="case-study-page">
              
              <header className="cs-hero-split">
                  <div className="container cs-hero-split-grid">
                      
                      <div className="cs-hero-content-left scroll-fade-up">
                          <p className="section-kicker text-dark-muted">PROJECT HIGHLIGHT</p>
                          <h1 className="cs-title">ElinaPix Photography</h1>
                          <p className="cs-subtitle text-dark-muted">From zero website sales to automated client bookings in the French Riviera.</p>
                          
                          <div className="cs-meta-grid-left">
                              <div className="meta-item">
                                  <span className="meta-label">Client Focus</span>
                                  <span className="meta-value">Event Photography</span>
                              </div>
                              <div className="meta-item">
                                  <span className="meta-label">Location</span>
                                  <span className="meta-value">French Riviera, Europe</span>
                              </div>
                              <div className="meta-item">
                                  <span className="meta-label">Tech Stack</span>
                                  <span className="meta-value">Custom WordPress + Stripe</span>
                              </div>
                          </div>
      
                          <div className="cs-hero-action-left mt-32">
                              <a href="https://elinapix.com" target="_blank" rel="noopener" className="btn-brand">Visit Live Website ↗</a>
                          </div>
                      </div>
      
                      <div className="cs-hero-visual-right scroll-fade-up delay-150">
                          <div className="cs-vertical-image-wrapper">
                              <img src="/assets/Project/elinapix-photography-portfolio-website.webp" alt="ElinaPix Custom Photography Website Interface" className="cs-vertical-image" />
                          </div>
                      </div>
      
                  </div>
              </header>
      
              <section className="container cs-visual-section scroll-fade-up delay-150">
                  <div className="cs-main-image-wrapper">
                      <img src="/assets/elinapix-case-study/elinapix-full-website-desktop-preview.webp" alt="ElinaPix Custom Photography Website Design Displayed on Laptop" className="cs-main-image" />
                  </div>
              </section>
      
              <section className="container cs-story-section">
                  <div className="cs-story-grid">
                      
                      <div className="story-block scroll-fade-up">
                          <h2 className="text-brand">The Challenge</h2>
                          <p>Elina is an incredibly talented event photographer operating in the highly competitive French Riviera market. However, her previous website was failing her business. It was built poorly, ran slowly due to heavy image files, and completely failed to generate any sales or direct client leads through search engines.</p>
                      </div>
      
                      <div className="story-block scroll-fade-up delay-150">
                          <h2 className="text-brand">The Engineering Solution</h2>
                          <p>I tore down the old site and architected a completely custom WordPress platform built for speed and conversion.</p>
                          <ul className="cs-solution-list">
                              <li><strong>Performance:</strong> Implemented aggressive image optimization to keep high-res galleries loading instantly.</li>
                              <li><strong>Local SEO Strategy:</strong> Structured the data and content to rank specifically for French Riviera event photography on Google.</li>
                              <li><strong>Automated Revenue:</strong> Integrated a highly reliable contact system and a secure payment gateway so clients can book directly.</li>
                          </ul>
                      </div>
      
                  </div>
              </section>
      
              <section className="container cs-visual-tour scroll-fade-up">
                  <div className="section-label-block centered mb-64">
                      <p className="section-kicker text-dark-muted">PLATFORM INTERFACE</p>
                      <h2>High-Performance <span className="text-brand">Design.</span></h2>
                  </div>
                  
                  <div className="modular-gallery-grid">
                      <div className="gallery-item scroll-fade-up delay-0">
                          <img src="/assets/elinapix-case-study/elinapix-custom-about-page-design-and-footer.webp" alt="ElinaPix custom about page design featuring photographer profile and seamless footer integration" />
                      </div>
                      
                      <div className="gallery-item scroll-fade-up delay-100">
                          <img src="/assets/elinapix-case-study/elinapix-custom-contact-form-and-booking-page.webp" alt="ElinaPix custom WordPress contact form and automated booking page for event photography" />
                      </div>
                      
                      <div className="gallery-item scroll-fade-up delay-200">
                          <img src="/assets/elinapix-case-study/elinapix-monaco-luxury-event-photography-services.webp" alt="ElinaPix luxury event photography services showcase for Monaco and French Riviera" />
                      </div>
      
                      <div className="gallery-item scroll-fade-up delay-300">
                          <img src="/assets/elinapix-case-study/elinapix-photographer-profile-and-portfolio-introduction.webp" alt="ElinaPix professional photographer profile and luxury portfolio introduction layout" />
                      </div>
      
                      <div className="gallery-item scroll-fade-up delay-400">
                          <img src="/assets/elinapix-case-study/elinapix-photography-awards-and-client-reviews-section.webp" alt="ElinaPix photography awards recognition and five-star client Google reviews section" />
                      </div>
                  </div>
              </section>
      
              <section className="cs-proof-section">
                  <div className="container">
                      <div className="section-label-block centered mb-64">
                          <h2 className="scroll-fade-up">The <span className="text-brand">Results.</span></h2>
                      </div>
      
                      <div className="metrics-grid scroll-fade-up">
                          <div className="metric-card">
                              <div className="metric-circle score-perfect">100</div>
                              <h3>Performance Score</h3>
                              <p>Perfect Google Lighthouse mobile loading speed.</p>
                          </div>
                          <div className="metric-card">
                              <div className="metric-circle score-perfect">100</div>
                              <h3>SEO Score</h3>
                              <p>Flawless technical search engine optimization.</p>
                          </div>
                          <div className="metric-card">
                              <div className="metric-circle score-perfect">100</div>
                              <h3>Best Practices</h3>
                              <p>Elite security and modern code standards.</p>
                          </div>
                      </div>
      
                      <div className="cs-testimonial-wrapper scroll-fade-up delay-150">
                          <div className="google-review-card featured-review">
                              <div className="review-header">
                                  <div className="reviewer-info">
                                      <div className="reviewer-avatar pink-bg">E</div>
                                      <div className="reviewer-details">
                                          <span className="reviewer-name">Elina Kabakova</span>
                                          <div className="review-stars">★★★★★</div>
                                      </div>
                                  </div>
                                  <div className="google-logo">
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="24" height="24" />
                                  </div>
                              </div>
                              <p className="review-text">"I’m happy with the work done by Sanjeewa. The website looks aesthetically beautiful and elegant, exactly as I envisioned. The entire project was handled with a high level of professionalism, and I truly appreciate the attention to detail. Highly recommended!"</p>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              <section className="container section-faq">
                  <div className="section-label-block centered mb-64">
                      <p className="section-kicker text-dark-muted">PROJECT DETAILS</p>
                      <h2 className="scroll-fade-up">Technical <span className="text-brand">Insights.</span></h2>
                  </div>
      
                  <div className="faq-container">
                      
                      <div className="faq-item scroll-fade-up delay-0">
                          <button className="faq-question">
                              <span>Why is website speed important for a photography portfolio?</span>
                              <div className="faq-icon">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              </div>
                          </button>
                          <div className="faq-answer">
                              <p>Photography websites usually load very slowly because of large, high-resolution images. By applying advanced image compression algorithms and writing lightweight custom code, I achieved a perfect 100/100 Google speed score. This ensures visitors do not leave the site out of frustration before seeing her work.</p>
                          </div>
                      </div>
      
                      <div className="faq-item scroll-fade-up delay-100">
                          <button className="faq-question">
                              <span>Can a custom WordPress website have automated payments?</span>
                              <div className="faq-icon">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              </div>
                          </button>
                          <div className="faq-answer">
                              <p>Absolutely. For this project, I integrated a highly secure payment gateway directly into the WordPress infrastructure. This allows international clients to book and pay for event photography instantly, saving the business owner hours of manual invoicing.</p>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              <section className="container section-final-cta scroll-fade-up">
                  <div className="final-cta-content">
                      <h2 className="final-cta-title">Want results like <span className="text-brand">ElinaPix?</span></h2>
                      <p className="final-cta-text">Stop losing customers to slow, broken websites. Let's build a custom platform that actually grows your business.</p>
                      <a href="/contact" className="btn-brand">Get Your Free Consultation</a>
                  </div>
              </section>
      
          </main>
      <ScrollReveal />
      <FaqInteractions />
    </>
  );
}
