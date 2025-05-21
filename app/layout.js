import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/context/darkModeContext"; // Corrected import path

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
  title: "Amenyuwel",
  description: "Emmanuel D. Malagamba's Portfolio",
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
