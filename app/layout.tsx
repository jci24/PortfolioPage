import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jaime Castresana Iza | Portfolio",
  description:
    "Software Engineer focused on technical products, audio, DSP tools, and software for specialist users.",
  openGraph: {
    title: "Jaime Castresana Iza | Software Engineer",
    description:
      "Technical products, audio and acoustic software, DSP tools, and applied AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Castresana Iza | Software Engineer",
    description:
      "Technical products, audio and acoustic software, DSP tools, and applied AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="app-shell">
          <Header />
          <main className="main-shell" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
