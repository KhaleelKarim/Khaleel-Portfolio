// ─────────────────────────────────────────────────────────────────────────────
// This is the single source of truth for your identity.
// Almost every page pulls from here — change it once, it updates everywhere.
// Anything marked TODO still needs a real value.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  /** Shown in the browser tab and as the default page title. */
  name: "Khaleel Karim - Data Scientist",
  /** Shown in the site header and used in SEO metadata. */
  authorName: "Khaleel Karim",
  /** Your GitHub handle. Also used for the byline on project pages. */
  username: "KhaleelKarim",
  /** The blurb Google and social previews show. Aim for 150-160 characters. */
  description:
    "Khaleel Karim - B.S. Data Science at UC San Diego. Machine learning and statistical modeling, from SQL pipelines over 200K+ records to transformer and LSTM architectures.",
  /** TODO: replace with your real domain once deployed (e.g. a Vercel URL). */
  url: "https://khaleel-portfolio.vercel.app",
  links: {
    github: "https://github.com/KhaleelKarim",
    linkedin: "https://www.linkedin.com/in/khaleel-karim-9a08a5308/",
  },
  /** TODO: the preview image shown when the site is shared on social media (1200x630). */
  ogImage: "/logo.png",
  /** TODO: your own favicon and logo. */
  iconIco: "/favicon.ico",
  logoIcon: "/logo.png",
  /** Terms you want to be findable by in search engines. */
  keywords: [
    "Khaleel Karim",
    "Data Scientist",
    "Data Science",
    "UC San Diego",
    "UCSD",
    "Machine Learning",
    "Deep Learning",
    "Statistical Modeling",
    "Data Analysis",
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "LSTM",
    "Transformers",
    "NLP",
    "Data Visualization",
    "Portfolio",
  ],
};
