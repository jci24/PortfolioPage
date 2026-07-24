import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import type { ExperienceItem } from "@/data/types";
import { profile } from "@/data/profile";

type WorkPageProps = {
  item: ExperienceItem;
};

export function WorkPage({ item }: WorkPageProps) {
  return (
    <article className="experience-detail-page">
      <header className="experience-detail-hero">
        <div className="experience-detail-hero-inner">
          <Link className="projects-back-link" href="/#experience">
            <ArrowLeft aria-hidden="true" />
            Experience overview
          </Link>

          <div className="experience-detail-heading">
            {item.logoSrc ? (
              <div
                className={`experience-detail-logo${item.logoDark ? " experience-detail-logo-dark" : ""}`}
              >
                <Image
                  alt={`${item.company} logo`}
                  height={item.logoHeight ?? 40}
                  src={item.logoSrc}
                  width={item.logoWidth ?? 120}
                />
              </div>
            ) : null}
            <div>
              <span className="figma-status-badge">
                <MapPin aria-hidden="true" />
                {profile.location}
              </span>
              <h1>{item.title}</h1>
              <p className="experience-detail-company">{item.company}</p>
              <p className="experience-detail-period">{item.period}</p>
            </div>
          </div>
          <p className="experience-detail-summary">{item.summary}</p>
        </div>
      </header>

      <div className="experience-detail-content">
        <section className="experience-contribution-section">
          <div>
            <span>Contribution</span>
            <h2>What I worked on</h2>
          </div>
          <div className="case-study-list">
            {item.bullets.map((bullet) => (
              <p key={bullet}>
                <CheckCircle2 aria-hidden="true" />
                {bullet}
              </p>
            ))}
          </div>
        </section>

        <section className="experience-stack-section">
          <div>
            <span>Toolkit</span>
            <h2>Technologies and domains</h2>
          </div>
          <div className="figma-chip-list">
            {item.stack.map((entry) => (
              <span key={entry}>{entry}</span>
            ))}
          </div>
        </section>

        <aside className="case-study-note">
          <strong>Employment timeline</strong>
          <p>
            {item.period}. Additional employment and education details are
            available in the downloadable CV.
          </p>
        </aside>

        <section className="case-study-next">
          <div>
            <h2>Want to discuss this experience?</h2>
            <p>
              I can provide more detail about responsibilities, collaboration,
              and technical decisions where confidentiality allows.
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
