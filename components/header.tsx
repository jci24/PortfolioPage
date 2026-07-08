import Link from "next/link";
import { Anchor, Group, Stack, Text } from "@mantine/core";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
  { label: "Assistant", href: "/chat" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Stack gap={2}>
          <Text className="eyebrow" span>
            Jaime Castresana Iza
          </Text>
          <Text c="dimmed" size="sm">
            Software Engineer | Audio, DSP Tools & AI Product Development
          </Text>
        </Stack>

        <nav aria-label="Primary" className="site-nav">
          <Group gap="lg">
            {navigationItems.map((item) => (
              <Anchor
                c="dimmed"
                component={Link}
                href={item.href}
                key={item.label}
                size="sm"
                underline="never"
                className="site-nav-link"
              >
                {item.label}
              </Anchor>
            ))}
          </Group>
        </nav>
      </div>
    </header>
  );
}
