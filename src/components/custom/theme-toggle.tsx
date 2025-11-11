"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function ThemeToggle() {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState("light");
  const setTheme = () => {
    const theme = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("theme="))
      ?.split("=")[1];

    document.cookie = `theme=${theme === "dark" ? "light" : "dark"}; path=/`;
    setCurrentTheme(theme === "dark" ? "light" : "dark");
    router.refresh();
  };

  useLayoutEffect(() => {
    const theme = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("theme="))
      ?.split("=")[1];

     
    if (theme) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentTheme(theme);
    }
  }, []);

  return (
    <button
      data-tooltip="toggle theme"
      className="animate-reveal rounded-full text-sm text-secondary hover:text-primary font-medium"
      onClick={setTheme}
    >
      {currentTheme === "dark" ? "light" : "dark"}
    </button>
  );
}
