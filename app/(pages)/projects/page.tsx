import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Layers3 } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

export const metadata: Metadata = {
  title: "Projects | Jaime Castresana Iza",
  description:
    "Selected software engineering projects across audio analysis, acoustic workflows, embedded DSP, and technical product development.",
};

export default function ProjectsPage() {
  return (
    <div className="projects-index-page">
      <section className="projects-index-hero">
        <span className="projects-index-glow" aria-hidden="true" />
        <div className="projects-index-hero-inner">
          <Link className="projects-back-link" href="/">
            <ArrowLeft aria-hidden="true" />
            Back to portfolio
          </Link>
          <span className="figma-status-badge">
            <Layers3 aria-hidden="true" />
            {projects.length} selected projects
          </span>
          <h1>Featured Projects</h1>
          <p>
            A focused collection of product and engineering work spanning audio
            analysis, acoustic workflows, embedded DSP, and AI-assisted technical
            software.
          </p>
        </div>
      </section>

      <section className="projects-index-content">
        <div className="projects-index-grid">
          {projects.map((project, index) => (
            <article
              className="figma-card figma-project-card projects-index-card"
              key={project.slug}
            >
              <div
                className={`figma-project-visual figma-project-${(index % 3) + 1}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true" />
                <strong>{project.classification}</strong>
              </div>
              <div className="figma-project-body">
                <span className="project-classification">
                  {project.classification}
                </span>
                <h2>{project.name}</h2>
                <p className="figma-card-copy">{project.summary}</p>
                <div className="figma-chip-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="figma-button figma-button-outline figma-project-link"
                  href={`/projects/${project.slug}`}
                >
                  View project
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-index-expertise">
        <div className="projects-index-expertise-inner">
          <div>
            <span className="figma-status-badge">Project themes</span>
            <h2>What this work emphasizes</h2>
            <p>
              The projects combine technical depth with workflows that help
              specialist users understand evidence and make confident decisions.
            </p>
          </div>
          <div className="projects-index-tags">
            {allTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-index-cta">
        <div>
          <h2>Interested in the engineering behind the work?</h2>
          <p>
            Each project has a dedicated page with its context, technical focus,
            and product considerations.
          </p>
        </div>
        <a
          className="figma-button figma-button-primary"
          href={profile.bookingUrl}
        >
          Book a conversation
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </div>
  );
}
