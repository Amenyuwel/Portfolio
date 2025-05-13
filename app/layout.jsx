import "./globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}