import Link from "next/link";
import "@/styles/templates.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Website Templates | Sanjeewa.dev",
  description:
    "Explore polished live website concepts for service businesses and creative professionals, ready to adapt around a real brand and project scope.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Website Templates | Sanjeewa.dev",
    description:
      "A growing collection of polished live website concepts designed and developed by Sanjeewa.",
    url: "/templates",
    type: "website",
    images: [
      {
        url: "/assets/hero/premium-website-design-for-creative-studios.webp",
        alt: "Website templates by Sanjeewa.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Templates | Sanjeewa.dev",
    description:
      "A growing collection of polished live website concepts designed and developed by Sanjeewa.",
    images: ["/assets/hero/premium-website-design-for-creative-studios.webp"],
  },
};

const templates = [
  {
    number: "01",
    name: "Terrain Outdoor Co.",
    category: "Landscaping · Outdoor Services",
    description:
      "A premium multi-page website direction for landscaping, hardscaping, pool care, and outdoor-living businesses.",
    liveUrl: "https://landscaping-hardscaping-pool-maintena.netlify.app/",
    preview: "terrain",
    tags: ["Next.js", "Responsive", "Multi-page"],
  },
  {
    number: "02",
    name: "Elara Vale",
    category: "Makeup Artistry · Bridal & Editorial",
    description:
      "An editorial portfolio and service website with CMS-managed work, services, journal content, enquiries, and a refined beauty-led presentation.",
    liveUrl: "https://makeup-artist-website-template.netlify.app/",
    preview: "elara",
    tags: ["Next.js", "Payload CMS", "Editorial Portfolio"],
  },
];

function BrowserBar({ url }) {
  return (
    <div className="template-browser-bar" aria-hidden="true">
      <span className="template-browser-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="template-browser-address">
        {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
      </span>
      <span className="template-browser-open">↗</span>
    </div>
  );
}

function TerrainPreview() {
  return (
    <div className="template-site template-site-terrain" role="img" aria-label="Terrain Outdoor Co. homepage preview">
      <img
        className="template-terrain-photo"
        src="https://images.unsplash.com/photo-1783125127199-860da9744dcc?auto=format&fit=crop&w=1800&q=90"
        alt=""
        loading="lazy"
      />
      <div className="template-terrain-shade" aria-hidden="true" />

      <header className="template-mini-header">
        <div className="template-terrain-brand">
          <strong>Terrain</strong>
          <span>Outdoor Co.</span>
        </div>
        <nav aria-hidden="true">
          <span>Services</span>
          <span>Projects</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
        <span className="template-terrain-cta">Free estimate ↗</span>
      </header>

      <div className="template-terrain-copy">
        <p>Landscape · Hardscape · Pool Care</p>
        <h3>
          Outdoor spaces,
          <br />
          <em>thoughtfully built.</em>
        </h3>
        <span>
          Design, build, and care brought together with one consistent standard.
        </span>
        <div>
          <b>Request a free estimate ↗</b>
          <small>Explore our work ↓</small>
        </div>
      </div>

      <footer className="template-terrain-rail" aria-hidden="true">
        <span>Design + build + care</span>
        <span>Austin, Texas</span>
        <span>Residential outdoor environments</span>
      </footer>
    </div>
  );
}

function ElaraPreview() {
  return (
    <div className="template-site template-site-elara" role="img" aria-label="Elara Vale makeup artist homepage preview">
      <header className="template-elara-header">
        <div className="template-elara-brand">
          <strong>Elara Vale</strong>
          <span>MAKEUP ARTISTRY</span>
        </div>
        <nav aria-hidden="true">
          <span>Portfolio</span>
          <span>Services</span>
          <span>About</span>
          <span>Journal</span>
          <span>Contact</span>
        </nav>
        <span className="template-elara-cta">Check availability ↗</span>
      </header>

      <div className="template-elara-meta" aria-hidden="true">
        <span>Independent makeup artistry</span>
        <span>Colombo & destination bookings</span>
      </div>

      <div className="template-elara-layout">
        <div className="template-elara-copy">
          <p>Bridal / Editorial / Occasion</p>
          <h3>Beauty,<br />shaped with<br />intention.</h3>
          <span>
            Refined makeup for weddings, portraits, campaigns, and modern occasions—created
            to feel considered, personal, and recognisably you.
          </span>
          <div>
            <b>View selected work ↗</b>
            <small>Read the approach →</small>
          </div>
        </div>

        <figure className="template-elara-visual">
          <img
            src="https://images.pexels.com/photos/39974656/pexels-photo-39974656.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            loading="lazy"
          />
          <figcaption>
            <span>Elara Vale</span>
            <small>Bridal & Editorial Makeup</small>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

function TemplatePreview({ project }) {
  return (
    <a
      className="template-preview"
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} live demo`}
    >
      <BrowserBar url={project.liveUrl} />
      <div className="template-preview-window">
        {project.preview === "terrain" ? <TerrainPreview /> : <ElaraPreview />}
      </div>
      <span className="template-badge">Live template</span>
      <span className="template-index">{project.number}</span>
      <span className="template-hover-cta">
        View live demo <b aria-hidden="true">↗</b>
      </span>
    </a>
  );
}

export default function TemplatesPage() {
  return (
    <>
      <main className="templates-page">
        <header className="templates-hero">
          <div className="container templates-hero-grid">
            <div className="templates-hero-copy scroll-fade-up">
              <p className="section-kicker text-dark-muted">WEBSITE TEMPLATES</p>
              <h1>
                A starting point that already feels{" "}
                <span className="editorial-accent text-editorial-ink">considered.</span>
              </h1>
            </div>

            <div className="templates-hero-aside scroll-fade-up delay-150">
              <p>
                A growing collection of polished live website concepts for different
                industries. Choose a direction you like, then adapt the brand, content,
                pages, and functionality around the real business.
              </p>
              <div className="templates-hero-note">
                <span>Live demos</span>
                <span>Responsive builds</span>
                <span>Customisable scope</span>
              </div>
            </div>
          </div>
        </header>

        <section className="templates-gallery" aria-labelledby="templates-gallery-title">
          <div className="container">
            <div className="templates-gallery-heading">
              <div>
                <p className="section-kicker">01 // LIVE BUILDS</p>
                <h2 id="templates-gallery-title">
                  See the website.
                  <br />
                  <span className="editorial-accent">Then imagine your version.</span>
                </h2>
              </div>
              <p>
                These are self-initiated concept builds, not client claims. Each demo is a
                working website and can be reshaped around a different brand, content set,
                feature list, and production setup.
              </p>
            </div>

            <div className="templates-grid">
              {templates.map((project, index) => (
                <article
                  className="template-card scroll-fade-up"
                  key={project.name}
                  style={{ transitionDelay: index ? "120ms" : "0ms" }}
                >
                  <TemplatePreview project={project} />

                  <div className="template-card-body">
                    <div className="template-card-title">
                      <div>
                        <p>{project.category}</p>
                        <h3>{project.name}</h3>
                      </div>
                      <span>{project.number}</span>
                    </div>

                    <p className="template-description">{project.description}</p>

                    <div className="template-tags" aria-label={`${project.name} capabilities`}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      className="template-live-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container templates-adapt" aria-labelledby="adapt-title">
          <div className="templates-adapt-heading">
            <p className="section-kicker text-dark-muted">HOW IT WORKS</p>
            <h2 id="adapt-title">
              Start with the direction.
              <br />
              Make the final site yours.
            </h2>
          </div>

          <div className="templates-adapt-list">
            {[
              ["01", "Choose the visual direction", "Pick the template whose tone, layout, and level of polish feels closest to the business you want to build."],
              ["02", "Replace the demo identity", "Brand colors, typography, imagery, copy, services, and calls to action are adapted around the real business."],
              ["03", "Shape the functionality", "Pages, CMS editing, forms, portfolios, booking flows, payments, and other features are adjusted to the actual scope."],
              ["04", "Launch on the real setup", "The finished website is configured for the client’s own domain, hosting, analytics, integrations, and production content."],
            ].map(([number, title, copy]) => (
              <article className="scroll-fade-up" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container templates-cta scroll-fade-up">
          <div>
            <p className="section-kicker">LIKE ONE OF THESE DIRECTIONS?</p>
            <h2>
              Let&apos;s adapt it around{" "}
              <span className="editorial-accent">your business.</span>
            </h2>
          </div>
          <div>
            <p>
              Send me the template you like and a short note about what your website needs.
              The final build can be simplified, expanded, or restyled around your business.
            </p>
            <Link className="btn-brand" href="/contact">
              Tell Me About Your Website
            </Link>
          </div>
        </section>
      </main>
      <ScrollReveal />
    </>
  );
}
