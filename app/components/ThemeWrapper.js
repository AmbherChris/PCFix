// components/ThemeWrapper.js
"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Or show a loading skeleton

  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
