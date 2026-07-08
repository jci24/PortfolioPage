import Link from "next/link";
import { AnimatedList } from "@/components/animated-list";
import { BlurFade } from "@/components/blur-fade";
import { ExperienceRow } from "@/components/experience-row";
import { ProjectRow } from "@/components/project-row";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const latestExperience = experience.filter((item) => item.group === "latest");
const earlierExperience = experience.filter((item) => item.group === "earlier");
const earlierProjectPreview = projects.slice(0, 3);

export default function Home() {
  return (
    <div className="page-stack">
      <BlurFade>
        <section className="intro-shell">
          <div className="intro-stack intro-center">
            <h1 className="profile-title">{profile.name}</h1>
            <p className="profile-subtitle">{profile.headline}</p>
          </div>
        </section>
      </BlurFade>

      <BlurFade>
        <section className="list-shell">
          <div className="section-stack-large">
            <div>
              <p className="section-kicker">Latest</p>
              <AnimatedList className="list-cluster">
                {latestExperience.map((item) => (
                  <ExperienceRow
                    href={`/work/${item.slug}`}
                    item={item}
                    key={item.slug}
                  />
                ))}
              </AnimatedList>
            </div>

            <div>
              <p className="section-kicker">Earlier</p>
              <AnimatedList className="list-cluster">
                {earlierExperience.map((item) => (
                  <ExperienceRow
                    href={`/work/${item.slug}`}
                    item={item}
                    key={item.slug}
                  />
                ))}
              </AnimatedList>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade>
        <section className="list-shell">
          <div className="section-stack">
            <div className="section-heading-row">
              <p className="section-kicker">Profile</p>
              <Link className="section-link" href="/about">
                Full profile
              </Link>
            </div>
            <div className="summary-panel interactive-panel">
              <p className="detail-body">{profile.summary}</p>
              <p className="detail-muted detail-spacing-top">{profile.detail}</p>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade>
        <section className="list-shell">
          <div className="section-stack">
            <div className="section-heading-row">
              <p className="section-kicker">Selected projects</p>
              <Link className="section-link" href="/projects">
                All projects
              </Link>
            </div>
            <AnimatedList className="list-cluster">
              {earlierProjectPreview.map((item) => (
                <ProjectRow
                  href={`/projects/${item.slug}`}
                  item={item}
                  key={item.slug}
                />
              ))}
            </AnimatedList>
          </div>
        </section>
      </BlurFade>
    </div>
  );
}
