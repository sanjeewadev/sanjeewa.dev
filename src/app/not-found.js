import "@/styles/404.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "404 - Page Not Found | Sanjeewa.dev",
  description: "Oops! The page you are looking for does not exist.",
  alternates: { canonical: "/" },
  openGraph: { title: "404 - Page Not Found | Sanjeewa.dev", description: "Oops! The page you are looking for does not exist.", url: "/", type: "website", images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }] },
  twitter: { card: "summary_large_image", title: "404 - Page Not Found | Sanjeewa.dev", description: "Oops! The page you are looking for does not exist.", images: ["/og-image.png"] },
};

export default function NotFound() {
  return (
    <>
      <main className="error-page">
              <div className="container error-container text-center scroll-fade-up">
                  
                  <h1 className="error-code text-brand">404</h1>
                  <h2 className="error-title">Page Not Found</h2>
                  
                  <p className="error-text text-dark-muted">
                      Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
                  </p>
                  
                  <div className="error-action mt-32">
                      <a href="/" className="btn-brand">Return to Homepage</a>
                  </div>
      
              </div>
          </main>
      <ScrollReveal />
    </>
  );
}
