import { Section } from "@/components/section";
import Link from "next/link";
import {
  Anchor,
  Divider,
  Grid,
  GridCol,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const previewSections = [
  {
    href: "/about",
    title: "Experience",
    state: "Profile and role history",
    description:
      "Structured role history across HBK and ICEpower, with emphasis on technical-user workflows, acoustic tooling, and product collaboration.",
  },
  {
    href: "/projects",
    title: "Projects",
    state: "Selected work and case studies",
    description:
      "Selected case studies around audio analysis, sound quality metrics, embedded DSP, and applied AI product experimentation.",
  },
  {
    href: "/cv",
    title: "CV and Contact",
    state: "Recruiter handoff",
    description:
      "A practical recruiter handoff: downloadable CV, direct contact details, and clear external profile links.",
  },
  {
    href: "/chat",
    title: "Ask about Jaime",
    state: "Guided Q&A",
    description:
      "A local assistant interface backed by structured profile knowledge and designed to accept a future OpenAI integration.",
  },
];

export default function Home() {
  return (
    <Stack gap={72}>
      <Grid className="hero-section" gap="xl">
        <GridCol span={{ base: 12, lg: 8 }}>
          <Stack gap="lg">
            <Text className="eyebrow" span>
              Overview
            </Text>
            <Title order={1} className="hero-title">
              Software Engineer focused on audio tools, DSP workflows, and
              AI-assisted product development.
            </Title>
            <Text c="dimmed" className="hero-copy">
              Jaime Castresana Iza is based in Copenhagen and builds software
              for technical users. His background combines acoustic engineering
              workflows, product-minded application development, and practical
              DSP foundations across commercial software and R&amp;D
              environments.
            </Text>
            <Text c="dimmed" className="hero-copy">
              This first slice sets the visual direction and information
              structure. It keeps the reading flow spare and direct, with
              detailed content landing in subsequent PRs.
            </Text>
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, lg: 4 }}>
          <Stack gap="xl">
            <div>
              <Text className="eyebrow" span>
                Based
              </Text>
              <Text c="dimmed" mt={8} size="sm">
                Copenhagen, Denmark
              </Text>
            </div>
            <Divider />
            <div>
              <Text className="eyebrow" span>
                Target Roles
              </Text>
              <Text c="dimmed" mt={8} size="sm">
                Audio Software Engineer, DSP Tools Engineer, AI Product
                Engineer, Full-Stack Software Engineer
              </Text>
            </div>
            <Divider />
            <div>
              <Text className="eyebrow" span>
                Current Scope
              </Text>
              <Text c="dimmed" mt={8} size="sm">
                App setup, base layout, homepage structure, and README
                guidance.
              </Text>
            </div>
          </Stack>
        </GridCol>
      </Grid>

      <Section
        eyebrow="Overview"
        title="Start with the profile summary, then open the area you want in detail."
      >
        <Stack gap={40}>
          {previewSections.map((section) => (
            <Anchor
              component={Link}
              href={section.href}
              key={section.title}
              underline="never"
              className="overview-link"
            >
              <Grid className="section-row" gap="lg">
                <GridCol span={{ base: 12, md: 4 }}>
                  <Text c="dimmed" size="sm">
                    {section.state}
                  </Text>
                </GridCol>
                <GridCol span={{ base: 12, md: 8 }}>
                  <div className="overview-link-header">
                    <Title order={3} className="row-title">
                      {section.title}
                    </Title>
                    <Text className="overview-link-arrow" span>
                      →
                    </Text>
                  </div>
                  <Text c="dimmed" mt="sm" size="sm">
                    {section.description}
                  </Text>
                </GridCol>
              </Grid>
            </Anchor>
          ))}
        </Stack>
      </Section>

      <Section
        eyebrow="Next"
        title="PR 2 should add typed profile data and the first real content pages."
      >
        <Text c="dimmed" maw={720} size="sm">
          The current structure is ready to be populated with profile
          knowledge, experience entries, projects, skills, and recruiter assets
          without another visual reset.
        </Text>
      </Section>
    </Stack>
  );
}
