import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

/** A group of screenshots shown on the project detail page. */
interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  /** Prose paragraphs — the story of the project. */
  paragraphs: string[];
  /** Short bullet points — the concrete what-you-did list. */
  bullets: string[];
}

export interface ProjectInterface {
  /** Becomes the page URL: /projects/<id> */
  id: string;
  type: ValidExpType;
  /** The project's display name. */
  companyName: string;
  category: ValidCategory[];
  /** One or two sentences — this is all that shows on the card. */
  shortDescription: string;
  websiteLink?: string;
  /**
   * Optional. If set, the "Read more" button on the project card opens this
   * URL in a new tab instead of the project's page on this site.
   */
  readMoreLink?: string;
  githubLink?: string;
  /** Must be values from the ValidSkills list in constants.ts. */
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  /** Path to an image under public/projects/<id>/ */
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

// Order matters: the first 3 appear on the homepage.
//
// TODO: add screenshots. Drop images into public/projects/<id>/ and list them
// in `pagesInfoArr` / `companyLogoImg`. Both currently point at the site logo
// as a stand-in, so the pages render but look generic.
export const Projects: ProjectInterface[] = [
  {
    id: "song-lyric-nlp",
    companyName: "Song Lyric Generation with NLP",
    type: "Hackathon",
    category: ["NLP", "Machine Learning"],
    shortDescription:
      "A deep learning model built in TensorFlow that generates original song lyrics from a ten-word prompt. Built with a team under hackathon time pressure.",
    techStack: ["Python", "TensorFlow"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Generated Lyrics",
        description:
          "TODO: add a screenshot of the model's output, or a slide from the presentation.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built during a hackathon at UC San Diego, this project asked a deliberately playful question with a serious technical core: can a language model learn the structure of song lyrics well enough to continue a prompt in a way that still sounds like a song?",
        "The model was designed and trained in TensorFlow, taking a ten-word input prompt and generating original lyrics from it. The interesting constraint was less the architecture than the clock — scoping the work so a trainable model existed before judging, rather than an ambitious design that never converged.",
        "Beyond the modeling, a large part of the project was communication. The final round involved explaining the design decisions and the results to a panel of judges, most of whom were not working in NLP day to day, which meant translating architecture choices into plain reasoning about what the model had and had not learned.",
      ],
      bullets: [
        "Designed and trained an NLP model in TensorFlow that generated original song lyrics from a ten-word input prompt.",
        "Collaborated with teammates to plan project scope, divide tasks, and manage time under strict hackathon deadlines.",
        "Presented the model design and results to a panel of judges, translating technical detail into an accessible narrative.",
      ],
    },
  },
  {
    id: "recipe-data-analysis",
    readMoreLink: "https://khaleelkarim.github.io/recipe_analysis/",
    companyName: "Recipe Data Analysis",
    type: "Academic",
    category: ["Data Analysis", "Machine Learning", "Visualization"],
    shortDescription:
      "Exploratory analysis of food.com recipe data, followed by a Random Forest classifier that predicts recipe ratings at an F1-score of 86%.",
    techStack: ["Python", "Pandas", "NumPy", "scikit-learn", "Plotly"],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-03-01"),
    companyLogoImg: "/projects/recipe-data-analysis/cover.png",
    pagesInfoArr: [
      {
        title: "Exploratory Analysis",
        description:
          "TODO: add plots showing the relationships found between preparation time, step count, and nutrition.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project started with a dataset of recipes scraped from food.com and a simple question: what actually distinguishes a well-rated recipe from a poorly-rated one? The obvious hypotheses — faster is better, simpler is better — turned out to be worth testing rather than assuming.",
        "The first half was exploratory. Using Pandas and NumPy, I examined how preparation time, number of steps, and nutritional content related to one another and to user ratings, visualizing the relationships in Plotly to make the patterns legible rather than just statistically present.",
        "The second half turned the analysis into a prediction problem. I trained and tuned a Random Forest classifier in scikit-learn to predict recipe ratings from those features, reaching an F1-score of 86% — a result that says as much about which features carry signal as it does about the model itself.",
      ],
      bullets: [
        "Performed exploratory data analysis on food.com recipe data to uncover patterns in preparation time, step count, and nutritional value using Pandas, NumPy, and Plotly.",
        "Trained and fine-tuned a Random Forest model in scikit-learn to classify recipe ratings, achieving an F1-score of 86%.",
        "Used interactive visualizations to communicate which recipe features actually carried predictive signal.",
      ],
    },
  },
];

// The first 3 projects appear on the homepage.
export const featuredProjects = Projects.slice(0, 3);
