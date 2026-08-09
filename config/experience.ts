import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  /** Either a Date, or the literal word "Present" for a current role. */
  endDate: Date | "Present";
  /** Short summary lines shown on the card. Keep to 3. */
  description: string[];
  /** Fuller bullet list shown on the detail page. */
  achievements: string[];
  /** Must be values from the ValidSkills list in constants.ts. */
  skills: ValidSkills[];
  companyUrl?: string;
  /** Path to a logo under public/experience/ — optional, safely omitted. */
  logo?: string;
}

// Newest first — the homepage shows the first 3.
export const experiences: ExperienceInterface[] = [
  {
    id: "aveva",
    position: "AI/ML Intern",
    company: "AVEVA",
    location: "Lake Forest, CA",
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-09-01"),
    description: [
      "Built data visualization widgets for AVEVA CONNECT, a cloud platform serving 10,000+ enterprise customers.",
      "Developed a configurable KPI card and a health heatmap in TypeScript and Angular.",
      "Worked alongside senior engineers on a production SaaS codebase.",
    ],
    achievements: [
      "Developed a configurable KPI card visualization in TypeScript and Angular for AVEVA CONNECT's cloud data visualization platform, enabling industries running SCADA systems to surface actionable insights.",
      "Built a health heatmap widget that transformed messy tabular data into clear decisions for more than 10,000 enterprise customers.",
      "Collaborated with senior engineers to design, build, and deploy widgets on AVEVA's visualization platform, following established coding standards and component architecture for a production SaaS product.",
    ],
    skills: ["Typescript", "Angular"],
    companyUrl: "https://www.aveva.com",
  },
  {
    id: "ucsd-research",
    position: "Student Researcher",
    company: "University of California, San Diego",
    location: "San Diego, CA",
    startDate: new Date("2026-03-01"),
    endDate: new Date("2026-06-01"),
    description: [
      "Ran 3.6 million statistical simulations on the UCSD DSMLP compute cluster.",
      "Benchmarked five estimation methods for correlation matrices in high-dimensional statistics.",
      "Optimized a GPT language model's training and inference code for a 9x speedup.",
    ],
    achievements: [
      "Engineered a parallelized simulation workflow on the UCSD DSMLP compute cluster using Python (NumPy, joblib), attaining a 10x speedup while running 3.6 million simulations.",
      "Implemented and benchmarked 5 distinct estimation methods for correlation matrices, visualizing comparative results in Matplotlib and Plotly to guide research direction in weekly findings reviews.",
      "Optimized a GPT language model (Karpathy's microGPT) by refactoring the training and inference code with NumPy and PyTorch, speeding up the program by 9x.",
      "Analyzed input, learned, and output token distributions of the model by generating over 1M rows of data and designing dashboards to draw conclusions.",
    ],
    skills: ["Python", "NumPy", "PyTorch", "Matplotlib", "Plotly"],
    companyUrl: "https://ucsd.edu",
  },
  {
    id: "aibrt",
    position: "Machine Learning Intern",
    company: "American Institute for Behavioral Research and Technology",
    location: "Carlsbad, CA",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Built SQL pipelines capturing 200K+ rows of user interaction data.",
      "Designed and ran a data-collection experiment, then analyzed the results.",
      "Trained an LSTM model to forecast user behavior at a 1% error rate.",
    ],
    achievements: [
      "Debugged and enhanced a touchscreen experiment program in Python, removing a key defect and streamlining procedures to support cleaner data capture.",
      "Built SQL-based data pipelines to capture and structure 200K+ rows of user interaction data, ensuring clean, analysis-ready datasets.",
      "Designed and ran a data-collection experiment, performing statistical analysis and visualization to surface user behavior patterns.",
      "Developed an LSTM model in Python (PyTorch) to forecast user button-press frequency, achieving a 1% error rate.",
    ],
    skills: ["Python", "SQL", "PyTorch"],
    // TODO: confirm this is the right URL for AIBRT.
    companyUrl: "https://aibrt.org",
  },
  {
    id: "dieform",
    position: "Intern",
    company: "Dieform",
    location: "Chino, CA",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-08-01"),
    description: [
      "Analyzed machine calibration and maintenance records ahead of ISO certification audits.",
      "Designed a warehouse organization system for thousands of parts.",
      "Coordinated vendor re-certification to meet audit standards.",
    ],
    achievements: [
      "Analyzed machine calibration and maintenance records in Excel (pivot tables, formulas, data validation) to prepare for ISO certification audits, reducing audit prep time by 25%.",
      "Designed a warehouse organization system for thousands of parts, assigning each a unique code and building a virtual Excel inventory to track stock and location.",
      "Used a maintenance management tracker in Excel to coordinate re-certification with vendors, ensuring 100% compliance with audit standards.",
    ],
    skills: ["Excel"],
  },
];
