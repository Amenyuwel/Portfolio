import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext"; // Corrected import path

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata = {
  title: "Emmanuel D. Malagamba - Full-Stack Developer Portfolio",
  description:
    "Full-Stack Web & Mobile Developer with Bachelor's in Computer Science. Specializing in React, Next.js, Node.js, and machine learning applications.",
  keywords:
    "Full-Stack Developer, Web Developer, Mobile Developer, React, Next.js, Node.js, Portfolio, Emmanuel Malagamba, JavaScript, Python, Machine Learning",
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
    title: "Emmanuel D. Malagamba - Full-Stack Developer Portfolio",
    description:
      "Full-Stack Web & Mobile Developer with Bachelor's in Computer Science. Specializing in React, Next.js, Node.js, and machine learning applications.",
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
    title: "Emmanuel D. Malagamba - Full-Stack Developer Portfolio",
    description:
      "Full-Stack Web & Mobile Developer specializing in React, Next.js, Node.js, and machine learning applications.",
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
        className={`${playfairDisplay.variable} ${poppins.variable} antialiased`}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
