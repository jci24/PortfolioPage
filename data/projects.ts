import type { ProjectItem } from "@/data/types";

const projectItems: ProjectItem[] = [
  {
    slug: "ai-acoustic-analysis",
    name: "SoundLens - AI-assisted acoustic investigation",
    classification: "Personal project",
    repositoryUrl: "https://github.com/jci24/SoundLens",
    imageSrc: "/img/projects/soundlens.jpg",
    imageAlt:
      "Abstract green audio waveform against a black background, used as illustrative photography",
    imageCredit: "Logan Voss / Unsplash",
    summary:
      "A C#/.NET and React platform for comparing recordings and inspecting waveform, spectrum, and signal metrics.",
    context:
      "Engineers need one workflow for comparing recordings, selecting regions, and checking the evidence behind an analysis.",
    contribution: [
      "Built A/B comparison, playback, region selection, and structured reporting.",
      "Implemented RMS, peak, crest-factor, and clipping analysis.",
      "Kept generated explanations linked to deterministic analysis results.",
    ],
    approach: [
      "C#/.NET backend with a React and TypeScript frontend.",
      "Separate DSP calculations from the explanation layer.",
      "Record units, analysis scope, and limitations with each result.",
    ],
    validation: [
      "Automated backend and frontend tests.",
      "Checks for missing evidence and unsupported questions.",
      "Answer review against referenced analysis results.",
    ],
    scopeNote:
      "Active personal project; not presented as a production deployment.",
    tags: ["AI", "Audio analysis", "LLM workflows", "DSP", "Product prototype"],
  },
  {
    slug: "sound-quality-poc",
    name: "Sound Quality POC",
    classification: "Commercial proof of concept",
    imageSrc: "/img/projects/sound-quality.jpg",
    imageAlt:
      "Colourful data visualisation objects on a dark surface, used as illustrative photography",
    imageCredit: "Deng Xiang / Unsplash",
    summary:
      "A commercial proof of concept for comparing sounds using psychoacoustic metrics.",
    context:
      "Engineers needed to compare sounds using loudness, sharpness, roughness, and tonality without losing the signal context.",
    contribution: [
      "Helped design the metric-comparison workflow.",
      "Connected metric results to the compared signals.",
      "Contributed to user evaluation and workflow refinement.",
    ],
    approach: [
      "Group metrics around a step-by-step comparison.",
      "Keep the source signals visible beside metric results.",
      "Refine terminology and ordering with specialist feedback.",
    ],
    validation: [
      "Observed whether users could identify differences between sounds.",
      "Checked metric labels and conclusions against the available evidence.",
      "Used feedback to simplify confusing steps.",
    ],
    scopeNote:
      "Commercial proof of concept; confidential implementation details are omitted.",
    tags: [
      "Sound quality",
      "Psychoacoustics",
      "Acoustic metrics",
      "Product workflow",
    ],
  },
  {
    slug: "digital-crossovers-arm",
    name: "Digital audio crossovers on ARM Cortex-M7",
    classification: "MSc thesis",
    imageSrc: "/img/projects/digital-crossovers.jpg",
    imageAlt:
      "Black-and-white collection of loudspeakers and audio equipment, used as illustrative photography",
    imageCredit: "John de Jong / Unsplash",
    period: "MSc thesis",
    summary:
      "An MSc thesis implementing and evaluating loudspeaker crossover processing on an ARM Cortex-M7.",
    context:
      "The crossover had to divide and recombine woofer and tweeter signals within embedded processing limits.",
    contribution: [
      "Designed and evaluated digital crossover filters.",
      "Implemented signal-processing methods in C/C++.",
      "Measured crossover-region and summed-response behavior.",
    ],
    approach: [
      "Model filter behavior before embedded implementation.",
      "Compare filter choices against the loudspeaker response.",
      "Balance acoustic performance with processing constraints.",
    ],
    validation: [
      "Compared modelled and implemented filter responses.",
      "Inspected summation across the crossover region.",
      "Tested behavior on the embedded target.",
    ],
    scopeNote:
      "MSc thesis completed with ICEpower; proprietary product details are omitted.",
    tags: ["Embedded audio", "DSP", "Loudspeakers", "ARM Cortex-M7"],
  },
  {
    slug: "acoustic-engineering-software",
    name: "Acoustic engineering software for TPA and noise-emission modelling",
    classification: "Professional work",
    imageSrc: "/img/projects/acoustic-software.jpg",
    imageAlt:
      "Vehicle inside an illuminated engineering inspection chamber, used as illustrative photography",
    imageCredit: "KJ Brix / Unsplash",
    summary:
      "Full-stack commercial software for acoustic analysis, model comparison, and validation.",
    context:
      "Acoustic engineers needed clearer workflows for comparing measured and predicted results in TPA and noise-emission models.",
    contribution: [
      "Built full-stack product functionality with C#/.NET, React, and FastEndpoints.",
      "Implemented workflows for acoustic data, model comparison, spectra, spectrograms, and validation.",
      "Worked with product, design, architecture, application engineers, and acoustic specialists.",
    ],
    approach: [
      "Translated specialist tasks into guided product workflows.",
      "Kept measured and predicted data visible during comparisons.",
      "Supported releases with automated tests, CI/CD, and documentation.",
    ],
    validation: [
      "Automated tests for comparison and validation paths.",
      "Workflow reviews with acoustic experts and application engineers.",
      "Checks for consistent terminology and UI states.",
    ],
    scopeNote:
      "Commercial work; product-sensitive details and business results are not disclosed.",
    tags: ["C#/.NET", "React", "Acoustic software", "Validation", "Technical users"],
  },
];

const featuredProjectOrder = [
  "acoustic-engineering-software",
  "ai-acoustic-analysis",
  "sound-quality-poc",
  "digital-crossovers-arm",
];

export const projects = featuredProjectOrder.map((slug) => {
  const project = projectItems.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Missing project data for ${slug}`);
  }

  return project;
});

export function getProjectBySlug(slug: string) {
  return projects.find((item) => item.slug === slug);
}
