import type { ProjectItem } from "@/data/types";

const projectItems: ProjectItem[] = [
  {
    slug: "ai-acoustic-analysis",
    name: "SoundLens - AI-assisted acoustic investigation",
    classification: "Personal project",
    repositoryUrl: "https://github.com/jci24/SoundLens",
    imageSrc: "/img/projects/soundlens.jpg",
    imageAlt:
      "Abstract green waveform representing audio evidence and acoustic analysis",
    imageCredit: "Logan Voss / Unsplash",
    summary:
      "An AI-assisted platform for investigating recordings, product variants, test conditions, and algorithm outputs using deterministic DSP evidence.",
    context:
      "Engineers need one traceable workflow for investigating batches of recordings, selecting regions, comparing variants, and checking the evidence behind an interpretation.",
    contribution: [
      "Designed the product direction, backend/frontend architecture, and technical-user workflow.",
      "Built deterministic waveform, spectrum, metric, tonal, and region-scoped analysis.",
      "Implemented an AI Copilot using structured tool calls over typed evidence, units, and limitations.",
      "Created traceable reports, refusal behaviour, and automated evaluation for reliable AI-assisted analysis.",
      "Designed the roadmap toward batch comparison, anomaly investigation, and scalable engineering workflows.",
    ],
    approach: [
      "C#/.NET backend with a React and TypeScript frontend.",
      "Separate deterministic DSP calculations from the AI explanation layer.",
      "Ground every generated answer in typed evidence with explicit units, scope, and limitations.",
      "Structure analysis capabilities as tools that can support increasingly complex investigation workflows.",
    ],
    validation: [
      "Automated backend, frontend, and workflow behaviour tests.",
      "Checks for missing evidence, unsupported questions, and safe refusal behaviour.",
      "Answer evaluations against the exact analysis evidence referenced in each response.",
    ],
    scopeNote:
      "Active personal project; not presented as a production deployment.",
    tags: ["C#/.NET", "React", "AI Copilot", "DSP", "Evaluation"],
  },
  {
    slug: "sound-quality-poc",
    name: "Sound Quality POC",
    classification: "Commercial proof of concept",
    imageSrc: "/img/projects/sound-quality.jpg",
    imageAlt:
      "Colourful data visualisations representing psychoacoustic metric comparison",
    imageCredit: "Deng Xiang / Unsplash",
    summary:
      "A commercial proof of concept for comparing sounds using psychoacoustic metrics.",
    context:
      "Engineers needed to compare sounds using loudness, sharpness, roughness, and tonality without losing the signal context.",
    contribution: [
      "Helped turn specialist psychoacoustic analysis into a guided metric-comparison workflow.",
      "Connected metric results to the compared signals.",
      "Made differences between sounds easier to inspect without losing the underlying signal context.",
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
      "Loudspeakers and audio equipment representing embedded crossover development",
    imageCredit: "John de Jong / Unsplash",
    period: "MSc thesis",
    summary:
      "An MSc thesis implementing and evaluating loudspeaker crossover processing on an ARM Cortex-M7.",
    context:
      "The crossover had to divide and recombine woofer and tweeter signals within embedded processing limits.",
    contribution: [
      "Designed and evaluated digital crossover filters.",
      "Implemented signal-processing methods in C/C++.",
      "Connected modelled filter behaviour to embedded measurements, making crossover trade-offs visible in the summed loudspeaker response.",
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
      "Vehicle in an engineering inspection chamber representing commercial acoustic modelling workflows",
    imageCredit: "KJ Brix / Unsplash",
    summary:
      "Full-stack commercial software for acoustic analysis, model comparison, and validation.",
    context:
      "Acoustic engineers needed clearer workflows for comparing measured and predicted results in TPA and noise-emission models.",
    contribution: [
      "Reduced fragmented expert tasks into guided workflows connecting import, analysis, model comparison, and validation.",
      "Built full-stack product functionality with C#/.NET, React, and FastEndpoints.",
      "Made measured-versus-predicted results easier to inspect across spectra, spectrograms, phase, and model views.",
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
  "ai-acoustic-analysis",
  "acoustic-engineering-software",
  "digital-crossovers-arm",
  "sound-quality-poc",
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
