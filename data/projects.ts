import type { ProjectItem } from "@/data/types";

const projectItems: ProjectItem[] = [
  {
    slug: "justcall",
    name: "JustCall - reliable voice practice",
    classification: "Independent project · Active development",
    imageSrc: "/img/projects/soundlens.jpg",
    imageAlt:
      "JustCall mobile call flow showing learner identity, voice connection, and post-call evidence",
    imageCredit: "Product interface based on the current implementation",
    visualKind: "justcall",
    summary:
      "A voice-first language-practice product with a React Native app, authenticated TypeScript backend, real-time AI conversation, and explicit session-reliability safeguards.",
    context:
      "A useful speaking product needs more than a working voice SDK: the learner must be authenticated, the microphone and provider lifecycle must stay predictable, and later feedback must remain tied to the correct conversation evidence.",
    contribution: [
      "Defined and built the product as an independent, story-by-story full-stack project.",
      "Built the Expo and React Native mobile flow for microphone permission, learner identity, call controls, recovery states, and post-call source status.",
      "Built a TypeScript API with Hono, Zod, Supabase JWT verification, PostgreSQL-backed conversation ownership, and short-lived provider sessions.",
      "Integrated ElevenLabs through a native iOS bridge after reproducing and isolating a reliability issue in the original React Native transport.",
      "Designed the feedback boundary so model proposals are checked against owned source evidence before they can be presented to a learner.",
    ],
    approach: [
      "Keep mobile UI, backend use cases, authentication, provider transport, and persistence behind explicit boundaries.",
      "Use attempt identity, cancellation, request deadlines, and provider cleanup to prevent late async work from reopening an ended call.",
      "Treat AI output as a proposal over traceable evidence, with deterministic validation and honest insufficiency states.",
      "Ship one approved vertical slice at a time and keep production, provider, data-retention, and release gates explicit.",
    ],
    validation: [
      "Unit, interaction, API-contract, authorization, cancellation, and database tests cover deterministic product and session behaviour.",
      "Ten consecutive two-way calls passed on an iPhone 12 without restarting the app; permission denial, cancellation, retry, network-loss recovery, and app-close cleanup were also walked through on-device.",
      "Current automated evaluation checks evidence binding, parsing, rubric limits, unsupported inputs, and safe failure paths for the first feedback slice.",
      "Production deployment, broader learner calibration, linguistic effectiveness, and long-term learning outcomes remain unvalidated and are not claimed.",
    ],
    scopeNote:
      "Independent project in active development. The real iOS call path and local backend have been validated in development; production deployment and learner-outcome claims remain outside the current evidence.",
    tags: ["TypeScript", "React Native", "Hono", "Supabase", "Voice AI", "Testing"],
  },
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
      "Created traceable reports, refusal behaviour, and automated evaluation for evidence-grounded AI-assisted analysis.",
      "Designed the roadmap toward batch comparison, anomaly investigation, and scalable engineering workflows.",
    ],
    approach: [
      "C#/.NET backend with a React and TypeScript frontend.",
      "Separate deterministic DSP calculations from the AI explanation layer.",
      "Ground every generated answer in typed evidence with explicit units, scope, and limitations.",
      "Structure analysis capabilities as tools that can support increasingly complex investigation workflows.",
    ],
    validation: [
      "Automated backend, frontend, and workflow tests check deterministic calculations, tool contracts, and expected UI behaviour.",
      "Evaluation cases check missing evidence, unsupported questions, scope and unit handling, and safe refusal behaviour.",
      "Generated answers are checked against the exact analysis evidence they reference; real-user usefulness and production reliability remain separate validation work.",
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
    name: "Acoustic engineering software for Transfer Path Analysis (TPA) and noise-emission modelling",
    classification: "Professional work",
    imageSrc: "/img/projects/acoustic-software.jpg",
    imageAlt:
      "Vehicle in an engineering inspection chamber representing commercial acoustic modelling workflows",
    imageCredit: "KJ Brix / Unsplash",
    summary:
      "Full-stack commercial software for acoustic analysis, model comparison, and validation.",
    context:
      "Acoustic engineers needed clearer workflows for comparing measured and predicted results in Transfer Path Analysis (TPA) and noise-emission models.",
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
  "justcall",
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
