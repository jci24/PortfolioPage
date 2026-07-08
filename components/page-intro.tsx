import { Stack, Text, Title } from "@mantine/core";

type PageIntroProps = {
  title: string;
  subtitle: string;
};

export function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <Stack gap={6} mb={48}>
      <Title order={1} className="page-title">
        {title}
      </Title>
      <Text c="dimmed" maw={760}>
        {subtitle}
      </Text>
    </Stack>
  );
}
