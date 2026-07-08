import { Badge, Group, Stack, Text } from "@mantine/core";
import { ExperienceRow } from "@/components/experience-row";
import { PageIntro } from "@/components/page-intro";
import { Section } from "@/components/section";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        title="About and experience"
        subtitle="Profile overview, role history, education, and skills presented in the same spare, recruiter-friendly format."
      />

      <Section eyebrow="Profile" title={profile.summary}>
        <Text c="dimmed" maw={760} size="sm">
          {profile.detail}
        </Text>
      </Section>

      <Section eyebrow="Experience" title="Role history">
        <Stack gap={32}>
          {experience.map((item) => (
            <div id={item.slug} key={item.slug}>
              <ExperienceRow item={item} />
              <Stack gap={10} mt="md" pl={{ md: "calc(20% + 1rem)" }}>
                {item.bullets.map((bullet) => (
                  <Text c="dimmed" key={bullet} size="sm">
                    {bullet}
                  </Text>
                ))}
                <Group gap="xs" mt={4}>
                  {item.stack.map((entry) => (
                    <Badge
                      color="gray"
                      key={entry}
                      radius="sm"
                      size="sm"
                      variant="light"
                    >
                      {entry}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </div>
          ))}
        </Stack>
      </Section>

      <Section eyebrow="Education" title="Academic background">
        <Stack gap={12}>
          {profile.education.map((entry) => (
            <div key={entry.degree}>
              <Text fw={600} size="sm">
                {entry.degree}
              </Text>
              <Text c="dimmed" size="sm">
                {entry.institution}
              </Text>
            </div>
          ))}
        </Stack>
      </Section>

      <Section eyebrow="Skills" title="Technical areas and workflow strengths">
        <Group gap="xs">
          {skills.map((skill) => (
            <Badge color="gray" key={skill} radius="sm" size="sm" variant="light">
              {skill}
            </Badge>
          ))}
        </Group>
      </Section>
    </div>
  );
}
