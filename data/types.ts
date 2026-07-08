export type SocialLink = {
  href: string;
  label: string;
};

export type Profile = {
  name: string;
  location: string;
  headline: string;
  summary: string;
  detail: string;
  targetRoles: string[];
  education: Array<{
    degree: string;
    institution: string;
  }>;
  socialLinks: SocialLink[];
};

export type ExperienceItem = {
  slug: string;
  company: string;
  label: string;
  title: string;
  subtitle?: string;
  period: string;
  group: "latest" | "earlier";
  summary: string;
  bullets: string[];
  stack: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  period?: string;
  summary: string;
  tags: string[];
  details: string[];
};
