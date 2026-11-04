import "@/styles/contact.css";
import ScrollReveal from "@/components/ScrollReveal";
import ContactInteractions from "@/components/ContactInteractions";

export const metadata = {
  title: "Hire a Freelance Web Developer | Get a Free Website Quote",
  description: "Ready to grow your business? Hire an expert freelance web developer for a high-converting, custom website. Request a free quote today. I reply within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hire a Freelance Web Developer | Get a Free Website Quote",
    description: "Ready to grow your business? Hire an expert freelance web developer for a high-converting, custom website. Request a free quote today. I reply within 24 hours.",
    url: "/contact",
    type: "website",
    images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire a Freelance Web Developer | Get a Free Website Quote",
    description: "Ready to grow your business? Hire an expert freelance web developer for a high-converting, custom website. Request a free quote today. I reply within 24 hours.",
    images: ["/og-image.png"],
  },
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
      
      <ScrollReveal />
      <ContactInteractions />
    </>
  );
}
