import Link from "next/link";
import { Anchor, Group, Stack, Text } from "@mantine/core";
import { BlurFade } from "@/components/blur-fade";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";

export default function CvPage() {
  return (
    <div>
      <BlurFade delay={40}>
        <PageIntro
          title="CV"
          subtitle="A clean recruiter handoff with a downloadable CV, role focus, and direct contact paths."
        />
      </BlurFade>

      <BlurFade delay={120}>
        <Section
          eyebrow="Download"
          title="Download the current CV"
          aside="PDF asset"
        >
          <Stack gap="md">
            <Text c="dimmed" maw={720} size="sm">
              The current button points to the placeholder path requested for the
              portfolio MVP. Replace the file in `public/Jaime_Castresana_CV.pdf`
              with the final exported CV whenever you are ready.
            </Text>
            <Group gap="sm">
              <Anchor
                className="download-link"
                download
                href="/Jaime_Castresana_CV.pdf"
                underline="never"
              >
                Download CV
              </Anchor>
              <Anchor
                component={Link}
                href="/contact"
                size="sm"
                underline="hover"
              >
                Open contact details
              </Anchor>
            </Group>
          </Stack>
        </Section>
      </BlurFade>

      <BlurFade delay={180}>
        <Section eyebrow="Fit" title="Target role alignment">
          <Stack gap="sm">
            <Text c="dimmed" maw={760} size="sm">
              {profile.name} is targeting roles that combine software engineering
              with audio, DSP tools, AI-assisted development, and technical-user
              product workflows.
            </Text>
            <Text size="sm">{profile.targetRoles.join(" | ")}</Text>
          </Stack>
        </Section>
      </BlurFade>

      <BlurFade delay={240}>
        <Section eyebrow="Notes" title="What to replace before wider sharing">
          <Stack gap="sm">
            <Text c="dimmed" size="sm">
              Replace the placeholder PDF with the final CV export.
            </Text>
            <Text c="dimmed" size="sm">
              Update the LinkedIn URL if a more specific public profile should be
              linked from the site.
            </Text>
          </Stack>
        </Section>
      </BlurFade>
    </div>
  );
}
