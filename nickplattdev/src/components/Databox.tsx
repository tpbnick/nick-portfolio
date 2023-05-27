import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import Image1 from "../assets/nicklyss.webp";
import Image2 from "../assets/alaska.webp";
import Image3 from "../assets/pup.webp";

import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

type ItemType = {
	name: string;
	data: string | JSX.Element;
} | null;

const Databox = () => {
	const [selectedItem, setSelectedItem] = useState<ItemType>(null);
	const [isFading, setIsFading] = useState<boolean>(false);

	const images = [
		{ src: Image1, alt: "Nicklyss Image", caption: "Nicklyss" },
		{ src: Image2, alt: "Alaska Image", caption: "Alaska" },
		{ src: Image3, alt: "Pup Image", caption: "Pup" },
	];

	const aboutData = (
		<div className="text-white mx-auto max-w-4xl">
			<p className="pb-8">
				Hi, my name is Nick Platt. I am currently a software engineer for Erias
				Ventures and work within a large development project. My education includes
				a BS in Computer Networking and Cybersecurity and a MS in Software
				Engineering, both from the University of Maryland. I have working knowledge
				in Python, HTML, CSS, JavaScript, Java, SQL, and Markdown (hopefully more to
				come in the near future). Outside of work, I love watching European soccer
				(Go Bayern!), building keyboards, and spending time with my wife and pup. If
				you have any questions, please feel free to reach out to me through the
				contact info below. I also created an{" "}
				<a
					href="https://nicklyss.com"
					target="_blank"
					className="text-blue-300 hover:text-blue-500"
				>
					online photo album
				</a>
				, if you want to see recent trips/adventures.
			</p>
			<div className="photo-gallery">
				<PhotoProvider>
					<div className="photo-gallery flex">
						{images.map((image, index) => (
							<PhotoView key={index} src={image.src}>
								<div className="max-h-6 pt-3 pb-10 px-3 mx-auto">
									<img src={image.src} alt={image.alt} className="rounded-lg" />
								</div>
							</PhotoView>
						))}
					</div>
				</PhotoProvider>
			</div>
		</div>
	);

	const items = [
		{ name: "Education", data: <Education /> },
		{ name: "Experience", data: <Experience /> },
		{ name: "Skills", data: <Skills /> },
		{ name: "About", data: aboutData },
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
					{/* Buttons displayed as a single line on larger screens */}
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
					{/* Buttons displayed as two columns on smaller screens */}
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
