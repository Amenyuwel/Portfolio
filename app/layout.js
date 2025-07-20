import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext"; // Corrected import path

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

export const metadata = {
  title:
    "Emmanuel D. Malagamba | Experienced Full-Stack Web & Mobile Developer | React, Next.js, Node.js, Python, Machine Learning",
  description:
    "Explore the professional portfolio of Emmanuel D. Malagamba, a results-driven Full-Stack Web and Mobile Developer with a Bachelor's degree in Computer Science. With expertise in React, Next.js, Node.js, and Python, Emmanuel builds efficient, scalable, and modern web applications. Discover innovative projects, machine learning integrations, and clean, maintainable code built for real-world impact.",
  keywords:
    "Full-Stack Developer, Web Developer, Mobile Developer, React, Next.js, Node.js, Portfolio, Emmanuel Malagamba, JavaScript, Python, Machine Learning, Software Engineer, Frontend, Backend",
  authors: [{ name: "Emmanuel D. Malagamba" }],
  creator: "Emmanuel D. Malagamba",
  publisher: "Emmanuel D. Malagamba",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amenyuwel.netlify.app",
    title:
      "Emmanuel D. Malagamba | Experienced Full-Stack Developer | React, Next.js, Python, ML",
    description:
      "Visit the professional portfolio of Emmanuel D. Malagamba, a Full-Stack Web & Mobile Developer specializing in React, Next.js, Node.js, and machine learning solutions. Dive into cutting-edge projects and software crafted with precision.",
    siteName: "Emmanuel D. Malagamba Portfolio",
    images: [
      {
        url: "/images/Profile.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel D. Malagamba - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Emmanuel D. Malagamba | Full-Stack Developer Portfolio | React, Next.js, Python, ML",
    description:
      "Showcasing web and mobile applications built by Emmanuel D. Malagamba, an expert Full-Stack Developer with a focus on modern technologies and machine learning.",
    images: ["/images/Profile.jpg"],
    creator: "@amenyuwel",
  },
  verification: {
    google: "n9hY5nQJTcNNHR0Ga1V_gSMEReCcMivl8HksBdpViqo",
  },
  alternates: {
    canonical: "https://amenyuwel.netlify.app",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
