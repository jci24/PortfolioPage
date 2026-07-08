import Link from "next/link";
import { Anchor, Grid, GridCol, Group, Text } from "@mantine/core";
import type { ProjectItem } from "@/data/types";

type ProjectRowProps = {
  item: ProjectItem;
  href?: string;
};

export function ProjectRow({ item, href }: ProjectRowProps) {
  const content = (
    <Grid className="timeline-row" gap="lg">
      <GridCol span={{ base: 12, md: 3 }}>
        <Text fw={500} size="sm">
          {item.name}
        </Text>
      </GridCol>
      <GridCol span={{ base: 12, md: 7 }}>
        <Text c="dimmed" size="sm">
          {item.summary}
        </Text>
      </GridCol>
      <GridCol span={{ base: 12, md: 2 }}>
        <Group justify="flex-end" gap="xs" wrap="nowrap">
          {item.period ? (
            <Text c="dimmed" size="sm">
              {item.period}
            </Text>
          ) : null}
          {href ? (
            <Text className="timeline-arrow" span>
              →
            </Text>
          ) : null}
        </Group>
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
