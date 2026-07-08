import "@mantine/core/styles.css";
import type { Metadata } from "next";
import {
  Box,
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "Roboto, sans-serif",
  headings: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
  },
  colors: {
    teal: [
      "#edf7f7",
      "#d6ecec",
      "#add8d9",
      "#82c3c5",
      "#5bafb1",
      "#419fa1",
      "#31898a",
      "#247173",
      "#165a5c",
      "#0a5b66",
    ],
  },
});

export const metadata: Metadata = {
  title: "Jaime Castresana Iza | Portfolio",
  description:
    "Software Engineer focused on audio, DSP tools, AI product development, and technical software for specialist users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Box className="app-shell">
            <Header />
            <main className="main-shell">{children}</main>
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
