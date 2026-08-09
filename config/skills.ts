import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  /** 1-5. Drives the star display and the sort order below. */
  rating: number;
  icon: any;
}

// ─────────────────────────────────────────────────────────────────────────────
// Every skill here is backed by something on your resume — that's deliberate,
// since interviewers ask about whatever is listed.
//
// TODO: sanity-check the ratings. They're inferred from how central each tool
// was to your work, not from anything you told me.
//
// To add a skill, see the 3-step note in config/constants.ts.
// ─────────────────────────────────────────────────────────────────────────────

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "The through-line of every role and project — simulations, modeling, pipelines, and analysis.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "SQL",
    description:
      "Built pipelines capturing and structuring 200K+ rows of user interaction data into analysis-ready datasets.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "PyTorch",
    description:
      "Trained an LSTM forecasting model to a 1% error rate and refactored a GPT model for a 9x speedup.",
    rating: 4,
    icon: Icons.pytorch,
  },
  {
    name: "NumPy",
    description:
      "Vectorized numerical computing behind 3.6 million parallelized statistical simulations.",
    rating: 4,
    icon: Icons.numpy,
  },
  {
    name: "Pandas",
    description:
      "Cleaning, reshaping, and exploring tabular data — the first step in most analysis I do.",
    rating: 4,
    icon: Icons.pandas,
  },
  {
    name: "scikit-learn",
    description:
      "Trained and tuned a Random Forest classifier to an F1-score of 86% on recipe rating prediction.",
    rating: 4,
    icon: Icons.scikitlearn,
  },
  {
    name: "Plotly",
    description:
      "Interactive visualizations for comparing estimation methods and communicating findings in research reviews.",
    rating: 4,
    icon: Icons.plotly,
  },
  {
    name: "Matplotlib",
    description:
      "Static figures for benchmarking results and weekly research findings reviews.",
    rating: 4,
    icon: Icons.matplotlib,
  },
  {
    name: "TensorFlow",
    description:
      "Designed and trained an NLP model that generates original song lyrics from a short prompt.",
    rating: 3,
    icon: Icons.tensorflow,
  },
  {
    name: "TypeScript",
    description:
      "Built production data visualization widgets for a cloud platform serving 10,000+ enterprise customers.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "Angular",
    description:
      "Component architecture for KPI cards and heatmap widgets on AVEVA's CONNECT platform.",
    rating: 3,
    icon: Icons.angular,
  },
  {
    name: "Git",
    description:
      "Version control and collaborative workflows on a shared production SaaS codebase.",
    rating: 3,
    icon: Icons.git,
  },
];

// Sorted strongest-first, so the homepage shows what you're best at.
export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
