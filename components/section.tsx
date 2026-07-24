import type { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function Section({ eyebrow, title, children, aside }: SectionProps) {
  return (
    <section className="content-section">
      <div className="content-section-meta">
        <span className="eyebrow">{eyebrow}</span>
        {aside ? <p className="section-aside">{aside}</p> : null}
      </div>
      <div className="content-section-body">
        <h2 className="section-title">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
