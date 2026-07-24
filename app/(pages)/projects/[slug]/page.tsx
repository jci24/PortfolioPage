import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectPage } from "@/components/project-page";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getProjectBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.name} | Jaime Castresana Iza`,
    description: item.summary,
    alternates: {
      canonical: `/projects/${item.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProjectBySlug(slug);

  if (!item) {
    notFound();
  }

  return <ProjectPage item={item} />;
}
