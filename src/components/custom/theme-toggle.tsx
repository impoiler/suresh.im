"use client";

import { useRouter } from "next/navigation";

export default function ThemeToggle() {
  const router = useRouter();
  const setTheme = () => {
    const theme = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("theme="))
      ?.split("=")[1];

    document.cookie = `theme=${theme === "dark" ? "light" : "dark"}; path=/`;
    router.refresh();
  };

  return (
    <button
      aria-label="toggle theme"
      className="tooltip w-2 h-2 bg-primary rounded-full"
      onClick={setTheme}
    ></button>
  );
}
