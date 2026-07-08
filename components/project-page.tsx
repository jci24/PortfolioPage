import Link from "next/link";
import type { ProjectItem } from "@/data/types";

type ProjectPageProps = {
  item: ProjectItem;
};

export function ProjectPage({ item }: ProjectPageProps) {
  return (
    <div className="work-page-shell">
      <Link className="detail-back-link" href="/projects">
        Projects
      </Link>

      <div className="project-page-header">
        <div className="work-page-heading">
          <h1 className="work-page-title">{item.name}</h1>
          <p className="work-page-subtitle">{item.summary}</p>
          {item.period ? (
            <p className="work-page-period">{item.period}</p>
          ) : null}
        </div>
      </div>

      <div className="work-page-section">
        <div className="detail-stack">
          {item.details.map((detail) => (
            <p className="detail-muted" key={detail}>
              {detail}
            </p>
          ))}
        </div>
      </div>

      <div className="work-page-section">
        <div className="pill-group">
          {item.tags.map((entry) => (
            <span className="detail-pill" key={entry}>
              {entry}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
