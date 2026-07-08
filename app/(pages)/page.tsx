import Link from "next/link";
import {
  Anchor,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { AnimatedList } from "@/components/animated-list";
import { BlurFade } from "@/components/blur-fade";
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
      <BlurFade delay={40}>
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
      </BlurFade>

      <BlurFade delay={110}>
        <section className="list-shell">
          <Stack gap={28}>
            <div>
              <Text c="dimmed" className="section-kicker">
                Latest
              </Text>
              <AnimatedList className="list-cluster">
                {latestExperience.map((item) => (
                  <ExperienceRow
                    href={`/about#${item.slug}`}
                    item={item}
                    key={item.slug}
                  />
                ))}
              </AnimatedList>
            </div>

            <div>
              <Text c="dimmed" className="section-kicker">
                Earlier
              </Text>
              <AnimatedList className="list-cluster" staggerMs={110}>
                {earlierExperience.map((item) => (
                  <ExperienceRow
                    href={`/about#${item.slug}`}
                    item={item}
                    key={item.slug}
                  />
                ))}
              </AnimatedList>
            </div>
          </Stack>
        </section>
      </BlurFade>

      <BlurFade delay={180}>
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
            <div className="summary-panel interactive-panel">
              <Text size="sm">{profile.summary}</Text>
              <Text c="dimmed" mt="sm" size="sm">
                {profile.detail}
              </Text>
            </div>
          </Stack>
        </section>
      </BlurFade>

      <BlurFade delay={250}>
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
            <AnimatedList className="list-cluster" staggerMs={100}>
              {earlierProjectPreview.map((item) => (
                <ProjectRow
                  href={`/projects#${item.slug}`}
                  item={item}
                  key={item.slug}
                />
              ))}
            </AnimatedList>
          </Stack>
        </section>
      </BlurFade>
    </Stack>
  );
}
