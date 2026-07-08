import type { ProjectItem } from "@/data/types";

export const projects: ProjectItem[] = [
  {
    slug: "ai-acoustic-analysis",
    name: "AI-assisted acoustic analysis prototype",
    summary:
      "A learning project exploring how deterministic audio and acoustic analysis can be paired with grounded natural-language explanations.",
    tags: ["AI", "Audio analysis", "LLM workflows", "DSP", "Product prototype"],
    details: [
      "Combines structured analysis outputs with explanatory language for technical investigation workflows.",
      "Focuses on keeping the AI layer grounded in evidence instead of producing detached summaries.",
    ],
  },
  {
    slug: "sound-quality-poc",
    name: "Sound Quality POC",
    summary:
      "A proof of concept around objective sound quality metrics and product workflow design.",
    tags: [
      "Sound quality",
      "Psychoacoustics",
      "Acoustic metrics",
      "Product workflow",
    ],
    details: [
      "Worked with loudness, sharpness, roughness, and tonality as practical workflow inputs.",
      "Included user-testing-oriented thinking rather than metric implementation in isolation.",
    ],
  },
  {
    slug: "digital-crossovers-arm",
    name: "Digital audio crossovers on ARM Cortex-M7",
    period: "MSc thesis",
    summary:
      "Thesis work with ICEpower on digital audio crossover behavior for loudspeaker systems.",
    tags: ["Embedded audio", "DSP", "Loudspeakers", "ARM Cortex-M7"],
    details: [
      "Investigated woofer and tweeter signal division and crossover summation effects.",
      "Connected signal-processing theory to practical embedded implementation constraints.",
    ],
  },
  {
    slug: "acoustic-engineering-software",
    name: "Acoustic engineering software for TPA and noise-emission modelling",
    summary:
      "Commercial product software for acoustic data workflows, model comparison, and engineering validation.",
    tags: ["C#/.NET", "React", "Acoustic software", "Validation", "Technical users"],
    details: [
      "Designed for specialist users working with measured and predicted sound data.",
      "Focused on clarity, validation, and comparison-heavy technical workflows.",
    ],
  },
];
