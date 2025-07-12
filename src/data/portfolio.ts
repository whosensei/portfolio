// Portfolio Data - Centralized data for the entire portfolio website

// ========================
// PERSONAL INFORMATION
// ========================

export const personalInfo = {
  name: "Hi, I'm Dipesh 👋",
  displayName: "Dipesh",
  title: "Full Stack Engineer",
  alternateTitle: "whosensei",
  alternateSubtitle: "Vague optimist!",
  email: "dip.singnurkar31@gmail.com",
  resumeUrl: "./Dipesh_Resume.pdf",
  heroImage: "/hero.jpeg",
  bio: {
    main: `I'm Dipesh, a tech enthusiast who's been deep in the world of web apps, AI, and startup hustle. From shipping features to building my own SaaS, I love transforming ideas into user-centric products. When I'm not writing or debugging TypeScript code or fine-tuning ML models, you'll find me working on side projects, exploring web3 or other new technologies, watching F1, or playing football.`,
    current: `My strength is building core web applications which can serve people throughout the globe.
              Currently juggling DevOps, diving into Fintech, and building an AI-powered SaaS.`,
  },
};

// ========================
// TECH STACK
// ========================
export const techStack = [
  { label: "React", category: "frontend" },
  { label: "Next.js", category: "frontend" },
  { label: "Node.js", category: "backend" },
  { label: "Python", category: "backend" },
  { label: "JavaScript", category: "language" },
  { label: "TypeScript", category: "language" },
  { label: "Postgresql", category: "database" },
  { label: "Golang", category: "language" },
  { label: "Docker", category: "devops" },
  { label: "AWS", category: "cloud" },
  { label: "Tailwind", category: "styling" },
  { label: "OpenAI", category: "ai" },
];

// ========================
// EXPERIENCES
// ========================
export interface Experience {
  heading: string;
  subheading: string;
  points: string[];
  category?: string;
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    heading: "Durvah IT",
    subheading: "Full Stack Engineer Intern (May 2024 - Jun 2024)",
    points: [
      "Developed an internal AI-powered meeting summarizer tool that transcribed audio into timestamped text using Hugging Face's Whisper-large v2 model, storing outputs in organized text files",
      "Utilized FFmpeg to preprocess audio inputs—handling format conversion, segmentation, and noise reduction—ensuring accurate transcription performance.",
      "Designed and integrated a Salesforce-compatible API to automate the upload of transcribed files and trigger email notifications to designated recipients",
    ],
    category: "internship",
    featured: true,
  },
  {
    heading: "Research Intern",
    subheading: "Using LLMs to convert text to indic languages",
    points: [],
    category: "research",
  },
  // Commented out experiences - uncomment when ready to display
  // {
  //   heading: "Finance & Investment Client (Freelance Project)",
  //   subheading: "Freelance Frontend Developer (1 Week)",
  //   points: [
  //     "Built a responsive website for a finance and investment firm, showcasing their services, expertise, and success stories.",
  //     "Implemented modern visuals and intuitive navigation across key pages including About, Services, Asset Management, and Contact.",
  //     "Delivered a clean, professional platform that reinforced brand credibility and helped attract new client leads.",
  //   ],
  //   category: "freelance",
  // },
  // {
  //   heading: "GSSOC - GirlsScript Summer of Code",
  //   subheading: "Contributor",
  //   points: [
  //     "Led the development and optimization of features across multiple frameworks, resulting in a 25% improvement in code performance.",
  //     "Resolved over 20+ issues and helped building 5 new features in private and public projects with React, Node, Next.js, Websockets.",
  //     "Improved deployment efficiency by 30% through implementing serverless workers on Cloudflare with Hono.js, working within a team of 8 contributors.",
  //   ],
  //   category: "opensource",
  // },
];

// ========================
// PROJECTS
// ========================
export interface Project {
  heading: string;
  description: string;
  link?: string;
  github: string;
  techstack: string[];
  isOngoing?: boolean;
  featured?: boolean;
  category?: string;
}

export const projects: Project[] = [
  {
    heading: "Echo",
    description:
      "Echo - A platform that lets you create ads and social media posts for your campaigns within seconds, making it easy to promote your app effectively.",
    link: "https://echo-chi-azure.vercel.app/",
    github: "https://github.com/whosensei/Echo",
    techstack: [
      "Next.js",
      "PostgreSQL",
      "Typescript",
      "Tailwind CSS",
      "OpenAI API",
      "AWS S3",
    ],
    isOngoing: true,
    category: "marketing-tool",
  },
  {
    heading: "Template",
    description:
      "Easily create, organize, and personalize professional email templates for job applications, Cold Mailing, and beyond. Simplify and streamline your messaging workflow",
    link: "https://template-io-ochre.vercel.app",
    github: "https://github.com/whosensei/Template.io",
    techstack: ["Next.js", "PostgreSQL", "Typescript", "Tailwind CSS"],
    featured: true,
    category: "productivity",
  },

  {
    heading: "Drawloop",
    description:
      "Create and edit sketches with our easy-to-use drawing tools. Perfect for brainstorming and ideation with real time collaboration and easy sharing.",
    link: "drawloop.tech",
    github: "https://github.com/whosensei/Drawloop",
    techstack: [
      "TurboRepo",
      "Next.js",
      "Node.js",
      "Typescript",
      "Postgres",
      "Websocket",
      "Tailwind CSS",
      "Open AI",
    ],
    featured: true,
    category: "web-app",
  },
  {
    heading: "PromptPDF",
    description:
      "PromptPDF is an AI-native document assistant powered by Retrieval-Augmented Generation (RAG) that helps students, researchers, and professionals instantly answer questions and understand complex documents.",
    link: "https://prompt-pdf.vercel.app/",
    github: "https://github.com/whosensei/PromptPDF",
    techstack: [
      "Next.js",
      "PostgreSQL",
      "Typescript",
      "OpenAI",
      "AWS S3",
      "PineconeDB",
      "Tailwind CSS",
    ],
    featured: true,
    category: "ai-tool",
  },
];

// ========================
// SOCIAL LINKS
// ========================
export interface SocialLink {
  item: string;
  link: string;
  username: string;
  platform: string;
}

export const socialLinks: SocialLink[] = [
  {
    item: "‎ ‎ X",
    link: "https://x.com/dipesshhhh",
    username: "@dipesshhhh",
    platform: "twitter",
  },
  {
    item: "Linkedin",
    link: "https://www.linkedin.com/in/dipesh-singnurkar/",
    username: "@dipesh-singnurkar",
    platform: "linkedin",
  },
  {
    item: "Github",
    link: "https://github.com/whosensei",
    username: "@whosensei",
    platform: "github",
  },
  {
    item: "Email",
    link: "mailto:dip.singnurkar31@gmail.com",
    username: "dip.singnurkar31@gmail.com",
    platform: "email",
  },
];

// ========================
// HELPER FUNCTIONS
// ========================

// Get featured projects
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

// Get ongoing projects
export const getOngoingProjects = () =>
  projects.filter((project) => project.isOngoing);

// Get projects by category
export const getProjectsByCategory = (category: string) =>
  projects.filter((project) => project.category === category);

// Get featured experiences
export const getFeaturedExperiences = () =>
  experiences.filter((exp) => exp.featured);

// Get experiences by category
export const getExperiencesByCategory = (category: string) =>
  experiences.filter((exp) => exp.category === category);

// Get tech stack by category
export const getTechStackByCategory = (category: string) =>
  techStack.filter((tech) => tech.category === category);
