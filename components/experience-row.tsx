import Image from "next/image";
import Link from "next/link";
import type { ExperienceItem } from "@/data/types";

type ExperienceRowProps = {
  item: ExperienceItem;
  href?: string;
};

export function ExperienceRow({ item, href }: ExperienceRowProps) {
  const content = (
    <div className="timeline-row timeline-grid">
      <div className="timeline-col timeline-col-company">
        <div className="timeline-company-group">
          {item.logoSrc ? (
            <div
              className={`timeline-logo${item.logoDark ? " timeline-logo-dark" : ""}`}
              style={{
                width: item.logoBoxWidth ?? 56,
              }}
            >
              <Image
                alt={`${item.company} logo`}
                className="timeline-logo-image"
                height={item.logoHeight ?? 28}
                src={item.logoSrc}
                width={item.logoWidth ?? 72}
              />
            </div>
          ) : (
            <div className="timeline-mark">{item.label}</div>
          )}
          <p className="timeline-company-name">{item.company}</p>
        </div>
      </div>
      <div className="timeline-col timeline-col-main">
        <div className="timeline-main-stack">
          <div className="timeline-headline-row">
            <div>
              <p className="timeline-title">{item.title}</p>
              {item.subtitle ? (
                <p className="timeline-subtitle">{item.subtitle}</p>
              ) : null}
            </div>
            {href ? (
              <span className="timeline-arrow">→</span>
            ) : null}
          </div>
          <p className="timeline-summary">{item.summary}</p>
        </div>
      </div>
      <div className="timeline-col timeline-col-period">
        <p className="timeline-period">{item.period}</p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link className="timeline-link" href={href}>
      {content}
    </Link>
  );
}
