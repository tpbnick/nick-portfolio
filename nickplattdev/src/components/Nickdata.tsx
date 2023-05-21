import NickAtom from "../assets/atom.png";

const Nickdata = () => {
	return (
		<div className="w-90 mx-auto sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3 pt-3">
			<a href={window.location.href}>
				<img src={NickAtom} className="mx-auto fade-in transition-transform duration-300 transform-gpu hover:scale-110" style={{ width: "10%", height: "auto" }} alt="Logo" />
			</a>
			<p className="text-white text-2xl pt-5 pb-2">Nicholas Platt</p>
			<p className="text-white text-l pb-8">
				Glen Burnie, MD 21060 · (909) 293-8750 ·{" "}
				<a href="mailto:nick@nickplatt.dev" className="text-white hover:text-blue-500">
					nick@nickplatt.dev
				</a>
			</p>
			<p className="text-white text-l text-center">
				Hello! I am currently a software engineer with{" "}
				<a href="https://eriasventures.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">
					Erias Ventures
				</a>
				. I have been working within the Intelligence Community for over 7 years and have a great amount of experience in intelligence analysis and national security systems. I was also in the Marine Corps as an ELINT/All Source Analyst! I received my Bachelor's degree in Computer Networking and Cybersecurity in 2018 and my Master's in Software Engineering in 2023, both from the University of Maryland. I enjoy frontend development, especially working with JavaScript and web application
				frameworks. If you have any questions, please ask!
			</p>
		</div>
	);
};

export default Nickdata;
