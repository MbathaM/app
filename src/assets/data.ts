import { createElement } from "react";

import stpatricks from "@/assets/stpatricks.png";
import designtreasurehub from "@/assets/designtreasurehub.png";
import { BriefcaseIcon, GraduationCapIcon } from "@/components/icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bachelor of Education",
    location: "Pretotia, SA",
    description:
      "I graduated after 4 of studying. I immediately found a job as a Computer Lab Assistant.",
    icon: createElement(GraduationCapIcon),
    date: "2020",
  },
  {
    title: "Graduated Bachelor of Education Honours",
    location: "Pretotia, SA",
    description:
      "I graduated after 2 of studying. I also upskilled to the full stack.",
    icon: createElement(GraduationCapIcon),
    date: "2020 - 2022",
  },
  {
    title: "IT/CAT Educator",
    location: "Kokstad, SA",
    description:
      "I'm now a full-time Educator and working as a web developer freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: createElement(BriefcaseIcon),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "St Patrick's College Website",
    description:
      "As part of my current role, I developed and maintained the School website. Utilizing WordPress, I created an interactive online platform to enhance the school's digital presence.",
    tags: ["WordPress"],
    imageUrl: stpatricks,
  },
  {
    title: "Design Treasure Hub",
    description:
      "As a sole creator and designer, I crafted Design Treasure Hub—a unique online store specializing in both brand new and second-hand designer brands.",
    tags: ["Redux", "TypeScript", "Next.js", "Tailwind CSS"],
    imageUrl: designtreasurehub,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "Wordpress",
  "Shopify",
] as const;
