import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const skillCategories = [
  {
    icon: "</>",
    title: "Software engineering",
    skills: ["C#/.NET", "React", "TypeScript", "Python"],
  },
  {
    icon: "◫",
    title: "Product development",
    skills: ["APIs", "Technical UX", "Testing", "Documentation"],
  },
  {
    icon: "⌁",
    title: "Audio & acoustics",
    skills: ["DSP foundations", "FFT & spectra", "Sound quality", "Validation"],
  },
  {
    icon: "↗",
    title: "Delivery",
    skills: ["Git", "Azure DevOps", "CI/CD", "Agile collaboration"],
  },
  {
    icon: "✦",
    title: "AI workflows",
    skills: ["LLM prototypes", "Grounded answers", "AI-assisted development"],
  },
  {
    icon: "◎",
    title: "Engineering domains",
    skills: ["Audio software", "Acoustic tools", "Embedded DSP"],
  },
];

const socialIcons = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Home() {
  return (
    <div className="figma-home">
      <section className="figma-hero" id="home">
        <div className="figma-hero-background" aria-hidden="true">
          <span className="figma-glow figma-glow-one" />
          <span className="figma-glow figma-glow-two" />
          <span className="figma-glow figma-glow-three" />
          <span className="figma-grid-pattern" />
        </div>

        <div className="figma-hero-grid">
          <div className="figma-hero-content">
            <span className="figma-status-badge">
              <span aria-hidden="true">✦</span>
              Software engineering for technical products
            </span>

            <div>
              <h1>
                <span>Hello, I&apos;m</span>
                <strong>{profile.name}</strong>
              </h1>
              <p className="figma-hero-role">
                Software engineer crafting technical products for
                <em> audio, acoustics, and DSP workflows</em>
              </p>
              <p className="figma-hero-summary">{profile.detail}</p>
            </div>

            <div className="figma-action-row">
              <a className="figma-button figma-button-primary" href="#projects">
                View my work
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="figma-button figma-button-outline"
                href={profile.bookingUrl}
              >
                Book a call
                <CalendarDays aria-hidden="true" />
              </a>
              <a
                className="figma-button figma-button-outline"
                href="/Jaime_Castresana_CV.pdf"
              >
                Download CV
                <Download aria-hidden="true" />
              </a>
            </div>

            <div className="figma-social-row" aria-label="Social links">
              {profile.socialLinks.map((link) => {
                const SocialIcon =
                  socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <a
                    aria-label={link.label}
                    className="figma-icon-button"
                    href={link.href}
                    key={link.label}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <SocialIcon aria-hidden="true" />
                  </a>
                );
              })}
            </div>

          </div>

          <div className="figma-portrait-column">
            <div className="figma-portrait-glow" aria-hidden="true" />
            <div className="figma-portrait-wrap">
              <Image
                alt="Jaime Castresana Iza, software engineer"
                className="figma-portrait"
                fill
                priority
                sizes="(max-width: 1024px) 320px, 384px"
                src="/img/jaime-castresana-portrait.jpg"
              />
              <span className="figma-portrait-overlay" />
            </div>
          </div>
        </div>

        <a className="figma-scroll-indicator" href="#skills">
          <span>Scroll to explore</span>
          <strong aria-hidden="true">↓</strong>
        </a>
      </section>

      <section className="figma-section" id="skills">
        <div className="figma-section-heading">
          <h2>Technical Skills</h2>
          <p>
            A practical toolkit shaped by commercial acoustic software, audio
            R&amp;D, validation, and product-focused engineering.
          </p>
        </div>
        <div className="figma-skill-grid">
          {skillCategories.map((category) => (
            <article className="figma-card figma-skill-card" key={category.title}>
              <span className="figma-card-icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3>{category.title}</h3>
              <div className="figma-chip-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="figma-section" id="experience">
        <div className="figma-section-heading">
          <h2>Professional Experience</h2>
          <p>
            Product engineering experience across commercial acoustic software,
            audio R&amp;D, embedded processing, and technical validation.
          </p>
        </div>
        <div className="figma-experience-list">
          {experience.map((item) => (
            <Link
              className="figma-card figma-experience-card"
              href={`/work/${item.slug}`}
              key={item.slug}
            >
              <div className="figma-experience-main">
                {item.logoSrc ? (
                  <span
                    className={`figma-company-logo${item.logoDark ? " figma-company-logo-dark" : ""}`}
                  >
                    <Image
                      alt={`${item.company} logo`}
                      height={item.logoHeight ?? 32}
                      src={item.logoSrc}
                      width={item.logoWidth ?? 96}
                    />
                  </span>
                ) : null}
                <div>
                  <h3>{item.title}</h3>
                  <p className="figma-company">{item.company}</p>
                </div>
              </div>
              <div className="figma-experience-meta">
                <span>⌖ {profile.location}</span>
              </div>
              <p className="figma-card-copy">{item.summary}</p>
              <div className="figma-chip-list">
                {item.stack.map((entry) => (
                  <span key={entry}>{entry}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="figma-section figma-project-section" id="projects">
        <div className="figma-section-heading">
          <h2>Featured Projects</h2>
          <p>
            Selected work connecting software engineering, audio technology,
            grounded AI workflows, and usable technical products.
          </p>
        </div>
        <div className="figma-project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <article className="figma-card figma-project-card" key={project.slug}>
              <div className={`figma-project-visual figma-project-${index + 1}`}>
                <Image
                  alt={project.imageAlt}
                  className="figma-project-image"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  src={project.imageSrc}
                />
                <span className="figma-project-shade" aria-hidden="true" />
                <span className="figma-project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="figma-project-body">
                <span className="project-classification">
                  {project.classification}
                </span>
                <h3>{project.name}</h3>
                <p className="figma-card-copy">{project.summary}</p>
                <div className="figma-chip-list">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="figma-button figma-button-outline figma-project-link"
                  href={`/projects/${project.slug}`}
                >
                  View project <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="figma-view-all">
          <Link className="figma-button figma-button-outline" href="/projects">
            View all projects
          </Link>
        </div>
      </section>

      <section className="figma-section" id="contact">
        <div className="figma-section-heading">
          <h2>Let&apos;s Work Together</h2>
          <p>
            Have a role or product where software engineering meets audio,
            acoustics, DSP, or technical-user workflows? I&apos;d like to hear
            about it.
          </p>
        </div>
        <div className="figma-contact-simple">
          <div className="figma-contact-cards">
            <a
              className="figma-card figma-contact-card"
              href="mailto:jaime.castresana@gmail.com"
            >
              <span className="figma-card-icon" aria-hidden="true">
                @
              </span>
              <span>
                <strong>Email</strong>
                <small>jaime.castresana@gmail.com</small>
              </span>
            </a>
            <div className="figma-card figma-contact-card">
              <span className="figma-card-icon" aria-hidden="true">
                ⌖
              </span>
              <span>
                <strong>Location</strong>
                <small>{profile.location}</small>
              </span>
            </div>
          </div>
          <div className="figma-contact-action">
            <p>
              Choose an available time for a short introductory conversation,
              or use email if you prefer an asynchronous introduction.
            </p>
            <a
              className="figma-button figma-button-primary"
              href={profile.bookingUrl}
            >
              Book a conversation
              <CalendarDays aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
