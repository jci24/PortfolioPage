import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import type { ProjectItem } from "@/data/types";
import { profile } from "@/data/profile";

type ProjectPageProps = {
  item: ProjectItem;
};

function CaseStudySection({
  eyebrow,
  items,
  title,
}: {
  eyebrow: string;
  items: string[];
  title: string;
}) {
  return (
    <section className="case-study-section">
      <div>
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="case-study-list">
        {items.map((item) => (
          <p key={item}>
            <CheckCircle2 aria-hidden="true" />
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export function ProjectPage({ item }: ProjectPageProps) {
  return (
    <article className="case-study-page">
      <header className="case-study-hero">
        <div className="case-study-hero-inner">
          <Link className="projects-back-link" href="/projects">
            <ArrowLeft aria-hidden="true" />
            All projects
          </Link>
          <span className="figma-status-badge">
            {item.classification}
          </span>
          <h1>{item.name}</h1>
          <p>{item.summary}</p>
          <div className="figma-chip-list">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {item.repositoryUrl ? (
            <a
              className="figma-button figma-button-outline case-study-repository"
              href={item.repositoryUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Github aria-hidden="true" />
              View repository
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </header>

      <div className="case-study-content">
        <section className="case-study-context">
          <span>Context</span>
          <h2>The problem</h2>
          <p>{item.context}</p>
        </section>

        <CaseStudySection
          eyebrow="Role"
          items={item.contribution}
          title="My contribution"
        />
        <CaseStudySection
          eyebrow="Engineering"
          items={item.approach}
          title="Technical approach"
        />
        <CaseStudySection
          eyebrow="Quality"
          items={item.validation}
          title="How I checked it"
        />

        {item.scopeNote ? (
          <aside className="case-study-note">
            <strong>Scope and disclosure</strong>
            <p>{item.scopeNote}</p>
          </aside>
        ) : null}

        <section className="case-study-next">
          <div>
            <h2>Discuss this work</h2>
            <p>
              I can share additional context about the engineering decisions and
              my contribution where confidentiality allows.
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
    </article>
  );
}
