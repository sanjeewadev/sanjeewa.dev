import "@/styles/case-study.css";
import ScrollReveal from "@/components/ScrollReveal";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "DJ Christerna Case Study | Dubai DJ Website Design & SEO",
  description: "How I rescued a Dubai DJ from a restrictive developer, built a custom WordPress booking platform, and delivered 100% digital ownership and top-tier SEO.",
  alternates: { canonical: "/dj-christerna-case-study" },
  openGraph: {
    title: "DJ Christerna Case Study | Dubai DJ Website Design & SEO",
    description: "How I rescued a Dubai DJ from a restrictive developer, built a custom WordPress booking platform, and delivered 100% digital ownership and top-tier SEO.",
    url: "/dj-christerna-case-study",
    type: "website",
    images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Christerna Case Study | Dubai DJ Website Design & SEO",
    description: "How I rescued a Dubai DJ from a restrictive developer, built a custom WordPress booking platform, and delivered 100% digital ownership and top-tier SEO.",
    images: ["/og-image.png"],
  },
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
      
      <ScrollReveal />
      <FaqInteractions />
    </>
  );
}
