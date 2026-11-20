import Link from "next/link";
import "@/styles/templates.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Website Templates | Sanjeewa.dev",
  description:
    "Explore a growing collection of polished website concepts for service businesses, creative professionals, and modern brands.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Website Templates | Sanjeewa.dev",
    description:
      "A growing collection of polished website concepts designed and developed by Sanjeewa.",
    url: "/templates",
    type: "website",
    images: [{ url: "/assets/hero/premium-website-design-for-creative-studios.webp", alt: "Website templates by Sanjeewa.dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Templates | Sanjeewa.dev",
    description:
      "A growing collection of polished website concepts designed and developed by Sanjeewa.",
    images: ["/assets/hero/premium-website-design-for-creative-studios.webp"],
  },
};

const templateProjects = [
  {
    number: "01",
    name: "Terrain Outdoor Co.",
    market: "Landscaping · Outdoor Services",
    type: "Template Concept",
    summary:
      "A complete premium service-business concept with dedicated Services, Projects, About, and Contact experiences, built for residential outdoor brands.",
    image:
      "https://images.unsplash.com/photo-1783125127199-860da9744dcc?auto=format&fit=crop&w=1800&q=84",
    alt: "Terrain Outdoor Co. homepage preview",
    preview: "terrain",
    liveUrl: "https://landscaping-hardscaping-pool-maintena.netlify.app/",
    tags: ["Next.js", "Responsive Design", "Multi-page"],
  },
  {
    number: "02",
    name: "Elara Vale",
    market: "Makeup Artistry · Bridal & Editorial",
    type: "Template Concept",
    summary:
      "An editorial makeup-artist concept with portfolio storytelling, services, journal content, enquiry handling, and a CMS-backed editing experience.",
    image: "/assets/work/elara-vale-makeup-artist-preview.webp",
    alt: "Elara Vale makeup artist website homepage preview",
    preview: "elara",
    liveUrl: "https://makeup-artist-website-template.netlify.app/",
    tags: ["Next.js", "Payload CMS", "Editorial Portfolio"],
  },
];

function ProjectTags({ tags }) {
  return (
    <div className="work-page-tags" aria-label="Template capabilities">
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

function TemplateWebsitePreview({ project }) {
  const isTerrain = project.preview === "terrain";
  const isElara = project.preview === "elara";

  return (
    <a
      className={`work-page-media work-page-media-browser work-concept-preview ${isTerrain ? "work-concept-terrain" : isElara ? "work-concept-elara" : ""}`}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} live demo`}
    >
      <BrowserBar label={project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")} />
      <div className="work-page-site-window">
        {isElara ? (
          <img className="work-elara-preview" src={project.image} alt={project.alt} loading="lazy" />
        ) : (
          <>
            <img className="work-concept-backdrop" src={project.image} alt="" loading="lazy" />
            <div className="work-concept-shade" aria-hidden="true" />
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
              <div className="work-mini-rail" aria-hidden="true">
                <span>Design + build + care</span><span>Austin, Texas</span><span>Residential outdoor environments</span>
              </div>
            </div>
          </>
        )}
      </div>
      <span className="work-page-media-index">{project.number}</span>
      <span className="work-page-type work-page-type-concept">{project.type}</span>
      <span className="work-page-view-hint">View live demo <b aria-hidden="true">↗</b></span>
    </a>
  );
}

export default function TemplatesPage() {
  return (
    <>
      <main className="work-page">
        <header className="work-page-hero">
          <div className="container work-page-hero-grid">
            <div className="work-page-hero-copy scroll-fade-up">
              <p className="section-kicker text-dark-muted">WEBSITE TEMPLATES</p>
              <h1>
                Polished website directions built for <span className="editorial-accent text-editorial-ink">real-world businesses.</span>
              </h1>
            </div>
            <div className="work-page-hero-aside scroll-fade-up delay-150">
              <p>
                A growing collection of self-initiated website concepts across different industries.
                Explore the live demos and imagine each direction adapted around a real brand,
                content, and business requirements.
              </p>
              <div className="work-page-legend" aria-label="Template guide">
                <span><i className="legend-dot legend-dot-concept" aria-hidden="true" /> Live concept demos</span>
              </div>
            </div>
          </div>
        </header>

        <section className="work-page-concepts" aria-labelledby="templates-title">
          <div className="container">
            <div className="work-page-section-heading work-page-section-heading-dark">
              <div>
                <p className="section-kicker">01 // LIVE TEMPLATES</p>
                <h2 id="templates-title">Explore the direction. <span className="editorial-accent">Open the real build.</span></h2>
              </div>
              <p>
                These are concept websites rather than client claims. Each one is designed as a
                polished starting direction that can be adapted around a real business.
              </p>
            </div>

            <div className="work-page-grid work-page-grid-concepts">
              {templateProjects.map((project, index) => (
                <article
                  className="work-page-card work-page-card-concept scroll-fade-up"
                  key={project.name}
                  style={{ transitionDelay: index ? "120ms" : "0ms" }}
                >
                  <TemplateWebsitePreview project={project} />
                  <div className="work-page-card-body">
                    <div className="work-page-card-heading">
                      <div>
                        <p>{project.market}</p>
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                    <p className="work-page-summary">{project.summary}</p>
                    <ProjectTags tags={project.tags} />
                    <div className="work-page-actions work-page-actions-concept">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live Demo <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container work-page-principles" aria-labelledby="template-principles-title">
          <div className="work-page-principles-heading">
            <p className="section-kicker text-dark-muted">HOW TO USE THEM</p>
            <h2 id="template-principles-title">A strong starting point.<br />Not a boxed-in theme.</h2>
          </div>
          <div className="work-page-principles-grid">
            {[
              ["01", "Choose a direction", "Start with a visual and structural direction that already fits the kind of business you want to build for."],
              ["02", "Adapt the brand", "Typography, color, imagery, copy, and identity can be reshaped around the real business."],
              ["03", "Adjust the scope", "Pages, CMS features, forms, booking flows, and content can expand or simplify around the project requirements."],
              ["04", "Launch it properly", "The final website is configured around the client’s own domain, content, integrations, and production needs."],
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
            <p className="section-kicker">LIKE A DIRECTION?</p>
            <h2>Let&apos;s adapt it around <span className="editorial-accent">your business.</span></h2>
          </div>
          <div>
            <p>
              Tell me which template caught your attention and what your business needs.
              The final website can be tailored around your own content, brand, and functionality.
            </p>
            <Link className="btn-brand" href="/contact">Tell Me About Your Website</Link>
          </div>
        </section>
      </main>
      <ScrollReveal />
    </>
  );
}
