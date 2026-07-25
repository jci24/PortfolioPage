import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { AudioVisual, RevealObserver } from "@/components/audio-visuals";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const skillGroups = [
  {
    label: "Software",
    items: ["C# / .NET", "React", "TypeScript", "Python", "APIs", "Testing"],
  },
  {
    label: "Audio",
    items: [
      "DSP",
      "FFT analysis",
      "Acoustics",
      "Psychoacoustics",
      "Measurements",
    ],
  },
  {
    label: "AI systems",
    items: [
      "Tool calling",
      "Evidence grounding",
      "Agent workflows",
      "Automated evaluation",
    ],
  },
  {
    label: "Product",
    items: [
      "Technical UX",
      "Workflow design",
      "Validation",
      "Cross-functional delivery",
    ],
  },
];

const socialIcons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Home() {
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1, 4);

  return (
    <div className="premium-home">
      <RevealObserver />

      <section className="premium-hero" id="home">
        <div className="premium-hero-copy">
          <p className="premium-eyebrow" data-reveal>
            Audio software engineer · Copenhagen
          </p>
          <h1 data-reveal style={{ "--reveal-delay": "70ms" } as React.CSSProperties}>
            Engineering better ways to understand{" "}
            <em>sound.</em>
          </h1>
          <p
            className="premium-hero-lead"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            I build DSP tools, acoustic workflows, and AI-assisted products
            that help technical users move from complex evidence to clear
            engineering decisions.
          </p>

          <AudioVisual className="premium-frequency-bars" />

          <div
            className="premium-actions"
            data-reveal
            style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
          >
            <a className="premium-button premium-button-dark" href="#projects">
              Explore projects <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="premium-button premium-button-outline"
              href="/Jaime_Castresana_CV.pdf"
            >
              <Download aria-hidden="true" /> Download CV
            </a>
          </div>

          <div
            aria-label="Social links"
            className="premium-socials"
            data-reveal
            style={{ "--reveal-delay": "270ms" } as React.CSSProperties}
          >
            {profile.socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              return (
                <a
                  aria-label={link.label}
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className="premium-portrait-column"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <div className="premium-portrait-frame">
            <Image
              alt="Jaime Castresana Iza, audio software engineer"
              className="premium-portrait"
              fill
              priority
              sizes="(max-width: 800px) 80vw, 350px"
              src="/img/jaime-castresana-portrait.jpg"
            />
            <span className="premium-portrait-index">JC / 01</span>
          </div>
          <div className="premium-wave-strip">
            <AudioVisual className="premium-waveform" variant="waveform" />
          </div>
          <p className="premium-portrait-caption">
            Software · acoustics · DSP · AI
          </p>
        </div>
      </section>

      <section className="premium-section premium-experience" id="experience">
        <div className="premium-section-heading" data-reveal>
          <p className="premium-section-label">01 — Experience</p>
          <h2>Where I have built things.</h2>
        </div>
        <div className="premium-experience-list">
          {experience.map((item, index) => (
            <Link
              className="premium-experience-row"
              data-reveal
              href={`/work/${item.slug}`}
              key={item.slug}
              style={
                { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
              }
            >
              <span className="premium-company-mark">
                {item.logoSrc ? (
                  <Image
                    alt={`${item.company} logo`}
                    height={item.logoHeight ?? 32}
                    src={item.logoSrc}
                    style={{ height: "auto", width: "auto" }}
                    width={item.logoWidth ?? 96}
                  />
                ) : (
                  item.label
                )}
              </span>
              <div className="premium-experience-copy">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.title}</p>
                </div>
                <p className="premium-experience-summary">{item.summary}</p>
                <div className="premium-tag-list">
                  {item.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="premium-experience-date">{item.dateLabel}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="premium-row-arrow"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="premium-section premium-projects" id="projects">
        <div className="premium-section-heading premium-heading-split" data-reveal>
          <div>
            <p className="premium-section-label">02 — Selected work</p>
            <h2>Built with depth.</h2>
          </div>
          <p>
            From embedded audio processing to evidence-grounded acoustic
            investigation tools.
          </p>
        </div>

        <article className="premium-featured-project" data-reveal>
          <div className="premium-featured-visual">
            <Image
              alt={featuredProject.imageAlt}
              className="premium-featured-image"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
              src={featuredProject.imageSrc}
            />
            <div className="premium-signal-panel">
              <div>
                <span>SoundLens</span>
                <span>Investigation / DSP evidence</span>
              </div>
              <AudioVisual
                className="premium-project-waveform"
                variant="waveform"
              />
            </div>
          </div>
          <div className="premium-featured-copy">
            <p className="premium-section-label">Featured personal project</p>
            <h3>{featuredProject.name}</h3>
            <p>{featuredProject.summary}</p>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{featuredProject.context}</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>{featuredProject.approach[1]}</dd>
              </div>
            </dl>
            <div className="premium-tag-list">
              {featuredProject.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link
              className="premium-inline-link"
              href={`/projects/${featuredProject.slug}`}
            >
              View case study <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </article>

        <div className="premium-project-grid">
          {supportingProjects.map((project, index) => (
            <article
              className="premium-project-card"
              data-reveal
              key={project.slug}
              style={
                { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
              }
            >
              <div className="premium-project-image-wrap">
                <Image
                  alt={project.imageAlt}
                  className="premium-project-image"
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  src={project.imageSrc}
                />
                <span>{String(index + 2).padStart(2, "0")}</span>
              </div>
              <div className="premium-project-card-copy">
                <p>{project.classification}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="premium-tag-list">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="premium-inline-link"
                  href={`/projects/${project.slug}`}
                >
                  View project <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="premium-view-all" data-reveal>
          <Link className="premium-button premium-button-outline" href="/projects">
            View all projects <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="premium-section premium-skills" id="skills">
        <div className="premium-section-heading premium-heading-split" data-reveal>
          <div>
            <p className="premium-section-label">03 — Expertise</p>
            <h2>Depth across the stack.</h2>
          </div>
          <p>
            Product-minded software engineering grounded in audio, measurement,
            and technical-user workflows.
          </p>
        </div>
        <div className="premium-skill-editorial">
          {skillGroups.map((group, index) => (
            <article
              className="premium-skill-row"
              data-reveal
              key={group.label}
              style={
                { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
              }
            >
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.label}</h3>
              </div>
              <ul>
                {group.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    style={
                      {
                        "--skill-delay": `${itemIndex * 45}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="premium-section premium-about" id="about">
        <div data-reveal>
          <p className="premium-section-label">04 — About</p>
          <h2>
            Sound engineer.
            <br />
            Product thinker.
          </h2>
          <p>
            My background spans embedded DSP, commercial acoustic software, and
            AI-assisted engineering workflows. I care about turning specialist
            analysis into products that remain rigorous, understandable, and
            useful in real engineering work.
          </p>
          <blockquote className="premium-about-quote">
            The most interesting problems sit at the intersection of signal
            processing and human perception.
          </blockquote>
        </div>
        <dl data-reveal style={{ "--reveal-delay": "90ms" } as React.CSSProperties}>
          <div>
            <dt>Education</dt>
            <dd>MSc Sound and Music Computing</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>DSP · Acoustics · AI engineering tools</dd>
          </div>
          <div>
            <dt>Current role</dt>
            <dd>Software Engineer at HBK</dd>
          </div>
        </dl>
      </section>

      <section className="premium-section premium-contact" id="contact">
        <div data-reveal>
          <p className="premium-section-label">05 — Contact</p>
          <h2>
            Let&apos;s build better
            <br />
            audio products.
          </h2>
          <p>
            Open to thoughtful conversations about audio software, DSP tools,
            and AI-assisted engineering.
          </p>
        </div>
        <div className="premium-contact-links" data-reveal>
          {profile.socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              {link.label} <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <Link href={profile.bookingUrl}>
            Book a conversation <CalendarDays aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
