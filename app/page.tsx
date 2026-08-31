import { portfolio } from "../content/portfolio";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const mail = `mailto:${portfolio.email}`;

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top">
          <span>{portfolio.initials}</span>
          <small>{portfolio.name}</small>
        </a>

        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk <Arrow />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <i /> {portfolio.role} · {portfolio.location}
          </div>

          <h1>
            I build digital
            <br />
            products that <em>work.</em>
          </h1>

          <p>{portfolio.intro}</p>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <Arrow />
            </a>

            <a className="button ghost" href="#contact">
              Start a project
            </a>
          </div>
        </div>

        <div
          className={`hero-art ${
            portfolio.profileImage ? "has-photo" : ""
          }`}
          style={
            portfolio.profileImage
              ? {
                  backgroundImage: `url(${portfolio.profileImage})`,
                }
              : undefined
          }
        >
          {!portfolio.profileImage && (
            <>
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />

              <div className="code-card card-a">
                <span>API</span>
                <b>Connected</b>
                <i />
              </div>

              <div className="code-card card-b">
                <span>BUILD</span>
                <b>Reliable systems</b>
                <code>{"{ 01 }"}</code>
              </div>

              <div className="hero-monogram">
                {portfolio.initials}
              </div>
            </>
          )}

          <div className="availability">
            <i /> {portfolio.availability}
          </div>
        </div>
      </section>

      <section className="ticker">
        <div>
          WEB APPLICATIONS <span>✦</span>
          MOBILE SOLUTIONS <span>✦</span>
          BACKEND SYSTEMS <span>✦</span>
          API INTEGRATION <span>✦</span>
          BUSINESS AUTOMATION
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="section-label">// ABOUT ME</div>

        <div className="about-grid">
          <h2>
            Technology should solve
            <br />
            <em>real problems.</em>
          </h2>

          <div className="about-copy">
            {portfolio.about.map((text) => (
              <p key={text}>{text}</p>
            ))}

            <a href="#contact">
              More about working with me <Arrow />
            </a>
          </div>
        </div>

        <div className="tech-row">
          {portfolio.technologies.map((item) => (
            <div key={item.title}>
              <span>{item.title}</span>
              <p>{item.list}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="section-label">
                // SELECTED WORK
              </div>

              <h2>
                Products built for
                <br />
                <em>the real world.</em>
              </h2>
            </div>

            <p>
              Selected platforms and systems designed around
              real users, workflows and business outcomes.
            </p>
          </div>
        </div>

        <div className="projects shell">
          {portfolio.projects.map((project) => {
            const hasImages =
              project.images && project.images.length > 0;

            const card = (
              <article
                className={`project ${project.tone}`}
              >
                <div className="project-top">
                  <span>{project.number}</span>
                  <small>{project.type}</small>
                  <Arrow />
                </div>

                <div
                  className={`project-visual ${
                    hasImages ? "has-images" : ""
                  }`}
                >
                  {hasImages ? (
                    <div className="project-gallery">
                      {project.images.map(
                        (image, index) => (
                          <div
                            className="project-slide"
                            key={image}
                          >
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${
                                index + 1
                              }`}
                            />
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="mock-window">
                      <i />
                      <i />
                      <i />

                      <div className="mock-chart" />

                      <div className="mock-lines">
                        <b />
                        <b />
                        <b />
                      </div>
                    </div>
                  )}

                  <div className="stat">
                    <strong>{project.stat}</strong>
                    <span>{project.statLabel}</span>
                  </div>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );

            return project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                {card}
              </a>
            ) : (
              <div key={project.title}>
                {card}
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}

      <section
        className="services shell section"
        id="services"
      >
        <div className="services-intro">
          <div className="section-label">
            // WHAT I DO
          </div>

          <h2>
            From idea to
            <br />
            <em>working product.</em>
          </h2>

          <p>
            End-to-end development shaped around what your
            business and users actually need.
          </p>
        </div>

        <div className="service-list">
          {portfolio.services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      {/* ZENIX */}

      <section className="zenix section">
        <div className="shell zenix-grid">
          <div>
            <div className="zenix-mark">Z</div>

            <div className="section-label">
              {portfolio.company}
            </div>

            <h2>
              Technology built around{" "}
              <em>your business.</em>
            </h2>
          </div>

          <div className="zenix-copy">
            <p>
              {portfolio.company} is my technology brand for
              delivering professional software solutions to
              businesses, organizations and startups.
            </p>

            <div className="zenix-services">
              <span>Custom software</span>
              <span>Web development</span>
              <span>Mobile development</span>
              <span>Business automation</span>
            </div>

            <a
              className="button primary"
              href="#contact"
            >
              Build with Zenix <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section
        className="process shell section"
        id="process"
      >
        <div className="section-heading">
          <div>
            <div className="section-label">
              // THE PROCESS
            </div>

            <h2>
              Clear steps.
              <br />
              <em>Solid outcomes.</em>
            </h2>
          </div>

          <p>
            No mystery. Just a practical path from the first
            conversation to a product people can use.
          </p>
        </div>

        <div className="process-grid">
          {portfolio.process.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact section" id="contact">
        <div className="shell contact-grid">
          <div>
            <div className="section-label">
              // HAVE A PROJECT IN MIND?
            </div>

            <h2>
              Let&apos;s build something
              <br />
              <em>valuable.</em>
            </h2>
          </div>

          <div className="contact-action">
            <p>
              Tell me what you&apos;re trying to build.
              I&apos;ll help you turn the idea into a clear,
              reliable digital product.
            </p>

            <a
              className="big-link"
              href={mail}
            >
              Start your project <Arrow />
            </a>

            <div className="socials">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href={mail}>
                Email
              </a>

              {portfolio.whatsapp && (
                <a
                  href={portfolio.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              )}

              <a href="#top">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="shell">
        <div className="brand">
          <span>{portfolio.initials}</span>
          <small>{portfolio.name}</small>
        </div>

        <p>
          {portfolio.name} × {portfolio.company}
        </p>

        <small>
          © 2026 · Built to work.
        </small>
      </footer>
    </main>
  );
}