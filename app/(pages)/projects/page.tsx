import { AnimatedList } from "@/components/animated-list";
import { BlurFade } from "@/components/blur-fade";
import { PageIntro } from "@/components/page-intro";
import { ProjectRow } from "@/components/project-row";
import { Section } from "@/components/section";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <BlurFade>
        <PageIntro
          title="Projects"
          subtitle="A concise set of projects spanning audio analysis, sound quality workflows, embedded DSP, and technical product software."
        />
      </BlurFade>

      <BlurFade>
        <Section eyebrow="Selected work" title="Project overview">
          <AnimatedList className="list-cluster">
            {projects.map((project) => (
              <ProjectRow
                href={`/projects/${project.slug}`}
                item={project}
                key={project.slug}
              />
            ))}
          </AnimatedList>
        </Section>
      </BlurFade>

      <BlurFade>
        <Section eyebrow="Tags" title="What these projects emphasize">
          <div className="pill-group">
            {Array.from(new Set(projects.flatMap((project) => project.tags))).map((tag) => (
              <span className="detail-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </Section>
      </BlurFade>
    </div>
  );
}
