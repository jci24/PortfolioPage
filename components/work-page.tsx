import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ExperienceItem } from "@/data/types";
import { AudioVisual, RevealObserver } from "@/components/audio-visuals";
import { profile } from "@/data/profile";

type WorkPageProps = {
  item: ExperienceItem;
};

export function WorkPage({ item }: WorkPageProps) {
  return (
    <article className="premium-subpage premium-work-page">
      <RevealObserver />
      <header className="premium-detail-hero premium-work-hero">
        <Link className="premium-back-link" href="/#experience">
          <ArrowLeft aria-hidden="true" />
          Experience overview
        </Link>

        <div className="premium-work-title" data-reveal>
          <div
            className={`premium-work-logo${item.logoDark ? " premium-work-logo-dark" : ""}`}
          >
            {item.logoSrc ? (
              <Image
                alt={`${item.company} logo`}
                height={item.logoHeight ?? 40}
                src={item.logoSrc}
                width={item.logoWidth ?? 120}
              />
            ) : (
              item.label
            )}
          </div>
          <div>
            <p className="premium-section-label">
              {item.dateLabel} · {profile.location}
            </p>
            <h1>{item.title}</h1>
            <p className="premium-work-company">{item.company}</p>
          </div>
        </div>
        <p className="premium-work-summary" data-reveal>
          {item.summary}
        </p>
        <div className="premium-detail-wave">
          <AudioVisual className="premium-waveform" variant="waveform" />
        </div>
      </header>

      <div className="premium-detail-content">
        <section className="premium-detail-section" data-reveal>
          <div>
            <p className="premium-section-label">01 — Contribution</p>
            <h2>What I worked on</h2>
          </div>
          <ol>
            {item.bullets.map((bullet, index) => (
              <li key={bullet}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{bullet}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="premium-toolkit" data-reveal>
          <div>
            <p className="premium-section-label">02 — Toolkit</p>
            <h2>Technologies and domains</h2>
          </div>
          <div className="premium-toolkit-grid">
            {item.stack.map((entry, index) => (
              <span key={entry}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {entry}
              </span>
            ))}
          </div>
        </section>

        <aside className="premium-disclosure" data-reveal>
          <span>Timeline</span>
          <div>
            <h2>Employment period</h2>
            <p>
              {item.period}. Additional employment and education details are
              available in the downloadable CV.
            </p>
          </div>
        </aside>

        <section className="premium-detail-cta" data-reveal>
          <div>
            <p className="premium-section-label">Continue the conversation</p>
            <h2>Discuss this experience.</h2>
            <p>
              I can provide more detail about responsibilities, collaboration,
              and technical decisions where confidentiality allows.
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
