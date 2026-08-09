import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khaleel Karim | Data Scientist",
    short_name: "Khaleel Karim",
    description:
      "Khaleel Karim - Data Science student at UC San Diego, building projects across machine learning, analytics, and data engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "data science",
      "machine learning",
      "analytics",
      "statistics",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
