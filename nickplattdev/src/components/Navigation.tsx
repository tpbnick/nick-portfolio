import { useState, useCallback, useEffect } from "react";

import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

type NavigationItem = {
	name: string;
	data: JSX.Element;
	icon?: string;
};

interface NavigationProps {
	onContentToggle: (visible: boolean) => void;
	isContentVisible: boolean;
	isTransitioning: boolean;
}

const Navigation = ({ onContentToggle, isContentVisible, isTransitioning }: NavigationProps) => {
	const [selectedItem, setSelectedItem] = useState<NavigationItem | null>(null);
	const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);
	const [contentVisible, setContentVisible] = useState<boolean>(false);
	const [visibleButtons, setVisibleButtons] = useState<number[]>([]);

	const navigationItems: NavigationItem[] = [
		{ name: "Experience", data: <Experience />, icon: "💼" },
		{ name: "Education", data: <Education />, icon: "🎓" },
		{ name: "Skills", data: <Skills />, icon: "🛠️" },
		{ name: "About", data: <About />, icon: "ℹ️" },
		{ name: "Projects", data: <Projects />, icon: "🚀" },
		{ name: "Contact", data: <Contact />, icon: "📧" },
	];

	// Initial button entrance animation
	useEffect(() => {
		const timer = setTimeout(() => {
			setButtonsVisible(true);
		}, 200);
		
		return () => clearTimeout(timer);
	}, []);

	// Stagger button animations
	useEffect(() => {
		if (buttonsVisible) {
			navigationItems.forEach((_, index) => {
				setTimeout(() => {
					setVisibleButtons(prev => [...prev, index]);
				}, index * 100);
			});
		}
	}, [buttonsVisible]);

	const handleItemClick = useCallback((item: NavigationItem) => {
		if (isTransitioning) return;
		
		// Close current section if clicking same item
		if (selectedItem?.name === item.name) {
			setContentVisible(false);
			setTimeout(() => {
				setSelectedItem(null);
				onContentToggle(false);
			}, 300);
			return;
		}
		
		// Switch between different sections
		if (selectedItem) {
			setContentVisible(false);
			setTimeout(() => {
				setSelectedItem(item);
				setContentVisible(true);
				onContentToggle(true);
			}, 300);
		} else {
			// First time selecting an item
			setSelectedItem(item);
			setContentVisible(false);
			setTimeout(() => {
				setContentVisible(true);
				onContentToggle(true);
			}, 50);
		}
	}, [selectedItem, isTransitioning, onContentToggle]);

	const handleKeyDown = useCallback((event: React.KeyboardEvent, item: NavigationItem) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleItemClick(item);
		}
	}, [handleItemClick]);

	return (
		<nav className="w-full">
			{/* Navigation buttons with slide-up animation when content is visible */}
			<div className={`flex justify-around mt-4 py-8 transition-all duration-700 ease-out ${
				buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
			} ${
				isContentVisible ? 'nav-slide-up' : 'nav-slide-down'
			}`}>
				{/* Desktop layout */}
				<div className="hidden sm:flex flex-wrap justify-center gap-3">
					{navigationItems.map((item, index) => (
						<button
							key={index}
							className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg transition-all duration-300 ease-out ${
								visibleButtons.includes(index) 
									? 'opacity-100 translate-y-0 scale-100' 
									: 'opacity-0 translate-y-4 scale-95'
							} ${
								selectedItem?.name === item.name
									? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2"
									: 'btn-outline hover:scale-105'
							}`}
							onClick={() => handleItemClick(item)}
							onKeyDown={(e) => handleKeyDown(e, item)}
							aria-pressed={selectedItem?.name === item.name}
							aria-label={`Show ${item.name} section`}
						>
							<span className="mr-2">{item.icon}</span>
							{item.name}
						</button>
					))}
				</div>
				
				{/* Mobile layout */}
				<div className="sm:hidden grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
					{navigationItems.map((item, index) => (
						<button
							key={index}
							className={`btn btn-md transition-all duration-300 ease-out ${
								visibleButtons.includes(index) 
									? 'opacity-100 translate-y-0 scale-100' 
									: 'opacity-0 translate-y-4 scale-95'
							} ${
								selectedItem?.name === item.name
									? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2"
									: 'btn-outline hover:scale-105'
							}`}
							onClick={() => handleItemClick(item)}
							onKeyDown={(e) => handleKeyDown(e, item)}
							aria-pressed={selectedItem?.name === item.name}
							aria-label={`Show ${item.name} section`}
						>
							<span className="mr-2">{item.icon}</span>
							{item.name}
						</button>
					))}
				</div>
			</div>

			{/* Content display with fade animations */}
			{selectedItem && (
				<div className="mx-auto mt-5 pb-20">
					<div 
						className={`transition-all duration-500 ease-in-out ${
							contentVisible 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-4'
						}`}
					>
						{selectedItem.data}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation; 