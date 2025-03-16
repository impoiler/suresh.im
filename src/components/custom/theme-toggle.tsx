"use client";

import React from "react";

export default function ThemeToggle() {
  const setTheme = () => {
    const theme = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("theme="))
      ?.split("=")[1];

    document.cookie = `theme=${theme === "dark" ? "light" : "dark"}; path=/`;
    window.location.reload();
  };

  return <button className="w-2 h-2 bg-primary rounded-full" onClick={setTheme}></button>;
}
