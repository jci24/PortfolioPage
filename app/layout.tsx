import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaimecastresana.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaime Castresana Iza",
  url: siteUrl,
  image: `${siteUrl}/img/jaime-castresana-portrait.jpg`,
  jobTitle: "Software Engineer",
  email: "mailto:jaime.castresana@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Copenhagen",
    addressCountry: "DK",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Aalborg University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Deusto",
    },
  ],
  sameAs: [
    "https://github.com/jci24",
    "https://www.linkedin.com/in/jaimecastresanaiza/",
  ],
  knowsAbout: [
    "Software engineering",
    "Audio software",
    "Acoustic engineering",
    "Digital signal processing",
    "Technical product development",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jaime Castresana Iza | Portfolio",
  description:
    "Software Engineer focused on technical products, audio, DSP tools, and software for specialist users.",
  alternates: {
    canonical: "/",
  },
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
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
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
