import { Badge, Group, Stack, Text } from "@mantine/core";
import { PageIntro } from "@/components/page-intro";
import { ProjectRow } from "@/components/project-row";
import { Section } from "@/components/section";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <PageIntro
        title="Projects"
        subtitle="A concise set of projects spanning audio analysis, sound quality workflows, embedded DSP, and technical product software."
      />

      <Section eyebrow="Selected work" title="Project overview">
        <Stack gap={32}>
          {projects.map((project) => (
            <div id={project.slug} key={project.slug}>
              <ProjectRow item={project} />
              <Stack gap={10} mt="md" pl={{ md: "calc(25% + 1rem)" }}>
                {project.details.map((detail) => (
                  <Text c="dimmed" key={detail} size="sm">
                    {detail}
                  </Text>
                ))}
                <Group gap="xs" mt={4}>
                  {project.tags.map((tag) => (
                    <Badge color="gray" key={tag} radius="sm" size="sm" variant="light">
                      {tag}
                    </Badge>
                  ))}
                </Group>
              </Stack>
            </div>
          ))}
        </Stack>
      </Section>
    </div>
  );
}
