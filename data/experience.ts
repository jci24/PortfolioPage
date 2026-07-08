import type { ExperienceItem } from "@/data/types";

export const experience: ExperienceItem[] = [
  {
    slug: "hbk",
    company: "Hottinger Brüel & Kjær",
    label: "HBK",
    title: "Software Engineer",
    period: "Recent",
    group: "latest",
    summary:
      "Commercial acoustic engineering software for Transfer Path Analysis and noise-emission modelling workflows.",
    bullets: [
      "Built product software for technical acoustic users with C#/.NET, React, FastEndpoints, testing, and CI/CD.",
      "Worked on workflows for acoustic data, model comparison, measured-versus-predicted sound, SPL, spectra, spectrograms, and validation.",
      "Collaborated with product owners, UI designers, architects, application engineers, and acoustic experts.",
      "Contributed to a Sound Quality proof of concept involving loudness, sharpness, roughness, tonality, workflow design, and user testing.",
    ],
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
    title: "R&D Software Assistant",
    period: "Earlier",
    group: "earlier",
    summary:
      "Audio amplifier R&D, testing, and embedded audio processing work in a product-focused setting.",
    bullets: [
      "Worked with amplifier testing, analysis tooling, TCP/IP, AVB/MoIP, and network stress testing.",
      "Completed an MSc thesis on digital audio crossovers and embedded processing for loudspeaker systems on ARM Cortex-M7.",
      "Gained practical exposure to DSP concepts, loudspeaker signal chains, and engineering tradeoffs in audio products.",
    ],
    stack: ["Embedded audio", "DSP", "ARM Cortex-M7", "Testing", "Networking"],
  },
];
