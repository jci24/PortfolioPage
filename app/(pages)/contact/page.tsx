import { Anchor, Group, Stack, Text } from "@mantine/core";
import { BlurFade } from "@/components/blur-fade";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <div>
      <BlurFade delay={40}>
        <PageIntro
          title="Contact"
          subtitle="Direct contact details for recruiters, hiring managers, and teams exploring software roles in audio, DSP, and technical product engineering."
        />
      </BlurFade>

      <BlurFade delay={120}>
        <Section eyebrow="Direct" title="Best ways to reach Jaime">
          <Stack gap="md">
            {profile.socialLinks.map((link) => (
              <div key={link.label}>
                <Anchor href={link.href} size="md" underline="hover">
                  {link.label}
                </Anchor>
                <Text c="dimmed" size="sm">
                  {link.href.replace("mailto:", "")}
                </Text>
              </div>
            ))}
            <div>
              <Text fw={600} size="md">
                Location
              </Text>
              <Text c="dimmed" size="sm">
                {profile.location}
              </Text>
            </div>
          </Stack>
        </Section>
      </BlurFade>

      <BlurFade delay={180}>
        <Section eyebrow="Roles" title="Current role focus">
          <Text c="dimmed" maw={760} size="sm">
            Jaime is most interested in opportunities across audio software, DSP
            tools, AI-assisted engineering workflows, and full-stack technical
            products for specialist users.
          </Text>
        </Section>
      </BlurFade>

      <BlurFade delay={240}>
        <Section eyebrow="Quick view" title="Target role categories">
          <Group gap="sm">
            {profile.targetRoles.map((role) => (
              <Text className="contact-pill" key={role} size="sm">
                {role}
              </Text>
            ))}
          </Group>
        </Section>
      </BlurFade>
    </div>
  );
}
