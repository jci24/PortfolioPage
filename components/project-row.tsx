import Link from "next/link";
import type { ProjectItem } from "@/data/types";

type ProjectRowProps = {
  item: ProjectItem;
  href?: string;
};

export function ProjectRow({ item, href }: ProjectRowProps) {
  const content = (
    <div className="timeline-row project-grid">
      <div className="timeline-col project-col-title">
        <p className="timeline-company-name">{item.name}</p>
      </div>
      <div className="timeline-col project-col-summary">
        <p className="timeline-summary">{item.summary}</p>
      </div>
      <div className="timeline-col project-col-period">
        <div className="project-period-group">
          {item.period ? (
            <p className="timeline-period">{item.period}</p>
          ) : null}
          {href ? (
            <span className="timeline-arrow">→</span>
          ) : null}
        </div>
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
