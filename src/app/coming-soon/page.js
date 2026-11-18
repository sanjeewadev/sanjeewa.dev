import "@/styles/coming-soon.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Coming Soon | Sanjeewa.dev",
  description: "This page is currently under development. Check back soon for the full experience.",
  alternates: { canonical: "/coming-soon" },
  robots: { index: false, follow: false },
  openGraph: { title: "Coming Soon | Sanjeewa.dev", description: "This page is currently under development. Check back soon for the full experience.", url: "/coming-soon", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "Coming Soon | Sanjeewa.dev", description: "This page is currently under development. Check back soon for the full experience.", images: ["/og-image.png"] },
};

export default function ComingSoon() {
  return (
    <>
      <main className="wip-page">
              <div className="container wip-container text-center scroll-fade-up">
                  
                  <div className="status-badge">
                      <span className="pulse-dot"></span>
                      <span className="status-text">In Development</span>
                  </div>
                  
                  <h1 className="wip-title">Currently <span className="text-brand">Crafting.</span></h1>
                  
                  <p className="wip-text text-dark-muted">
                      This page is not ready yet. Please check back later or return to the homepage.
                  </p>
                  
                  <div className="wip-action mt-32">
                      <a href="/" className="btn-brand">Return to Homepage</a>
                  </div>
      
              </div>
          </main>
      <ScrollReveal />
    </>
  );
}
