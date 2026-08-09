import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

// `title` and `description` are the heading and subheading shown at the top of
// each page. The `metadata` pair is what search engines display instead.
//
// NOTE: the keys below must exactly match the ValidPages list in constants.ts.
// Adding or removing a page here means editing that file too.
export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio.",
    metadata: {
      title: "Home",
      description: "Khaleel Karim's data science portfolio.",
    },
  },
  skills: {
    title: "Skills",
    description: "The tools and techniques I work with.",
    metadata: {
      title: "Skills",
      description:
        "Khaleel Karim's technical skills across machine learning, analytics, and data engineering.",
    },
  },
  projects: {
    title: "Projects",
    description: "Data science projects and technical work.",
    metadata: {
      title: "Projects",
      description:
        "Khaleel Karim's data science projects, from analysis to machine learning.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect.",
    metadata: {
      title: "Contact",
      description: "Get in touch with Khaleel Karim.",
    },
  },
  resume: {
    title: "Resume",
    description: "Khaleel Karim's resume.",
    metadata: {
      title: "Resume",
      description: "Khaleel Karim's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Where I've worked and what I did there.",
    metadata: {
      title: "Experience",
      description: "Khaleel Karim's work experience and career timeline.",
    },
  },
};
