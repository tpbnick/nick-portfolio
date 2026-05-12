import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CONTACT, SOCIAL_LINKS } from "../constants";
import ScrollToTopButton from "./ScrollToTopButton";

import SoccerfrontImg from "../assets/soccerfront.webp";
import UnbinImg from "../assets/unbin.webp";
import DocsImg from "../assets/docs.webp";
import PortfolioImg from "../assets/portfolio.webp";
import TriviaDartImg from "../assets/triviadart.webp";

interface Project {
	image: string;
	alt: string;
	name: string;
	url: string;
	githubUrl: string;
	description: string;
	tags: string[];
}

const projects: Project[] = [
	{
		image: TriviaDartImg,
		alt: "TriviaDart application screenshot",
		name: "Trivia🎯",
		url: "https://triviadart.com",
		githubUrl: `${CONTACT.github.url}/TriviaDart`,
		description: "Trivia Web App",
		tags: ["React", "TypeScript", "TailwindCSS", "ExpressJS", "MongoDB"],
	},
	{
		image: UnbinImg,
		alt: "UnBIN application screenshot",
		name: "UnBIN",
		url: `${CONTACT.github.url}/UnBIN`,
		githubUrl: `${CONTACT.github.url}/UnBIN`,
		description: "Simple markdown notes/pastebin web application",
		tags: ["React", "TypeScript", "Docker", "TailwindCSS", "SQLite"],
	},
	{
		image: DocsImg,
		alt: "Nick's Docs website screenshot",
		name: "Nick's Docs",
		url: SOCIAL_LINKS.docs,
		githubUrl: `${CONTACT.github.url}/docs`,
		description: "Programming notes website",
		tags: ["Markdown", "MKDocs"],
	},
	{
		image: PortfolioImg,
		alt: "Nick's Portfolio website screenshot",
		name: "Nick's Portfolio",
		url: SOCIAL_LINKS.portfolio,
		githubUrl: `${CONTACT.github.url}/nick-portfolio`,
		description: "This portfolio website!",
		tags: ["React", "TypeScript", "TailwindCSS", "ViteJS"],
	},
	{
		image: SoccerfrontImg,
		alt: "SoccerFront application screenshot",
		name: "SoccerFront",
		url: "https://soccerfront.io",
		githubUrl: `${CONTACT.github.url}/soccerfront`,
		description: "Soccer livescore web application",
		tags: ["ExpressJS", "JavaScript", "NodeJS"],
	},
];

const ProjectCard = ({ image, alt, name, url, githubUrl, description, tags }: Project) => (
	<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto hover:shadow-2xl transition-shadow duration-300">
		<figure>
			<img
				src={image}
				alt={alt}
				className="w-full h-48 object-cover image-fade-in"
				loading="lazy"
			/>
		</figure>
		<div className="card-body">
			<h3 className="text-center text-2xl font-bold">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary hover:text-primary/70 transition-colors duration-200"
				>
					{name}
				</a>
			</h3>
			<p className="text-center">{description}</p>
			<div className="flex flex-wrap gap-2 justify-center">
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View ${name} on GitHub`}
					className="text-base-content hover:text-primary transition-colors duration-200"
				>
					<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
				</a>
			</div>
			<div className="flex flex-wrap gap-2 justify-center">
				{tags.map(tag => (
					<div key={tag} className="badge badge-success">{tag}</div>
				))}
			</div>
		</div>
	</div>
);

const Projects = () => (
	<div className="justify-center">
		<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center pb-10">
			{projects.slice(0, 4).map(project => (
				<ProjectCard key={project.name} {...project} />
			))}
		</div>
		{projects.slice(4).map(project => (
			<ProjectCard key={project.name} {...project} />
		))}
		<ScrollToTopButton />
	</div>
);

export default Projects;
