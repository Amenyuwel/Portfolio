// Add new projects here that will be passed to ProjectsGrid.jsx and will be displayed in MyProjects.jsx
export const projects = [
  {
    title: "AI-REFINE",
    description: `Generate augmented data variants effortlessly, simply drag and drop your image, then adjust the augmentation intensity to your preference.`,
    image: "./images/Example.PNG",
    githubLink: "https://github.com/Amenyuwel/Ai-Refine",
    isPrivate: false,
    learnMorePath: "pages/learn-more/ai-refine",
    techStack: [
      { name: "Next.js", icon: "skill-icons:nextjs-dark" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PocketBase", icon: "mdi:database" },
    ],
  },
  {
    title:
      "Harvest Assistant: A Smart Pest Management and Enhanced Grain Production",
    description: `A thesis project developed at STI–General Santos City, designed to systematically bridge the gap between the City Agriculturist's Office and the farmers of General Santos City.`,
    image: "./images/Harvest.PNG",
    githubLink: "https://github.com/Amenyuwel/Harvest-Assistant-Website",
    isPrivate: false,
    learnMorePath: "pages/learn-more/harvest-assistant",
    techStack: [
      { name: "Java", icon: "logos:java" },
      { name: "PHP", icon: "devicon:php" },
      { name: "Python", icon: "logos:python" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "Flask", icon: "devicon:flask" },
      { name: "MySQL", icon: "logos:mysql" },
    ],
  },
];
