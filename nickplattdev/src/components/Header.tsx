import { useEffect, useState } from "react";
import NickAtom from "../assets/atom.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CONTACT } from "../constants";
import { TIMING, ANIMATION_CLASS } from "../constants/animations";

interface HeaderProps {
	isVisible: boolean;
}

const Header = ({ isVisible }: HeaderProps) => {
	const [isEntranceVisible, setIsEntranceVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsEntranceVisible(true), TIMING.FAST);
		return () => clearTimeout(timer);
	}, []);

	return (
		<header className={`w-90 mx-auto sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3 pt-3 transition-all duration-700 ease-out ${
			isEntranceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
		}`}>
			<a href="/" aria-label="Return to top of page">
				<img
					src={NickAtom}
					className="mx-auto fade-in duration-300 transform-gpu hover:scale-110 transition-all duration-300"
					style={{ width: "10%", height: "auto" }}
					width="100"
					height="100"
					alt="Nicholas Platt Logo"
				/>
			</a>
			<h1 className="text-base-content text-2xl pt-5 pb-2">{CONTACT.name}</h1>
			<p className="text-base-content text-l pb-2">
				{CONTACT.location} · {CONTACT.phone} ·{" "}
				<a
					href={`mailto:${CONTACT.email}`}
					className="text-base-content hover:text-primary transition-colors duration-200"
					aria-label={`Send email to ${CONTACT.email}`}
				>
					{CONTACT.email}
				</a>
			</p>
			<div className="flex justify-center pb-2">
				<a
					href={CONTACT.github.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-base-content hover:text-primary transition-colors duration-200 hover:scale-110 transform-gpu"
					aria-label="Visit Nick's GitHub profile (opens in new tab)"
				>
					<FontAwesomeIcon icon={faGithub} style={{ fontSize: "2rem" }} />
				</a>
			</div>
			<div className={`header-bio-transition ${
				isVisible ? "header-bio-visible" : "header-bio-hidden"
			}`}>
				<p className="text-base-content text-l text-center">
					Hello! I am currently a software engineer with{" "}
					<a
						href="https://eriasventures.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:text-primary/70 transition-colors duration-200"
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
