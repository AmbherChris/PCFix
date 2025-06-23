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
      className="rounded-lg p-6 ml-2 border-black dark:border-white"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <FaSun className="size-6 transition-transform absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <FaMoon className="size-6 transition-transform absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
