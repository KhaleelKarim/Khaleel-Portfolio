import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

// These become the icons in the footer at the bottom of every page.
// To remove one, delete its block. To add one, copy a block and pick an
// icon from components/common/icons.tsx.
export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@KhaleelKarim",
    icon: Icons.gitHub,
    link: "https://github.com/KhaleelKarim",
  },
  {
    name: "LinkedIn",
    username: "Khaleel Karim",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/khaleel-karim-9a08a5308/",
  },
  {
    name: "Gmail",
    username: "1khaleelkarim@gmail.com",
    icon: Icons.gmail,
    link: "mailto:1khaleelkarim@gmail.com",
  },
];
