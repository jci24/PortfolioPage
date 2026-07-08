import Image from "next/image";
import Link from "next/link";
import type { ExperienceItem } from "@/data/types";

type WorkPageProps = {
  item: ExperienceItem;
};

export function WorkPage({ item }: WorkPageProps) {
  return (
    <div className="work-page-shell">
      <Link className="detail-back-link" href="/">
        Home
      </Link>

      <div className="work-page-header">
        <div className="work-page-logo-wrap">
          {item.logoSrc ? (
            <div
              className={`work-page-logo${item.logoDark ? " work-page-logo-dark" : ""}`}
              style={{
                width: item.logoBoxWidth ? item.logoBoxWidth + 18 : 108,
              }}
            >
              <Image
                alt={`${item.company} logo`}
                className="work-page-logo-image"
                height={item.logoHeight ? item.logoHeight + 8 : 36}
                src={item.logoSrc}
                width={item.logoWidth ? item.logoWidth + 18 : 96}
              />
            </div>
          ) : null}
        </div>

        <div className="work-page-heading">
          <h1 className="work-page-title">{item.company}</h1>
          <p className="work-page-subtitle">
            {item.title}
            {item.subtitle ? ` · ${item.subtitle}` : ""}
          </p>
          <p className="work-page-period">{item.dateLabel ?? item.period}</p>
        </div>
      </div>

      <div className="work-page-summary">
        <p>{item.summary}</p>
      </div>

      <div className="work-page-section">
        <div className="detail-stack">
          {item.bullets.map((bullet) => (
            <p className="detail-muted" key={bullet}>
              {bullet}
            </p>
          ))}
        </div>
      </div>

      <div className="work-page-section">
        <div className="pill-group">
          {item.stack.map((entry) => (
            <span className="detail-pill" key={entry}>
              {entry}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
