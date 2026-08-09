// ─────────────────────────────────────────────────────────────────────────────
// These are the allowed values used elsewhere in config/.
//
// ValidSkills is deliberately a fixed list: if you type a skill name into a
// project's techStack that isn't listed here, the site refuses to build. That
// catches typos, but it means adding a skill is a 3-step job:
//   1. add the name here
//   2. add a matching icon in components/common/icons.tsx
//   3. add the entry in config/skills.ts
// ─────────────────────────────────────────────────────────────────────────────

export type ValidSkills =
  // Languages
  | "Python"
  | "R"
  | "SQL"
  | "Java"
  | "Javascript"
  | "Typescript"
  // Data analysis
  | "Pandas"
  | "NumPy"
  | "SciPy"
  | "Jupyter"
  // Machine learning
  | "scikit-learn"
  | "PyTorch"
  | "TensorFlow"
  | "Keras"
  | "Hugging Face"
  // Data engineering & storage
  | "PostgreSQL"
  | "MySQL"
  | "NoSQL"
  | "Spark"
  | "Airflow"
  | "Databricks"
  | "Snowflake"
  // Visualization
  | "Matplotlib"
  | "Plotly"
  | "Tableau"
  | "Streamlit"
  // Tooling & cloud
  | "Git"
  | "Docker"
  | "AWS"
  | "Google Cloud"
  // Web (for any web-based projects)
  | "React"
  | "Angular"
  | "Next.js"
  | "Tailwind CSS"
  // Other
  | "Excel";

export type ValidCategory =
  | "Machine Learning"
  | "Data Analysis"
  | "Data Engineering"
  | "Visualization"
  | "Statistics"
  | "NLP"
  | "Computer Vision"
  | "Web Dev";

// Drives the filter tabs on /projects and the badge icon on each project card.
export type ValidExpType =
  | "Personal"
  | "Professional"
  | "Academic"
  | "Hackathon";

// Must stay in sync with the keys of pagesConfig in config/pages.ts.
export type ValidPages =
  | "home"
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "resume";
