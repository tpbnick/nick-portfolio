import { useState, useCallback, useEffect, ComponentType } from "react";
import { useStaggeredEntrance } from "../hooks/useStaggeredEntrance";
import { TIMING, ANIMATION_CLASS } from "../constants/animations";

import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

interface NavigationItem {
	name: string;
	component: ComponentType;
	icon: string;
}

interface NavigationProps {
	onContentToggle: (visible: boolean) => void;
	isTransitioning: boolean;
}

const navigationItems: NavigationItem[] = [
	{ name: "Experience", component: Experience, icon: "💼" },
	{ name: "Education", component: Education, icon: "🎓" },
	{ name: "Skills", component: Skills, icon: "🛠️" },
	{ name: "About", component: About, icon: "ℹ️" },
	{ name: "Projects", component: Projects, icon: "🚀" },
	{ name: "Contact", component: Contact, icon: "📧" },
];

const buttonClass = (isSelected: boolean) =>
	`btn ${ANIMATION_CLASS.BUTTON_HOVER} ${
		isSelected
			? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2"
			: "btn-outline"
	}`;

const Navigation = ({ onContentToggle, isTransitioning }: NavigationProps) => {
	const [selectedItem, setSelectedItem] = useState<NavigationItem | null>(null);
	const [buttonsVisible, setButtonsVisible] = useState(false);
	const [contentVisible, setContentVisible] = useState(false);
	const visibleButtons = useStaggeredEntrance(navigationItems.length, TIMING.STAGGER.NAVIGATION, buttonsVisible);

	useEffect(() => {
		const timer = setTimeout(() => setButtonsVisible(true), TIMING.DEFAULT);
		return () => clearTimeout(timer);
	}, []);

	const handleItemClick = useCallback((item: NavigationItem) => {
		if (isTransitioning) return;

		if (selectedItem?.name === item.name) {
			setContentVisible(false);
			setTimeout(() => {
				setSelectedItem(null);
				onContentToggle(false);
			}, TIMING.SLOW);
			return;
		}

		if (selectedItem) {
			setContentVisible(false);
			setTimeout(() => {
				setSelectedItem(item);
				setContentVisible(true);
				onContentToggle(true);
			}, TIMING.SLOW);
		} else {
			setSelectedItem(item);
			setContentVisible(false);
			setTimeout(() => {
				setContentVisible(true);
				onContentToggle(true);
			}, TIMING.INSTANT);
		}
	}, [selectedItem, isTransitioning, onContentToggle]);

	const handleKeyDown = useCallback((event: React.KeyboardEvent, item: NavigationItem) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleItemClick(item);
		}
	}, [handleItemClick]);

	const renderButtons = (sizeClass: string) =>
		navigationItems.map((item, index) => (
			<button
				key={item.name}
				className={`${sizeClass} ${buttonClass(selectedItem?.name === item.name)} ${
					visibleButtons.includes(index)
						? `${ANIMATION_CLASS.FADE_IN} ${ANIMATION_CLASS.SCALE_IN}`
						: `${ANIMATION_CLASS.FADE_OUT} ${ANIMATION_CLASS.SCALE_OUT}`
				}`}
				onClick={() => handleItemClick(item)}
				onKeyDown={(e) => handleKeyDown(e, item)}
				aria-pressed={selectedItem?.name === item.name}
				aria-label={`Show ${item.name} section`}
			>
				<span className="mr-2">{item.icon}</span>
				{item.name}
			</button>
		));

	return (
		<nav className="w-full">
			<div className={`flex justify-around mt-4 py-4 transition-all duration-700 ease-out ${
				buttonsVisible ? ANIMATION_CLASS.FADE_IN : ANIMATION_CLASS.FADE_OUT
			}`}>
				<div className="hidden sm:flex flex-wrap justify-center gap-3">
					{renderButtons("btn-md sm:btn-md md:btn-md lg:btn-lg")}
				</div>
				<div className="sm:hidden grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
					{renderButtons("btn-md")}
				</div>
			</div>

			{selectedItem && (
				<div className="mx-auto pb-10">
					<div className={`transition-all duration-500 ease-in-out ${
						contentVisible ? ANIMATION_CLASS.FADE_IN : ANIMATION_CLASS.FADE_OUT
					}`}>
						<selectedItem.component />
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navigation;
