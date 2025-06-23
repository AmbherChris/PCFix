// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import ThemeToggle from "./components/themeToggle";
import ThemeWrapper from "./components/ThemeWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PCFix",
  description: "A tutorial on how to fix your own Computer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300`}
      >
        <ThemeWrapper attribute="class" enableSystem defaultTheme="system">
          <nav className="flex sticky top-10 items-center justify-center">
            <NavBar />
            <ThemeToggle />
          </nav>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
