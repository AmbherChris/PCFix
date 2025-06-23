"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="themeBTN"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <FaSun className="sun" />
      <FaMoon className="moon" />
    </Button>
  );
}
