import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { ProjectItem } from "@/data/types";
import { AudioVisual, RevealObserver } from "@/components/audio-visuals";
import { profile } from "@/data/profile";

type ProjectPageProps = {
  item: ProjectItem;
};

function DetailSection({
  index,
  items,
  label,
  title,
}: {
  index: string;
  items: string[];
  label: string;
  title: string;
}) {
  return (
    <section className="premium-detail-section" data-reveal>
      <div>
        <p className="premium-section-label">
          {index} — {label}
        </p>
        <h2>{title}</h2>
      </div>
      <ol>
        {items.map((item, itemIndex) => (
          <li key={item}>
            <span>{String(itemIndex + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectPage({ item }: ProjectPageProps) {
  return (
    <article className="premium-subpage premium-case-study">
      <RevealObserver />
      <header className="premium-detail-hero">
        <Link className="premium-back-link" href="/projects">
          <ArrowLeft aria-hidden="true" />
          All projects
        </Link>
        <div className="premium-detail-title" data-reveal>
          <p className="premium-section-label">{item.classification}</p>
          <h1>{item.name}</h1>
          <p>{item.summary}</p>
          <div className="premium-tag-list">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {item.repositoryUrl ? (
            <a
              className="premium-button premium-button-outline"
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
        <div className="premium-detail-wave">
          <AudioVisual className="premium-waveform" variant="waveform" />
        </div>
      </header>

      <div className="premium-detail-content">
        <figure className="premium-case-visual" data-reveal>
          <div>
            <Image
              alt={item.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1120px"
              src={item.imageSrc}
            />
            <span>{item.classification}</span>
          </div>
          <figcaption>
            Illustrative photography · {item.imageCredit}
          </figcaption>
        </figure>

        <section className="premium-context-block" data-reveal>
          <p className="premium-section-label">00 — Context</p>
          <h2>The problem</h2>
          <p>{item.context}</p>
        </section>

        <DetailSection
          index="01"
          items={item.contribution}
          label="Role"
          title="My contribution"
        />
        <DetailSection
          index="02"
          items={item.approach}
          label="Engineering"
          title="Technical approach"
        />
        <DetailSection
          index="03"
          items={item.validation}
          label="Quality"
          title="How I checked it"
        />

        {item.scopeNote ? (
          <aside className="premium-disclosure" data-reveal>
            <span>Disclosure</span>
            <div>
              <h2>Scope and confidentiality</h2>
              <p>{item.scopeNote}</p>
            </div>
          </aside>
        ) : null}

        <section className="premium-detail-cta" data-reveal>
          <div>
            <p className="premium-section-label">Continue the conversation</p>
            <h2>Discuss this work.</h2>
            <p>
              I can share additional context about the engineering decisions and
              my contribution where confidentiality allows.
            </p>
          </div>
          <Link
            className="premium-button premium-button-dark"
            href={profile.bookingUrl}
          >
            Book a conversation <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>
      </div>
    </article>
  );
}
