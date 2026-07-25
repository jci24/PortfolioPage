import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AudioVisual, RevealObserver } from "@/components/audio-visuals";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

export const metadata: Metadata = {
  title: "Projects | Jaime Castresana Iza",
  description:
    "Selected work across AI-assisted acoustic investigation, commercial audio software, embedded DSP, and psychoacoustic product development.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="premium-subpage premium-project-index">
      <RevealObserver />
      <header className="premium-index-hero">
        <Link className="premium-back-link" href="/">
          <ArrowLeft aria-hidden="true" />
          Portfolio
        </Link>
        <div data-reveal>
          <p className="premium-section-label">
            Selected work · {projects.length} projects
          </p>
          <h1>Built with depth.</h1>
          <p>
            Product and engineering work across acoustic investigation,
            commercial audio software, embedded DSP, and psychoacoustic
            workflows.
          </p>
        </div>
        <AudioVisual className="premium-index-signal" />
      </header>

      <main className="premium-index-content">
        {projects.map((project, index) => (
          <article
            className="premium-index-project"
            data-reveal
            key={project.slug}
          >
            <Link
              aria-label={`View ${project.name}`}
              className="premium-index-project-visual"
              href={`/projects/${project.slug}`}
            >
              <Image
                alt={project.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 52vw"
                src={project.imageSrc}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </Link>
            <div className="premium-index-project-copy">
              <p className="premium-section-label">{project.classification}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
              <div className="premium-tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link
                className="premium-inline-link"
                href={`/projects/${project.slug}`}
              >
                View case study <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </main>

      <section className="premium-index-themes">
        <div>
          <p className="premium-section-label">Across the work</p>
          <h2>Technical depth, shaped into usable products.</h2>
        </div>
        <div className="premium-index-tag-cloud">
          {allTags.map((tag, index) => (
            <span key={tag}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="premium-detail-cta">
        <div>
          <p className="premium-section-label">Contact</p>
          <h2>Interested in the engineering?</h2>
          <p>
            Each case study explains its context, technical focus, and product
            considerations without overstating confidential outcomes.
          </p>
        </div>
        <Link
          className="premium-button premium-button-dark"
          href={profile.bookingUrl}
        >
          Book a conversation <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
