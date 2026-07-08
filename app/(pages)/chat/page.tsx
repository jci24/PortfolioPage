import { Section } from "@/components/section";

export default function ChatPage() {
  return (
    <Section
      eyebrow="Assistant"
      title="Ask about Jaime is planned for PR 5."
      aside="Foundation page"
    >
      <p className="max-w-2xl text-sm text-ink/72">
        The first assistant version should use deterministic local profile data
        and keep the architecture ready for a later OpenAI-backed API route.
      </p>
    </Section>
  );
}
