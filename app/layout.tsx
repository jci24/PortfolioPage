import type { Metadata } from "next";
import "./globals.css";
import { PremiumInteractions } from "@/components/audio-visuals";
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
    "AI-assisted engineering",
    "Technical product development",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jaime Castresana Iza | Software Engineer",
  description:
    "Software engineer building full-stack products and independent AI applications, grounded in testing and an audio/DSP foundation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jaime Castresana Iza | Software Engineer",
    description:
      "Full-stack product engineering, applied AI, and audio/DSP systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaime Castresana Iza | Software Engineer",
    description:
      "Full-stack product engineering, applied AI, and audio/DSP systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}",
          }}
        />
        <PremiumInteractions />
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
