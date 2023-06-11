import SoccerfrontImg from "../assets/soccerfront.webp";
import UnbinImg from "../assets/unbin.webp";
import DocsImg from "../assets/docs.webp";
import PortfolioImg from "../assets/portfolio.webp";
import TriviaDartImg from "../assets/triviadart.webp";

const Projects = () => (
	<div className="justify-center">
		<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center pb-10">
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
				<figure>
					<img src={SoccerfrontImg} />
				</figure>
				<div className="card-body">
					<p className="text-center text-2xl font-bold">
						<a
							href="https://soccerfront.io"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
							SoccerFront
						</a>
					</p>
					<p>Soccer livescore web application</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">ExpressJS</div>
						<div className="badge badge-success">JavaScript</div>
						<div className="badge badge-success">NodeJS</div>
					</div>
				</div>
			</div>
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
				<figure>
					<img src={UnbinImg} />
				</figure>
				<div className="card-body">
					<p className="text-center text-2xl font-bold">
						<a
							href="https://github.com/tpbnick/UnBIN"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
							UnBIN
						</a>
					</p>
					<p>Simple markdown notes/pastebin web application</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">React</div>
						<div className="badge badge-success">TypeScript</div>
						<div className="badge badge-success">Docker</div>
						<div className="badge badge-success">TailwindCSS</div>
						<div className="badge badge-success">SQLite</div>
					</div>
				</div>
			</div>
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
				<figure>
					<img src={TriviaDartImg} />
				</figure>
				<div className="card-body">
					<p className="text-center text-2xl font-bold">
						<a
							href="https://triviadart.com"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
							Trivia🎯
						</a>
					</p>
					<p>Trivia Web App</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">React</div>
						<div className="badge badge-success">TypeScript</div>
						<div className="badge badge-success">TailwindCSS</div>
						<div className="badge badge-success">ExpressJS</div>
						<div className="badge badge-success">MongoDB</div>
					</div>
				</div>
			</div>
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
				<figure>
					<img src={DocsImg} />
				</figure>
				<div className="card-body">
					<p className="text-center text-2xl font-bold">
						<a
							href="https://docs.nicklyss.com"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
							Nick's Docs
						</a>
					</p>
					<p>Programming notes website</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">Markdown</div>
						<div className="badge badge-success">MKDocs</div>
					</div>
				</div>
			</div>
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
				<figure>
					<img src={PortfolioImg} />
				</figure>
				<div className="card-body">
					<p className="text-center text-2xl font-bold">
						<a
							href="https://nickplatt.dev"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
							Nick's Portfolio
						</a>
					</p>
					<p>This portfolio website!</p>
					<div className="flex flex-wrap gap-2 justify-center">
						<div className="badge badge-success">React</div>
						<div className="badge badge-success">TypeScript</div>
						<div className="badge badge-success">TailwindCSS</div>
						<div className="badge badge-success">ViteJS</div>
					</div>
				</div>
			</div>
		</div>
		<div className="pb-5 flex">
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1"
			>
				To Top
			</button>
		</div>
	</div>
);

export default Projects;
