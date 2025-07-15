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
      { name: "Next.js", icon: "mdi:react-outline" },
      { name: "TailwindCSS", icon: "mdi:tailwind" },
      { name: "Node.JS", icon: "mdi:nodejs" },
      { name: "Pocketbase", icon: "mdi:database-outline" },
    ],
  },
  {
    title: "Harvest Assistant: A Smart Pest Management and Enhanced Grain Production",
    description: `A thesis project developed at STI–General Santos City, designed to systematically bridge the gap between the City Agriculturist's Office and the farmers of General Santos City.`,
    image: "./images/Harvest.PNG",
    githubLink: "https://github.com/Amenyuwel/Harvest-Assistant-Website",
    isPrivate: false,
    learnMorePath: "pages/learn-more/harvest-assistant",
    techStack: [
      { name: "Java", icon: "mdi:android" },
      { name: "PHP", icon: "mdi:language-php" },
      { name: "Python", icon: "mdi:language-python" },
      { name: "TensorFlow", icon: "mdi:alpha-t-box-outline" },
      { name: "Flask", icon: "mdi:flask-outline" },
      { name: "MySQL", icon: "mdi:database-outline" },
    ],
  },
];