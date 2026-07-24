import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WorkPage } from "@/components/work-page";
import { getExperienceBySlug } from "@/data/experience";

export const metadata: Metadata = {
  title: "HBK Experience | Jaime Castresana Iza",
  description:
    "Software engineering work on commercial acoustic software and specialist technical workflows at HBK.",
  alternates: {
    canonical: "/work/hbk",
  },
};

export default function HbkWorkPage() {
  const item = getExperienceBySlug("hbk");

  if (!item) {
    notFound();
  }

  return <WorkPage item={item} />;
}
