import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
	isDark: boolean;
	onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => (
	<button
		onClick={onToggle}
		className="fixed top-4 right-4 btn btn-ghost btn-circle z-50"
		aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
	>
		<FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-5 h-5" />
	</button>
);

export default ThemeToggle;
