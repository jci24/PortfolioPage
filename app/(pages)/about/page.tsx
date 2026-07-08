import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Experience details land in PR 2."
      aside="Foundation page"
    >
      <p className="max-w-2xl text-sm text-ink/72">
        This route is intentionally light for the foundation PR. The next slice
        should move Jaime&apos;s profile, experience, education, and skills into
        typed data files and render them here in the same restrained layout
        language.
      </p>
    </Section>
  );
}
