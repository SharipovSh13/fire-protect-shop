"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [theme, setLocalTheme] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Доступ к localStorage только на клиентской стороне
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setLocalTheme(storedTheme);
      } else {
        setLocalTheme("light"); // По умолчанию светлая тема, если нет данных в localStorage
      }
    }
  }, []);

  React.useEffect(() => {
    // Обновляем localStorage каждый раз, когда тема изменяется
    if (theme !== null) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (theme === null) return null; // Ждём, пока тема будет установлена

  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => { setTheme("light"); setLocalTheme("light"); }}>
          <Moon size={"28px"} />
        </button>
      ) : (
        <button onClick={() => { setTheme("dark"); setLocalTheme("dark"); }}>
          <Sun size={"28px"} />
        </button>
      )}
    </>
  );
}

