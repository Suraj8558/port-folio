import { Github, Linkedin} from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoMaterialUI from "/public/images/logos/material-icon.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoRWIT from "/public/images/company/RWlogo.svg";
import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";
import ProjectAirDNA from "/public/images/projects/AirDNA.png";
import ProjectRWIT from "/public/images/projects/RW-Infotech.png";


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Suraj8558/",
  GITHUB_REPO: "https://github.com/Suraj8558/web-portfolio",
  Linkedin: "https://www.linkedin.com/in/suraj8558/",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Suraj8558",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/suraj8558/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },

  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "MUI",
    logo: LogoMaterialUI,
    url: "https://mui.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoRWIT, // Replace with actual import
    logoAlt: "RW Infotech logo",
    position: "Frontend Developer",
    startDate: new Date(2023, 3), // April 2023
    currentlyWorkHere: true,
    summary: [
      "Delivered high-quality, end-to-end web solutions for diverse clients using React, Next.js, and modern toolsets.",
      "Mentored and guided junior developers to enhance their technical skills and code quality.",
      "Collaborated on real-time platforms like Airdna.co, focusing on UI components and performance.",
    ],
  },
  {
    logo: LogoRWIT, // Same logo used
    logoAlt: "RW Infotech logo",
    position: "Junior Frontend Developer",
    startDate: new Date(2022, 3), // April 2022
    endDate: new Date(2023, 2), // March 2023
    summary: [
      "Built responsive and scalable frontend applications with modern frameworks like Nuxt.js and Next.js.",
      "Worked on diverse client projects, integrating headless CMS platforms like Prismic and Storyblok.",
      "Ensured performance optimization and cross-device compatibility.",
    ],
  },
];


export const PROJECTS: ProjectDetails[] = [
  {
    name: "AirDNA",
    description:
      "A powerful platform offering insights and analytics for short-term rental markets, powered by a dynamic CMS for seamless content delivery.",
    url: "https://www.airdna.co/",
    previewImage: ProjectAirDNA, // Replace with the actual image import
    technologies: ["Next.js", "TypeScript", "MUI", "Prismic"],
  },
  {
    name: "RWIT Website",
    description:
      "The official website of RW Infotech, built with a headless CMS and designed for high performance, flexibility, and easy content management.",
    url: "https://www.rwit.io/",
    previewImage: ProjectRWIT, // Replace with the actual image import
    technologies: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "Storyblok",
      "GraphQL",
      "Vercel",
    ],
  },
];


export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend surajand will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "surajwas extremely easy and pleasant to work with and he truly cares about the project being a success. surajhas a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
