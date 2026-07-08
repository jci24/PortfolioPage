import Link from "next/link";
import {
  Anchor,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ExperienceRow } from "@/components/experience-row";
import { ProjectRow } from "@/components/project-row";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const latestExperience = experience.filter((item) => item.group === "latest");
const earlierExperience = experience.filter((item) => item.group === "earlier");
const earlierProjectPreview = projects.slice(0, 3);

export default function Home() {
  return (
    <Stack gap={64}>
      <section className="intro-shell">
        <Stack align="center" gap={8}>
          <Title order={1} className="profile-title">
            {profile.name}
          </Title>
          <Text c="dimmed" className="profile-subtitle" ta="center">
            {profile.headline}
          </Text>
        </Stack>
      </section>

      <section className="list-shell">
        <Stack gap={28}>
          <div>
            <Text c="dimmed" className="section-kicker">
              Latest
            </Text>
            <Stack gap={10} mt={10}>
              {latestExperience.map((item) => (
                <ExperienceRow
                  href={`/about#${item.slug}`}
                  item={item}
                  key={item.slug}
                />
              ))}
            </Stack>
          </div>

          <div>
            <Text c="dimmed" className="section-kicker">
              Earlier
            </Text>
            <Stack gap={10} mt={10}>
              {earlierExperience.map((item) => (
                <ExperienceRow
                  href={`/about#${item.slug}`}
                  item={item}
                  key={item.slug}
                />
              ))}
            </Stack>
          </div>
        </Stack>
      </section>

      <section className="list-shell">
        <Stack gap={10}>
          <Group justify="space-between" align="end">
            <Text c="dimmed" className="section-kicker">
              Profile
            </Text>
            <Anchor component={Link} href="/about" size="sm" underline="hover">
              Full profile
            </Anchor>
          </Group>
          <div className="summary-panel">
            <Text size="sm">{profile.summary}</Text>
            <Text c="dimmed" mt="sm" size="sm">
              {profile.detail}
            </Text>
          </div>
        </Stack>
      </section>

      <section className="list-shell">
        <Stack gap={10}>
          <Group justify="space-between" align="end">
            <Text c="dimmed" className="section-kicker">
              Selected projects
            </Text>
            <Anchor component={Link} href="/projects" size="sm" underline="hover">
              All projects
            </Anchor>
          </Group>
          {earlierProjectPreview.map((item) => (
            <ProjectRow href={`/projects#${item.slug}`} item={item} key={item.slug} />
          ))}
        </Stack>
      </section>
    </Stack>
  );
}
