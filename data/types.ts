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
  bookingUrl: string;
  bookingEmbedUrl: string;
  bookingExternalUrl: string;
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
  logoSrc?: string;
  logoDark?: boolean;
  logoWidth?: number;
  logoHeight?: number;
  logoBoxWidth?: number;
  title: string;
  subtitle?: string;
  period: string;
  dateLabel?: string;
  group: "latest" | "earlier";
  summary: string;
  bullets: string[];
  stack: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  classification: string;
  repositoryUrl?: string;
  imageSrc: string;
  imageAlt: string;
  imageCredit: string;
  period?: string;
  summary: string;
  context: string;
  contribution: string[];
  approach: string[];
  validation: string[];
  scopeNote?: string;
  tags: string[];
};
