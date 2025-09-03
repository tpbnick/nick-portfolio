import "./App.css";
import { useState, useCallback } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
	const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
	const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

	const handleContentToggle = useCallback((visible: boolean) => {
		setIsTransitioning(true);
		setIsContentVisible(visible);
		
		// Allow transition to complete before allowing new transitions
		setTimeout(() => {
			setIsTransitioning(false);
		}, 500);
	}, []);

	return (
		<div className="App">
			<Header 
				isVisible={!isContentVisible} 
				isTransitioning={isTransitioning}
			/>
			<Navigation 
				onContentToggle={handleContentToggle}
				isContentVisible={isContentVisible}
				isTransitioning={isTransitioning}
			/>
		</div>
	);
}

export default App;
