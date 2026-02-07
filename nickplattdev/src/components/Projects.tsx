import SoccerfrontImg from "../assets/soccerfront.webp";
import UnbinImg from "../assets/unbin.webp";
import DocsImg from "../assets/docs.webp";
import PortfolioImg from "../assets/portfolio.webp";
import TriviaDartImg from "../assets/triviadart.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => (
	<div className="justify-center">
		<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center pb-10">
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto hover:shadow-2xl transition-shadow duration-300">
				<figure>
					<img
						src={TriviaDartImg}
						alt="TriviaDart application screenshot"
						className="w-full h-48 object-cover image-fade-in"
					/>
				</figure>
				<div className="card-body">
					<h3 className="text-center text-2xl font-bold">
						<a
							href="https://triviadart.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
							aria-label="Visit TriviaDart website (opens in new tab)"
						>
							Trivia🎯
						</a>
					</h3>
					<p className="text-center">Trivia Web App</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<a
							href="https://github.com/tpbnick/TriviaDart"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View TriviaDart on GitHub"
							className="text-white hover:text-blue-500 transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
						</a>
					</div>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">React</div>
						<div className="badge badge-success">TypeScript</div>
						<div className="badge badge-success">TailwindCSS</div>
						<div className="badge badge-success">ExpressJS</div>
						<div className="badge badge-success">MongoDB</div>
					</div>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto hover:shadow-2xl transition-shadow duration-300">
				<figure>
					<img
						src={UnbinImg}
						alt="UnBIN application screenshot"
						className="w-full h-48 object-cover image-fade-in"
					/>
				</figure>
				<div className="card-body">
					<h3 className="text-center text-2xl font-bold">
						<a
							href="https://github.com/tpbnick/UnBIN"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
							aria-label="Visit UnBIN GitHub repository (opens in new tab)"
						>
							UnBIN
						</a>
					</h3>
					<p className="text-center">
						Simple markdown notes/pastebin web application
					</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<a
							href="https://github.com/tpbnick/UnBIN"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View UnBIN on GitHub"
							className="text-white hover:text-blue-500 transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
						</a>
					</div>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">React</div>
						<div className="badge badge-success">TypeScript</div>
						<div className="badge badge-success">Docker</div>
						<div className="badge badge-success">TailwindCSS</div>
						<div className="badge badge-success">SQLite</div>
					</div>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto hover:shadow-2xl transition-shadow duration-300">
				<figure>
					<img
						src={DocsImg}
						alt="Nick's Docs website screenshot"
						className="w-full h-48 object-cover image-fade-in"
					/>
				</figure>
				<div className="card-body">
					<h3 className="text-center text-2xl font-bold">
						<a
							href="https://docs.nickplatt.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
							aria-label="Visit Nick's Docs website (opens in new tab)"
						>
							Nick's Docs
						</a>
					</h3>
					<p className="text-center">Programming notes website</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<a
							href="https://github.com/tpbnick/docs"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View Nick's Docs on GitHub"
							className="text-white hover:text-blue-500 transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
						</a>
					</div>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">Markdown</div>
						<div className="badge badge-success">MKDocs</div>
					</div>
				</div>
			</div>

			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto hover:shadow-2xl transition-shadow duration-300">
				<figure>
					<img
						src={PortfolioImg}
						alt="Nick's Portfolio website screenshot"
						className="w-full h-48 object-cover image-fade-in"
					/>
				</figure>
				<div className="card-body">
					<h3 className="text-center text-2xl font-bold">
						<a
							href="https://nickplatt.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
							aria-label="Visit Nick's Portfolio website (opens in new tab)"
						>
							Nick's Portfolio
						</a>
					</h3>
					<p className="text-center">This portfolio website!</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<a
							href="https://github.com/tpbnick/nick-portfolio"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View Portfolio on GitHub"
							className="text-white hover:text-blue-500 transition-colors duration-200"
						>
							<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
						</a>
					</div>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">React</div>
						<div className="badge badge-success">TypeScript</div>
						<div className="badge badge-success">TailwindCSS</div>
						<div className="badge badge-success">ViteJS</div>
					</div>
				</div>
			</div>
		</div>

		<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto hover:shadow-2xl transition-shadow duration-300">
			<figure>
				<img
					src={SoccerfrontImg}
					alt="SoccerFront application screenshot"
					className="w-full h-48 object-cover image-fade-in"
				/>
			</figure>
			<div className="card-body">
				<h3 className="text-center text-2xl font-bold">
					<a
						href="https://soccerfront.io"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
						aria-label="Visit SoccerFront website (opens in new tab)"
					>
						SoccerFront
					</a>
				</h3>
				<p className="text-center">Soccer livescore web application</p>
				<div className="flex flex-wrap gap-2 justify-center">
					<a
						href="https://github.com/tpbnick/soccerfront"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View SoccerFront on GitHub"
						className="text-white hover:text-blue-500 transition-colors duration-200"
					>
						<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
					</a>
				</div>
				<div className="flex flex-wrap gap-2 justify-center">
					<div className="badge badge-success">ExpressJS</div>
					<div className="badge badge-success">JavaScript</div>
					<div className="badge badge-success">NodeJS</div>
				</div>
			</div>
		</div>

		<div className="pb-5 flex">
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1 transition-colors duration-200"
				aria-label="Scroll to top of page"
			>
				To Top
			</button>
		</div>
	</div>
);

export default Projects;
