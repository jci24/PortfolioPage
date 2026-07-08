import Image from "next/image";
import Link from "next/link";
import { Anchor, Grid, GridCol, Group, Stack, Text } from "@mantine/core";
import type { ExperienceItem } from "@/data/types";

type ExperienceRowProps = {
  item: ExperienceItem;
  href?: string;
};

export function ExperienceRow({ item, href }: ExperienceRowProps) {
  const content = (
    <Grid className="timeline-row" gap="lg">
      <GridCol span={{ base: 12, md: 2.5 }}>
        <Group gap="sm" wrap="nowrap">
          {item.logoSrc ? (
            <div
              className={`timeline-logo${item.logoDark ? " timeline-logo-dark" : ""}`}
              style={{
                width: item.logoBoxWidth ?? 56,
              }}
            >
              <Image
                alt={`${item.company} logo`}
                className="timeline-logo-image"
                height={item.logoHeight ?? 28}
                src={item.logoSrc}
                width={item.logoWidth ?? 72}
              />
            </div>
          ) : (
            <div className="timeline-mark">{item.label}</div>
          )}
          <Text fw={500} size="sm">
            {item.company}
          </Text>
        </Group>
      </GridCol>
      <GridCol span={{ base: 12, md: 7 }}>
        <Stack gap={2}>
          <Group justify="space-between" gap="sm" wrap="nowrap" align="flex-start">
            <div>
              <Text fw={600} size="sm">
                {item.title}
              </Text>
              {item.subtitle ? (
                <Text c="dimmed" size="sm">
                  {item.subtitle}
                </Text>
              ) : null}
            </div>
            {href ? (
              <Text className="timeline-arrow" span>
                →
              </Text>
            ) : null}
          </Group>
          <Text c="dimmed" size="sm">
            {item.summary}
          </Text>
        </Stack>
      </GridCol>
      <GridCol span={{ base: 12, md: 2.5 }}>
        <Text c="dimmed" ta={{ base: "left", md: "right" }} size="sm">
          {item.period}
        </Text>
      </GridCol>
    </Grid>
  );

  if (!href) {
    return content;
  }

  return (
    <Anchor
      component={Link}
      href={href}
      underline="never"
      className="timeline-link"
    >
      {content}
    </Anchor>
  );
}
