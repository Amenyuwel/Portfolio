import "./globals.css";
import { DarkModeProvider } from "@/context/darkModeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}