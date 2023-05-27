import { useState } from "react";

import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

type ItemType = {
	name: string;
	data: string | JSX.Element;
} | null;

const Databox = () => {
	const [selectedItem, setSelectedItem] = useState<ItemType>(null);
	const [isFading, setIsFading] = useState<boolean>(true);

	const items = [
		{ name: "Education", data: <Education /> },
		{ name: "Experience", data: <Experience /> },
		{ name: "Skills", data: <Skills /> },
		{ name: "About", data: <About /> },
		{ name: "Projects", data: <Projects /> },
		{ name: "Contact", data: <Contact /> },
	];

	const handleClick = (item: ItemType) => {
		if (item !== null) {
			setIsFading(true);
			setTimeout(() => {
				setIsFading(false);
				if (selectedItem !== null && item.name === selectedItem.name) {
					setSelectedItem(null);
				} else {
					setSelectedItem(item);
				}
			}, 500);
		}
	};

	return (
		<div>
			<div className="flex justify-around mt-4 py-8">
				<div className="hidden sm:flex">
					{/* Large screen buttons */}
					{items.map((item, index) => (
						<button
							key={index}
							className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg mx-3 ${
								selectedItem?.name === item.name
									? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2"
									: "btn-outline"
							}`}
							onClick={() => handleClick(item)}
						>
							{item.name}
						</button>
					))}
				</div>
				<div className="sm:hidden grid grid-cols-2 gap-4">
					{/* Small screen column of buttons */}
					{items.map((item, index) => (
						<button
							key={index}
							className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg ${
								selectedItem?.name === item.name
									? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2"
									: "btn-outline"
							}`}
							onClick={() => handleClick(item)}
						>
							{item.name}
						</button>
					))}
				</div>
			</div>

			{selectedItem && (
				<div
					className={`mx-auto fade-in-out transition-opacity duration-500 ease-in mt-5 pb-20 ${
						isFading ? "opacity-0" : "opacity-100"
					}`}
				>
					{selectedItem.data}
				</div>
			)}
		</div>
	);
};

export default Databox;
