import { Group, Text } from "@mantine/core";

export function Footer() {
  return (
    <footer className="site-footer">
      <Group justify="space-between" gap="xs" align="flex-start" className="site-footer-inner">
        <Text c="dimmed" size="sm">
          Portfolio foundation shaped for a clean, recruiter-friendly reading
          flow.
        </Text>
        <Text c="dimmed" size="sm">
          Next.js, TypeScript, Tailwind CSS, Mantine.
        </Text>
      </Group>
    </footer>
  );
}
