import "@/styles/home.css";
import ScrollReveal from "@/components/ScrollReveal";
import HomeInteractions from "@/components/HomeInteractions";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "Custom Website Design for Small Businesses | Freelance Web Developer",
  description: "Need a fast, stunning website? I am a freelance web developer building high-converting, custom websites for small businesses. Get more clients today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Custom Website Design for Small Businesses | Freelance Web Developer",
    description: "Need a fast, stunning website? I am a freelance web developer building high-converting, custom websites for small businesses. Get more clients today.",
    url: "/",
    type: "website",
    images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Design for Small Businesses | Freelance Web Developer",
    description: "Need a fast, stunning website? I am a freelance web developer building high-converting, custom websites for small businesses. Get more clients today.",
    images: ["/og-image.png"],
  },
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
      
      <ScrollReveal />
      <HomeInteractions />
      <FaqInteractions />
    </>
  );
}
