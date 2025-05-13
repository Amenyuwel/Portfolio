module.exports = {
  darkMode: "class", // Enable dark mode using a class
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textMain: "var(--text-main)",
        opposite: "var(--opposite)",
      },
      fontFamily: {
        heading: ["var(--font-playfair-display)", "serif"], // For headings
        body: ["var(--font-poppins)", "sans-serif"], // For paragraphs, spans, etc.
      },
    },
  },
  plugins: [],
};