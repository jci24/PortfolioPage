import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WorkPage } from "@/components/work-page";
import { getExperienceBySlug } from "@/data/experience";

export const metadata: Metadata = {
  title: "ICEpower Experience | Jaime Castresana Iza",
  description:
    "Software engineering work spanning embedded audio, DSP tooling, and product-focused technical development at ICEpower.",
  alternates: {
    canonical: "/work/icepower",
  },
};

export default function IcepowerWorkPage() {
  const item = getExperienceBySlug("icepower");

  if (!item) {
    notFound();
  }

  return <WorkPage item={item} />;
}
