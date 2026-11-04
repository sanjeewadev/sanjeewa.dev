import "@/styles/case-study.css";
import ScrollReveal from "@/components/ScrollReveal";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "DJ Christerna Case Study | Dubai DJ Website Design & SEO",
  description: "How I rescued a Dubai DJ from a restrictive developer, built a custom WordPress booking platform, and delivered 100% digital ownership and top-tier SEO.",
  alternates: { canonical: "/dj-christerna-case-study" },
  openGraph: { title: "DJ Christerna Case Study | Dubai DJ Website Design & SEO", description: "How I rescued a Dubai DJ from a restrictive developer, built a custom WordPress booking platform, and delivered 100% digital ownership and top-tier SEO.", url: "/dj-christerna-case-study", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "DJ Christerna Case Study | Dubai DJ Website Design & SEO", description: "How I rescued a Dubai DJ from a restrictive developer, built a custom WordPress booking platform, and delivered 100% digital ownership and top-tier SEO.", images: ["/og-image.png"] },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Case Study: Custom Booking Website for DJ Christerna in Dubai",
      "author": {
        "@type": "Person",
        "name": "Sanjeewa Vipula Kumara"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sanjeewa.dev"
      },
      "description": "Providing 100% digital ownership, custom email routing, and local SEO for a Dubai-based DJ."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is it important to own your own website domain and hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many site builders or restrictive developers lock clients out of their own assets. By building with custom WordPress on independent hosting, I ensure business owners have 100% legal ownership and administrative control over their digital presence."
          }
        },
        {
          "@type": "Question",
          "name": "Do DJs and entertainers need automated booking systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A professional automated booking system with dedicated email server routing ensures that an entertainer never misses a gig inquiry while traveling or performing."
          }
        }
      ]
    }
  ]
};

export default function DjChristernaCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <main className="case-study-page">
              
              <header className="cs-hero-split">
                  <div className="container cs-hero-split-grid">
                      
                      <div className="cs-hero-content-left scroll-fade-up">
                          <p className="section-kicker text-dark-muted">PROJECT HIGHLIGHT</p>
                          <h1 className="cs-title">DJ Christerna</h1>
                          <p className="cs-subtitle text-dark-muted">Reclaiming digital ownership and automating event bookings in Dubai.</p>
                          
                          <div className="cs-meta-grid-left">
                              <div className="meta-item">
                                  <span className="meta-label">Client Focus</span>
                                  <span className="meta-value">Entertainment & Events</span>
                              </div>
                              <div className="meta-item">
                                  <span className="meta-label">Location</span>
                                  <span className="meta-value">Dubai, UAE</span>
                              </div>
                              <div className="meta-item">
                                  <span className="meta-label">Tech Stack</span>
                                  <span className="meta-value">Custom WordPress + Email Routing</span>
                              </div>
                          </div>
      
                          <div className="cs-hero-action-left mt-32">
                              <a href="https://djchristerna.com/" target="_blank" rel="noopener" className="btn-brand">Visit Live Website ↗</a>
                          </div>
                      </div>
      
                      <div className="cs-hero-visual-right scroll-fade-up delay-150">
                          <div className="cs-vertical-image-wrapper">
                              <img src="/assets/Project/dj-christerna-dj-booking-website.webp" alt="DJ Christerna Custom Website Design Dubai" className="cs-vertical-image" />
                          </div>
                      </div>
      
                  </div>
              </header>
      
              <section className="container cs-visual-section scroll-fade-up delay-150">
                  <div className="cs-main-image-wrapper">
                      <img src="/assets/djchristerna-case-study/dj-christerna-full-website-desktop-preview.webp" alt="DJ Christerna full website layout and event gallery" className="cs-main-image" />
                  </div>
              </section>
      
              <section className="container cs-story-section">
                  <div className="cs-story-grid">
                      
                      <div className="story-block scroll-fade-up">
                          <h2 className="text-brand">The Challenge</h2>
                          <p>Chris is an emerging DJ in the highly competitive Dubai nightlife market, but he was trapped. He had paid a previous developer for a website built on a restrictive site builder, but was completely locked out. He didn't own his domain, couldn't access his own site, and had no way to update his event schedule or receive direct bookings.</p>
                      </div>
      
                      <div className="story-block scroll-fade-up delay-150">
                          <h2 className="text-brand">The Engineering Solution</h2>
                          <p>I rescued his digital presence by building a completely independent, custom WordPress architecture from the ground up.</p>
                          <ul className="cs-solution-list">
                              <li><strong>100% Digital Ownership:</strong> Secured his domain and hosting, handing over full administrative rights so he can never be locked out again.</li>
                              <li><strong>Automated Bookings:</strong> Developed a seamless inquiry system with custom email server configurations so he never misses a high-paying gig.</li>
                              <li><strong>Aggressive Dubai SEO:</strong> Implemented a targeted local SEO strategy to help him rank above the noise in the UAE entertainment industry.</li>
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
                          <img src="/assets/djchristerna-case-study/dj-christerna-custom-booking-form-and-contact-page.webp" alt="DJ Christerna custom WordPress booking form and contact page design" />
                      </div>
                      
                      <div className="gallery-item scroll-fade-up delay-100">
                          <img src="/assets/djchristerna-case-study/dj-christerna-dubai-music-genres-and-services-section.webp" alt="DJ Christerna Dubai music genres and premium DJ services section UI" />
                      </div>
                      
                      <div className="gallery-item scroll-fade-up delay-200">
                          <img src="/assets/djchristerna-case-study/dj-christerna-professional-about-page-design.webp" alt="DJ Christerna professional about page design and biography layout" />
                      </div>
      
                      <div className="gallery-item scroll-fade-up delay-300">
                          <img src="/assets/djchristerna-case-study/dj-christerna-yacht-and-wedding-dj-services-layout.webp" alt="Luxury yacht party and wedding DJ services layout for Dubai events" />
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
                              <h3>Total Ownership</h3>
                              <p>100% control over domain, hosting, and code.</p>
                          </div>
                          <div className="metric-card">
                              <div className="metric-circle score-perfect">100</div>
                              <h3>SEO Score</h3>
                              <p>Optimized perfectly for Dubai Google searches.</p>
                          </div>
                          <div className="metric-card">
                              <div className="metric-circle score-perfect">100</div>
                              <h3>Uptime & Delivery</h3>
                              <p>Flawless email routing and server stability.</p>
                          </div>
                      </div>
      
                      <div className="cs-testimonial-wrapper scroll-fade-up delay-150">
                          <div className="google-review-card featured-review">
                              <div className="review-header">
                                  <div className="reviewer-info">
                                      <div className="reviewer-avatar" style={{ backgroundColor: "#1a73e8", color: "white" }}>C</div>
                                      <div className="reviewer-details">
                                          <span className="reviewer-name">Chris (DJ Christerna)</span>
                                          <div className="review-stars">★★★★★</div>
                                      </div>
                                  </div>
                                  <div className="google-logo">
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" width="24" height="24" />
                                  </div>
                              </div>
                              <p className="review-text">"Wow this is amazing knowing how this guy building website for me
      He amazing he knows the work🙌🏿👍🏼"</p>
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
                              <span>Why is it important to own your own website domain?</span>
                              <div className="faq-icon">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              </div>
                          </button>
                          <div className="faq-answer">
                              <p>Many "drag-and-drop" site builders or restrictive agencies keep legal ownership of your domain name to lock you into their services. By building a custom WordPress site on independent hosting, I guarantee my clients have 100% legal and administrative control over their digital business assets.</p>
                          </div>
                      </div>
      
                      <div className="faq-item scroll-fade-up delay-100">
                          <button className="faq-question">
                              <span>How does a custom email server setup help an entertainer?</span>
                              <div className="faq-icon">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              </div>
                          </button>
                          <div className="faq-answer">
                              <p>Standard website contact forms often send inquiries straight to a client's spam folder. I configured dedicated email routing for DJ Christerna to ensure that every time a club or event promoter requests a booking, the notification hits his inbox instantly, securing the gig.</p>
                          </div>
                      </div>
      
                  </div>
              </section>
      
              <section className="container section-final-cta scroll-fade-up">
                  <div className="final-cta-content">
                      <h2 className="final-cta-title">Want results like <span className="text-brand">DJ Christerna?</span></h2>
                      <p className="final-cta-text">Stop renting your website from restrictive developers. Let's build a platform that you actually own.</p>
                      <a href="/contact" className="btn-brand">Get Your Free Consultation</a>
                  </div>
              </section>
      
          </main>
      <ScrollReveal />
      <FaqInteractions />
    </>
  );
}
