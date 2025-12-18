"use client";

import { useLayoutEffect, useState } from "react";

function getThemeFromCookie(): string | undefined {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("theme="))
    ?.split("=")[1];
}

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  useLayoutEffect(() => {
    const theme = getThemeFromCookie();
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      setCurrentTheme(theme);
    }
  }, []);

  return (
    <button
      data-tooltip="toggle theme"
      className="animate-reveal rounded-full text-sm text-secondary hover:text-primary font-medium"
      onClick={toggleTheme}
    >
      {currentTheme === "dark" ? "light" : "dark"}
    </button>
  );
}
