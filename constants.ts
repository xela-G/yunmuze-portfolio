import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Nexus",
    category: "Fintech App",
    year: "2024",
    image: "https://picsum.photos/800/600?random=1",
    description: "A futuristic trading platform interface."
  },
  {
    id: 2,
    title: "Void",
    category: "Fashion E-comm",
    year: "2023",
    image: "https://picsum.photos/800/600?random=2",
    description: "Minimalist streetwear shopping experience."
  },
  {
    id: 3,
    title: "Cyber A.I.",
    category: "Landing Page",
    year: "2023",
    image: "https://picsum.photos/800/600?random=3",
    description: "Marketing site for an LLM startup."
  },
  {
    id: 4,
    title: "Archive 09",
    category: "Portfolio",
    year: "2022",
    image: "https://picsum.photos/800/600?random=4",
    description: "Personal branding for photographer."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Product Designer",
    company: "TechFlow Inc.",
    period: "2021 - Present",
    description: "Leading the design system team and shipping core features for the mobile app."
  },
  {
    role: "UI Designer",
    company: "Creative Agency X",
    period: "2018 - 2021",
    description: "Worked on award-winning web experiences for Nike, Spotify, and RedBull."
  },
  {
    role: "Freelance",
    company: "Self-Employed",
    period: "2016 - 2018",
    description: "Specialized in WebGL websites and interactive storytelling."
  }
];
