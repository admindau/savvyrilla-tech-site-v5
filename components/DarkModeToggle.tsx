import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");
    const enable = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", enable);
    setDark(enable);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button onClick={toggle} className="ml-4 p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Toggle Dark Mode">
      {dark ? "🌞" : "🌙"}
    </button>
  );
}
