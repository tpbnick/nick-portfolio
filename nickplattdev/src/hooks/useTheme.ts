import { useState } from "react";

type Theme = "nord-dark" | "nord";

const STORAGE_KEY = "portfolio-theme";

const getInitialTheme = (): Theme => {
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved === "nord-dark" || saved === "nord") return saved;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "nord-dark" : "nord";
};

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	const toggleTheme = () => {
		const next: Theme = theme === "nord-dark" ? "nord" : "nord-dark";
		document.documentElement.classList.add("theme-transitioning");
		document.documentElement.setAttribute("data-theme", next);
		localStorage.setItem(STORAGE_KEY, next);
		setTheme(next);
		setTimeout(() => document.documentElement.classList.remove("theme-transitioning"), 400);
	};

	return { isDark: theme === "nord-dark", toggleTheme };
};
