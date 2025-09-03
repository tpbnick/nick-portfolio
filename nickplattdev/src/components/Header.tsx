import { useEffect, useState } from "react";
import NickAtom from "../assets/atom.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface HeaderProps {
	isVisible: boolean;
	isTransitioning: boolean;
}

const Header = ({ isVisible, isTransitioning }: HeaderProps) => {
	const [isEntranceVisible, setIsEntranceVisible] = useState<boolean>(false);

	// Entrance animation delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsEntranceVisible(true);
		}, 100);
		
		return () => clearTimeout(timer);
	}, []);

	return (
		<header className={`w-90 mx-auto sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3 pt-3 transition-all duration-700 ease-out ${
			isEntranceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
		}`}>
			<a href={window.location.href} aria-label="Return to top of page">
				<img
					src={NickAtom}
					className="mx-auto fade-in duration-300 transform-gpu hover:scale-110 transition-all duration-300"
					style={{ width: "10%", height: "auto" }}
					width="100"
					height="100"
					alt="Nicholas Platt Logo"
				/>
			</a>
			<h1 className="text-white text-2xl pt-5 pb-2">Nicholas Platt</h1>
			<p className="text-white text-l pb-2">
				Rancho Cucamonga, CA · (909) 293-8750 ·{" "}
				<a
					href="mailto:nick@nickplatt.dev"
					className="text-white hover:text-blue-500 transition-colors duration-200"
					aria-label="Send email to nick@nickplatt.dev"
				>
					nick@nickplatt.dev
				</a>
			</p>
			<div className="flex justify-center pb-2">
				<a
					href="https://github.com/tpbnick"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform-gpu"
					aria-label="Visit Nick's GitHub profile (opens in new tab)"
				>
					<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
				</a>
			</div>
			<div className={`header-bio-transition ${
				isVisible ? 'header-bio-visible' : 'header-bio-hidden'
			}`}>
				<p className="text-white text-l text-center">
					Hello! I am currently a software engineer with{" "}
					<a
						href="https://eriasventures.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
						aria-label="Visit Erias Ventures website (opens in new tab)"
					>
						Erias Ventures
					</a>
					. I have been working within the Intelligence Community for over 8 years and
					have a great amount of experience in intelligence analysis and national
					security systems. I was also in the Marine Corps as an ELINT/All Source
					Analyst! I received my Bachelor's degree in Computer Networking and
					Cybersecurity in 2020 and my Master's in Software Engineering in 2023, both
					from the University of Maryland. I enjoy frontend development, especially
					working with TypeScript and web application frameworks like React. If you have 
					any questions, please ask!
				</p>
			</div>
		</header>
	);
};

export default Header; 