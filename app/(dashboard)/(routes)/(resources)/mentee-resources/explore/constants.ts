import ResourceOne from "@/public/assets/resource_one.png";
import ResourceTwo from "@/public/assets/resource_two.png";
import { LockIcon, PlayIcon } from "@/public/SVGs";

export const resourceLinks = [
  { label: "All", id: 1, to: "" },
  { label: "Design", id: 2, to: "" },
  { label: "Marketing", id: 3, to: "" },
  { label: "Business", id: 4, to: "" },
  { label: "Career", id: 5, to: "" },
];

export const newResources = [
  {
    id: 1,
    title: "Collaboration in the workspaces",
    author: "Dylan Matthias | UX Researcher, Microsoft",
    rate: 4.5,
    reviews: 20,
    price: "2,500",
    poster: ResourceOne,
    to: 1,
  },
  {
    id: 2,
    title: "Essentials of Business Management",
    author: "MaryAnn Clive I Project Manager, Netflix",
    rate: 4.5,
    reviews: 20,
    price: "2,500",
    poster: ResourceTwo,
    to: 1,
  },
  {
    id: 3,
    title: "UX Principles for Designers",
    author: "Blessing Derek I UX Auditor, Google",
    rate: 4.5,
    reviews: 20,
    price: "2,500",
    poster: ResourceOne,
    to: 1,
  },
];

export const courseTitles = [
  { id: 1, title: "Introduction", icon: PlayIcon },
  { id: 2, title: "What is UI Design", icon: LockIcon },
  { id: 3, title: "What is UI Design", icon: LockIcon },
  { id: 4, title: "What is UI Design", icon: LockIcon },
];

export const courseContents = [
  { id: 1, title: "Accesible on mobile" },
  { id: 2, title: "Closed Captions" },
  { id: 3, title: "Private Slack Communiy" },
  { id: 4, title: "Real time chat with instructor" },
  { id: 5, title: "Flexible Learning" },
];
