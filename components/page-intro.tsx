type PageIntroProps = {
  title: string;
  subtitle: string;
};

export function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <div className="page-intro">
      <h1 className="page-title">
        {title}
      </h1>
      <p className="page-intro-subtitle">{subtitle}</p>
    </div>
  );
}
