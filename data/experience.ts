import type { ExperienceItem } from "@/data/types";

export const experience: ExperienceItem[] = [
  {
    slug: "hbk",
    company: "Hottinger Brüel & Kjær",
    label: "HBK",
    logoSrc: "/img/logos/hbk.png",
    logoWidth: 96,
    logoHeight: 30,
    logoBoxWidth: 96,
    title: "Software Engineer",
    period: "September 2023 - Present",
    dateLabel: "Sep 2023 - Present",
    group: "latest",
    summary:
      "Full-stack ownership of commercial engineering features for Transfer Path Analysis (TPA), noise-emission modelling, and sound-quality workflows.",
    bullets: [
      "Owned multiple product features across requirements, technical design, C#/.NET backend work, React frontend implementation, automated testing, and delivery.",
      "Gathered requirements from users, application engineers, and domain experts, separating essential needs from optional improvements before implementation.",
      "Compared UI/UX, algorithm, and visualization-library alternatives; documented trade-offs and presented decisions to stakeholders and potential users.",
      "Ran user tests and specialist reviews for acoustic workflows covering model comparison, measured-versus-predicted sound, spectra, spectrograms, and validation.",
      "Contributed to a Sound Quality proof of concept involving loudness, sharpness, roughness, tonality, workflow design, and user testing.",
    ],
    ownershipExample: {
      problem:
        "A new analysis workflow needed to make dense engineering results understandable without hiding the underlying acoustic evidence.",
      decisions:
        "I gathered user and domain requirements, separated must-haves from optional ideas, and compared interaction, algorithm, and visualization-library options.",
      implementation:
        "I carried the selected approach through backend and frontend development, integrated the visualization library, and added automated coverage around the workflow.",
      result:
        "The working feature progressed through expert review and user testing, with the decisions and trade-offs documented for the wider product team.",
    },
    stack: [
      "C#/.NET",
      "React",
      "FastEndpoints",
      "Azure DevOps",
      "CI/CD",
      "Testing",
    ],
  },
  {
    slug: "icepower",
    company: "ICEpower",
    label: "ICE",
    logoSrc: "/img/logos/icepower.png",
    logoDark: true,
    logoWidth: 64,
    logoHeight: 32,
    logoBoxWidth: 64,
    title: "R&D Software Assistant",
    period: "May 2022 - June 2023",
    dateLabel: "May 2022 - Jun 2023",
    group: "earlier",
    summary:
      "Software-assisted amplifier R&D spanning test automation, network resilience, result analysis, and embedded audio processing.",
    bullets: [
      "Extended an existing Python and pytest test framework with scripts for amplifier and communication testing.",
      "Exercised network traffic stress, audio and communication disruption, power cycling, triggering, and recovery behaviour.",
      "Processed test results in Python and produced plots that made failures and system behaviour easier to inspect.",
      "Contributed to existing testing pipelines rather than treating automation as a standalone prototype.",
      "Completed an MSc thesis on digital audio crossovers and embedded processing for loudspeaker systems on ARM Cortex-M7.",
    ],
    stack: ["Python", "pytest", "Test automation", "Networking", "DSP", "ARM Cortex-M7"],
  },
];

export function getExperienceBySlug(slug: string) {
  return experience.find((item) => item.slug === slug);
}
