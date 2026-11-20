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
    images: [{ url: "/assets/hero/premium-website-design-for-creative-studios.webp", alt: "Selected website work by Sanjeewa.dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Sanjeewa.dev",
    description:
      "Selected client websites and self-initiated website concepts designed and developed by Sanjeewa.",
    images: ["/assets/hero/premium-website-design-for-creative-studios.webp"],
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
    image: "/assets/elinapix-case-study/elinapix-full-website-desktop-preview.webp",
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
    image: "/assets/djchristerna-case-study/dj-christerna-full-website-desktop-preview.webp",
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
    alt: "Terrain Outdoor Co. homepage preview",
    preview: "terrain",
    liveUrl: "https://landscaping-hardscaping-pool-maintena.netlify.app/",
    tags: ["Next.js", "Responsive Design", "Multi-page"],
  },
  {
    number: "04",
    name: "Elara Vale",
    market: "Makeup Artistry · Bridal & Editorial",
    type: "Concept Website",
    summary:
      "An editorial makeup-artist concept built around bridal and occasion services, portfolio storytelling, artist positioning, client reassurance, and a calm enquiry journey.",
    image: "/assets/work/elara-vale-makeup-artist-preview.webp",
    alt: "Elara Vale makeup artist website homepage preview",
    preview: "elara",
    liveUrl: "https://makeup-artist-website-template.netlify.app/",
    tags: ["Editorial Design", "Service Portfolio", "Enquiry Flow"],
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

function BrowserBar({ label }) {
  return (
    <div className="work-browser-bar" aria-hidden="true">
      <span className="work-browser-dots"><i /><i /><i /></span>
      <span className="work-browser-address">{label}</span>
      <span className="work-browser-open">↗</span>
    </div>
  );
}

function ClientWebsitePreview({ project, eager }) {
  return (
    <Link
      className="work-page-media work-page-media-browser"
      href={project.caseStudy}
      aria-label={`View ${project.name} case study`}
    >
      <BrowserBar label={project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} />
      <div className="work-page-site-window work-page-site-screenshot">
        <img src={project.image} alt={project.alt} loading={eager ? "eager" : "lazy"} />
      </div>
      <span className="work-page-media-index">{project.number}</span>
      <span className="work-page-type work-page-type-client">{project.type}</span>
      <span className="work-page-view-hint">View project <b aria-hidden="true">↗</b></span>
    </Link>
  );
}

function ConceptWebsitePreview({ project }) {
  const isTerrain = project.preview === "terrain";
  const isElara = project.preview === "elara";
  const PreviewTag = project.liveUrl ? "a" : "div";
  const previewProps = project.liveUrl
    ? {
        href: project.liveUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open ${project.name} live demo`,
      }
    : {};

  return (
    <PreviewTag
      className={`work-page-media work-page-media-browser work-concept-preview ${isTerrain ? "work-concept-terrain" : isElara ? "work-concept-elara" : "work-concept-aurelia"}`}
      {...previewProps}
    >
      <BrowserBar
        label={
          project.liveUrl
            ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : `Concept preview · ${project.name}`
        }
      />
      <div className="work-page-site-window">
        {isElara ? (
          <img className="work-elara-preview" src={project.image} alt={project.alt} loading="lazy" />
        ) : (
          <>
            <img className="work-concept-backdrop" src={project.image} alt="" loading="lazy" />
            <div className="work-concept-shade" aria-hidden="true" />

            {isTerrain ? (
              <div className="work-mini-site work-mini-terrain" role="img" aria-label={project.alt}>
                <div className="work-mini-header">
                  <div className="work-mini-brand"><strong>Terrain</strong><span>Outdoor Co.</span></div>
                  <div className="work-mini-nav" aria-hidden="true"><span>Services</span><span>Projects</span><span>About</span></div>
                  <span className="work-mini-action">Free estimate ↗</span>
                </div>
                <div className="work-mini-hero-copy">
                  <p>Landscape · Hardscape · Pool Care</p>
                  <h4>Outdoor spaces,<br /><em>thoughtfully built.</em></h4>
                  <span>Design, build, and care brought together with one consistent standard.</span>
                  <div><b>Request a free estimate ↗</b><small>Explore our work ↓</small></div>
                </div>
                <div className="work-mini-rail" aria-hidden="true"><span>Design + build + care</span><span>Austin, Texas</span><span>Residential outdoor environments</span></div>
              </div>
            ) : (
              <div className="work-mini-site work-mini-aurelia" role="img" aria-label={project.alt}>
                <div className="work-mini-header">
                  <div className="work-mini-brand"><strong>Aurelia</strong><span>Motorcoach</span></div>
                  <div className="work-mini-nav" aria-hidden="true"><span>Our Fleet</span><span>Destinations</span><span>How It Works</span></div>
                  <span className="work-mini-action">Send an enquiry ↗</span>
                </div>
                <div className="work-mini-hero-copy">
                  <p>Private motorcoach journeys · American West</p>
                  <h4>The road is<br /><em>yours.</em></h4>
                  <span>Travel privately. Stay longer. Take the extraordinary route.</span>
                  <div><b>Explore the journey ↓</b></div>
                </div>
                <div className="work-mini-rail" aria-hidden="true"><span>01 · Featured coach</span><strong>The Signature 45</strong><span>Sleeps 4 · Seats 6 · 45 ft</span></div>
              </div>
            )}
          </>
        )}
      </div>
      <span className="work-page-media-index">{project.number}</span>
      <span className="work-page-type work-page-type-concept">{project.type}</span>
      <span className={project.liveUrl ? "work-page-view-hint" : "work-page-preview-label"}>
        {project.liveUrl ? <>View live demo <b aria-hidden="true">↗</b></> : "Website preview"}
      </span>
    </PreviewTag>
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
                <ClientWebsitePreview project={project} eager={index === 0} />
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
                  <ConceptWebsitePreview project={project} />
                  <div className="work-page-card-body">
                    <div className="work-page-card-heading">
                      <div>
                        <p>{project.market}</p>
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                    <p className="work-page-summary">{project.summary}</p>
                    <ProjectTags tags={project.tags} />
                    {project.liveUrl ? (
                      <div className="work-page-actions work-page-actions-concept">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live Demo <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    ) : (
                      <div className="work-page-demo-note">
                        <span>Interactive multi-page concept</span>
                      </div>
                    )}
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
