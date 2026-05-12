import "./App.css";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

function App() {
	const { isDark, toggleTheme } = useTheme();
	const [isContentVisible, setIsContentVisible] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleContentToggle = useCallback((visible: boolean) => {
		setIsTransitioning(true);
		setIsContentVisible(visible);
		setTimeout(() => setIsTransitioning(false), 500);
	}, []);

	return (
		<div className="App">
			<ThemeToggle isDark={isDark} onToggle={toggleTheme} />
			<Header isVisible={!isContentVisible} />
			<Navigation
				onContentToggle={handleContentToggle}
				isTransitioning={isTransitioning}
			/>
		</div>
	);
}

export default App;
