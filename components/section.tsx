import type { ReactNode } from "react";
import { Grid, GridCol, Stack, Text, Title } from "@mantine/core";

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function Section({ eyebrow, title, children, aside }: SectionProps) {
  return (
    <Grid className="content-section" gap="xl">
      <GridCol span={{ base: 12, lg: 3 }}>
        <Stack gap={6}>
          <Text className="eyebrow" span>
            {eyebrow}
          </Text>
          {aside ? (
            <Text c="dimmed" size="sm">
              {aside}
            </Text>
          ) : null}
        </Stack>
      </GridCol>
      <GridCol span={{ base: 12, lg: 9 }}>
        <Stack gap="sm">
          <Title order={2} className="section-title">
            {title}
          </Title>
          <div>{children}</div>
        </Stack>
      </GridCol>
    </Grid>
  );
}
