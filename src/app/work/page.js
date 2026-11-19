import Link from "next/link";
import "@/styles/work.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Selected Work | Sanjeewa.dev",
  description:
    "Explore selected client websites and self-initiated website concepts by Sanjeewa, including projects for photography, entertainment, landscaping, and premium travel.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work | Sanjeewa.dev",
    description:
      "Selected client websites and self-initiated website concepts designed and developed by Sanjeewa.",
    url: "/work",
    type: "website",
    images: [{ url: "/og-image.png", alt: "Selected website work by Sanjeewa.dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Sanjeewa.dev",
    description:
      "Selected client websites and self-initiated website concepts designed and developed by Sanjeewa.",
    images: ["/og-image.png"],
  },
};

const clientProjects = [
  {
    number: "01",
    name: "ElinaPix",
    market: "Photography · French Riviera",
    type: "Client Project",
    summary:
      "A polished photography website rebuilt around stronger presentation, faster browsing, local visibility, and a clearer path from first impression to direct booking.",
    image: "/assets/Project/elinapix-photography-portfolio-website.webp",
    alt: "ElinaPix photography portfolio website for a French Riviera event photographer",
    caseStudy: "/elinapix-case-study",
    liveUrl: "https://elinapix.com",
    tags: ["Custom WordPress", "Local SEO", "Booking + Payments"],
  },
  {
    number: "02",
    name: "DJ Christerna",
    market: "Entertainment · Dubai",
    type: "Client Project",
    summary:
      "A clearer, fully owned website for an event professional, with stronger direct-enquiry flow, reliable email routing, and a better local-search foundation.",
    image: "/assets/Project/dj-christerna-dj-booking-website.webp",
    alt: "DJ Christerna custom booking website for a Dubai event professional",
    caseStudy: "/dj-christerna-case-study",
    liveUrl: "https://djchristerna.com/",
    tags: ["Custom WordPress", "Client Control", "Dubai SEO"],
  },
];

const conceptProjects = [
  {
    number: "03",
    name: "Terrain Outdoor Co.",
    market: "Landscaping · Outdoor Services",
    type: "Concept Website",
    summary:
      "A complete premium service-business concept with dedicated Services, Projects, About, and Contact experiences, built to demonstrate a high-end residential outdoor brand.",
    image:
      "https://images.unsplash.com/photo-1783125127199-860da9744dcc?auto=format&fit=crop&w=1800&q=84",
    alt: "Modern home with landscaped lawn, patio, and pool representing the Terrain Outdoor Co. website concept",
    tags: ["Next.js", "Responsive Design", "Multi-page"],
  },
  {
    number: "04",
    name: "Aurelia Motorcoach",
    market: "Luxury Travel · Motorcoach Rental",
    type: "Concept Website",
    summary:
      "A cinematic premium-rental experience exploring fleet discovery, destinations, trip planning, and a reusable CMS-backed architecture for high-value service businesses.",
    image:
      "https://images.unsplash.com/photo-1699115836378-10957ad67c48?auto=format&fit=crop&w=1800&q=84",
    alt: "Luxury motorcoach in a dramatic travel setting representing the Aurelia Motorcoach website concept",
    tags: ["Next.js", "Payload CMS", "Premium UX"],
  },
];

function ProjectTags({ tags }) {
  return (
    <div className="work-page-tags" aria-label="Project capabilities">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <main className="work-page">
        <header className="work-page-hero">
          <div className="container work-page-hero-grid">
            <div className="work-page-hero-copy scroll-fade-up">
              <p className="section-kicker text-dark-muted">SELECTED WORK</p>
              <h1>
                Websites built to make the business <span className="editorial-accent text-editorial-ink">feel considered.</span>
              </h1>
            </div>
            <div className="work-page-hero-aside scroll-fade-up delay-150">
              <p>
                A curated mix of real client projects and self-initiated concepts
                across service businesses, creative professionals, and premium
                consumer experiences.
              </p>
              <div className="work-page-legend" aria-label="Project type guide">
                <span><i className="legend-dot legend-dot-client" aria-hidden="true" /> Client project</span>
                <span><i className="legend-dot legend-dot-concept" aria-hidden="true" /> Concept website</span>
              </div>
            </div>
          </div>
        </header>

        <section className="container work-page-section work-page-client-section" aria-labelledby="client-work-title">
          <div className="work-page-section-heading">
            <div>
              <p className="section-kicker text-dark-muted">01 // CLIENT WORK</p>
              <h2 id="client-work-title">Built for real businesses.<br /><span className="text-brand">Backed by real outcomes.</span></h2>
            </div>
            <p>
              These projects include the business context, implementation decisions,
              live websites, and the client-facing results behind the work.
            </p>
          </div>

          <div className="work-page-grid work-page-grid-client">
            {clientProjects.map((project, index) => (
              <article className="work-page-card scroll-fade-up" key={project.name} style={{ transitionDelay: index ? "120ms" : "0ms" }}>
                <Link className="work-page-media" href={project.caseStudy} aria-label={`View ${project.name} case study`}>
                  <img src={project.image} alt={project.alt} loading={index === 0 ? "eager" : "lazy"} />
                  <span className="work-page-media-index">{project.number}</span>
                  <span className="work-page-type work-page-type-client">{project.type}</span>
                </Link>
                <div className="work-page-card-body">
                  <div className="work-page-card-heading">
                    <div>
                      <p>{project.market}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p className="work-page-summary">{project.summary}</p>
                  <ProjectTags tags={project.tags} />
                  <div className="work-page-actions">
                    <Link href={project.caseStudy}>View Case Study <span aria-hidden="true">→</span></Link>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Website <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-page-concepts" aria-labelledby="concept-work-title">
          <div className="container">
            <div className="work-page-section-heading work-page-section-heading-dark">
              <div>
                <p className="section-kicker">02 // SELECTED CONCEPTS</p>
                <h2 id="concept-work-title">Exploring what a stronger digital presence <span className="editorial-accent">could feel like.</span></h2>
              </div>
              <p>
                Self-initiated website concepts built to explore industries, visual
                directions, content systems, and higher-end frontend experiences.
                They are clearly presented as concepts—not client claims.
              </p>
            </div>

            <div className="work-page-grid work-page-grid-concepts">
              {conceptProjects.map((project, index) => (
                <article className="work-page-card work-page-card-concept scroll-fade-up" key={project.name} style={{ transitionDelay: index ? "120ms" : "0ms" }}>
                  <div className="work-page-media">
                    <img src={project.image} alt={project.alt} loading="lazy" />
                    <span className="work-page-media-index">{project.number}</span>
                    <span className="work-page-type work-page-type-concept">{project.type}</span>
                  </div>
                  <div className="work-page-card-body">
                    <div className="work-page-card-heading">
                      <div>
                        <p>{project.market}</p>
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                    <p className="work-page-summary">{project.summary}</p>
                    <ProjectTags tags={project.tags} />
                    <p className="work-page-demo-note">
                      Live demo link will be connected once the deployment URL is confirmed.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container work-page-principles" aria-labelledby="work-principles-title">
          <div className="work-page-principles-heading">
            <p className="section-kicker text-dark-muted">THE STANDARD</p>
            <h2 id="work-principles-title">Different industries.<br />The same core priorities.</h2>
          </div>
          <div className="work-page-principles-grid">
            {[
              ["01", "Clear positioning", "The first screen should make the business, offer, and next step easy to understand."],
              ["02", "Responsive by default", "Layouts are designed to hold their hierarchy and usability across desktop, tablet, and mobile."],
              ["03", "Performance-conscious", "Visual ambition is balanced with practical loading, image handling, and maintainable implementation."],
              ["04", "Built around action", "Every project should guide the right visitor toward an enquiry, booking, purchase, or useful next step."],
            ].map(([number, title, copy]) => (
              <article className="scroll-fade-up" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container work-page-cta scroll-fade-up">
          <div>
            <p className="section-kicker">HAVE A PROJECT IN MIND?</p>
            <h2>Let&apos;s build something that feels <span className="editorial-accent">right for your business.</span></h2>
          </div>
          <div>
            <p>
              Tell me what you are building, improving, or trying to make easier
              for your customers. You do not need a technical brief.
            </p>
            <Link className="btn-brand" href="/contact">Tell Me About Your Website</Link>
          </div>
        </section>
      </main>
      <ScrollReveal />
    </>
  );
}
