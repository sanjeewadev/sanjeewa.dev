import "@/styles/case-study.css";
import ScrollReveal from "@/components/ScrollReveal";
import FaqInteractions from "@/components/FaqInteractions";

export const metadata = {
  title: "ElinaPix Case Study | French Riviera Event Photography Web Design",
  description: "See how I transformed a failing website into a high-converting WordPress booking platform for a French Riviera event photographer with perfect 100/100 SEO scores.",
  alternates: { canonical: "/elinapix-case-study" },
  openGraph: {
    title: "ElinaPix Case Study | French Riviera Event Photography Web Design",
    description: "See how I transformed a failing website into a high-converting WordPress booking platform for a French Riviera event photographer with perfect 100/100 SEO scores.",
    url: "/elinapix-case-study",
    type: "website",
    images: [{ url: "/og-image.png", alt: "Sanjeewa - Premium Web Development and Custom Website Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElinaPix Case Study | French Riviera Event Photography Web Design",
    description: "See how I transformed a failing website into a high-converting WordPress booking platform for a French Riviera event photographer with perfect 100/100 SEO scores.",
    images: ["/og-image.png"],
  },
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
      
      <ScrollReveal />
      <FaqInteractions />
    </>
  );
}
