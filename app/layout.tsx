import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

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
    <html lang="en">
      <body>
        <div className="app-shell">
          <Header />
          <main className="main-shell">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
