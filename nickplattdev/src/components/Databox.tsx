import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import Image1 from "../assets/nicklyss.png";
import Image2 from "../assets/alaska.png";
import Image3 from "../assets/pup.png";
import SoccerfrontImg from "../assets/soccerfront.png";
import UnbinImg from "../assets/unbin.png";
import DocsImg from "../assets/docs.png";
import PortfolioImg from "../assets/portfolio.png";

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
				Hi, my name is Nick Platt. I am currently a software engineer for Erias Ventures and work within a large development project. My education includes a BS in Computer Networking and Cybersecurity and a MS in Software Engineering, both from the University of Maryland. I have working knowledge in Python, HTML, CSS, JavaScript, Java, SQL, and Markdown (hopefully more to come in the near future). Outside of work, I love watching European soccer (Go Bayern!), building keyboards, and spending
				time with my wife and pup. If you have any questions, please feel free to reach out to me through the contact info below. I also created an{" "}
				<a href="https://nicklyss.com" target="_blank" className="text-blue-300 hover:text-blue-500">
					online photo album
				</a>
				, if you want to see recent trips/adventures.
			</p>
			<div className="photo-gallery">
				<PhotoProvider>
					<div className="photo-gallery flex">
						{images.map((image, index) => (
							<PhotoView key={index} src={image.src}>
								<div className="max-h-6 pt-3 px-3 mx-auto">
									<img src={image.src} alt={image.alt} className="rounded-lg" />
								</div>
							</PhotoView>
						))}
					</div>
				</PhotoProvider>
			</div>
		</div>
	);

	const educationData = (
		<div className="text-white mx-auto max-w-4xl">
			<div className="flex justify-between mb-4 pb-4">
				<div className="text-left">
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Master of Science</p>
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Software Engineering</p>
					<p className="text-sm sm:text-base md:text-lg">UNIVERSITY OF MARYLAND - GLOBAL CAMPUS</p>
				</div>
				<div className="text-right">
					<p className="text-sm sm:text-base md:text-lg lg:text-l">January 2021 - April 2023</p>
					<p className="text-sm sm:text-base md:text-lg">GPA: 4.0</p>
				</div>
			</div>
			<div className="flex justify-between mb-4">
				<div className="text-left">
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Bachelor of Science</p>
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Computer Networking & Cybersecurity</p>
					<p className="text-sm sm:text-base md:text-lg">UNIVERSITY OF MARYLAND - GLOBAL CAMPUS</p>
				</div>
				<div className="text-right">
					<p className="text-sm sm:text-base md:text-lg lg:text-xl">July 2017 - May 2020</p>
					<p className="text-sm sm:text-base md:text-lg">GPA: 3.8</p>
				</div>
			</div>
		</div>
	);

	const skillsData = (
		<div className="text-white mx-auto max-w-4xl">
			<div className="pb-4">
				<p className="pb-3">
					Over the past few years, starting in late 2018, I have dedicated myself to learning various programming languages. I pursued this knowledge through self-guided learning as well as online courses. It was during this time that I discovered my genuine passion for programming. One of the defining moments was when I created a personalized dashboard for my browser's homepage using basic HTML and CSS. I find it truly fascinating how you can begin with a blank canvas and gradually transform
					lines of code into powerful and visually appealing creations.
				</p>
				<p className="pb-8">
					I began taking notes and decided to create a{" "}
					<a href="https://docs.nicklyss.com" target="_blank" className="text-blue-300 hover:text-blue-500">
						documentation website
					</a>{" "}
					to better organize them, using Markdown and Material for MKDocs. My notes website can be found . I took Harvard University's CS50x - Introduction to Computer Science during the 2020 pandemic and learned basics for both C, Python, JavaScript, and SQL! For my final project, I developed{" "}
					<a href="https://soccerfront.io" target="_blank" className="text-blue-300 hover:text-blue-500">
						SoccerFront.io
					</a>
					, which is a soccer live scores website built using Nodejs, Expressjs, HTML, CSS, and JS.
				</p>
			</div>
			<div className="mockup-code text-left max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-lg">
				<pre data-prefix="$" className="text-success">
					<code>Python, JavaScript, TypeScript, Java</code>
				</pre>
				<pre data-prefix=">" className="text-warning">
					<code>React, ExpressJS, Angular, Vite, NodeJS</code>
				</pre>
				<pre data-prefix=">">
					<code>MKDocs, Sphinx, Hugo</code>
				</pre>
				<pre data-prefix=">">
					<code>GitHub, Gitlab, Jira/Confluence, Jenkins, Docker</code>
				</pre>
			</div>
		</div>
	);

	const experienceData = (
		<div className="text-white text-left mx-auto max-w-4xl">
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Software Engineer <span className="text-right text-lg font-normal">July 2022 - Present</span>
				</div>
				<div className="text-xl">Erias Ventures</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Worked within an Agile environment developing web applications using the following technologies: Python, Pytest, TypeScript, React, and Docker.</li>
					<li>Utilized GitHub to manage the version control of different repositories of data.</li>
					<li>Generated integration, unit, and acceptance tests utilizing the Pytest framework.</li>
					<li>Tested new features before release to users to ensure operability and document any issues/bugs.</li>
					<li>Created multiple Sphinx documentation directives to improve automated documentation creation.</li>
					<li>Completed numerous pull request reviews to merge code into multiple codebases.</li>
				</ul>
			</div>
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Software Engineer <span className="text-right text-lg font-normal">May 2021 - July 2022</span>
				</div>
				<div className="flex justify-between text-xl">Boeing Intelligence & Analytics (BI&A)</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Worked within an Agile environment developing web applications using the following technologies: Java, React, MongoDB, JavaScript, HTML, CSS, and Apache Tomcat/Maven.</li>
					<li>Utilized GitLab to manage different repositories of data.</li>
					<li>Updated API documentation for new features and to improve user's ability to integrate with our tools.</li>
					<li>Answered user questions through JIRA and created help tickets to track fixes for future cases.</li>
					<li>Created Swagger API documentation for over 100 endpoints.</li>
					<li>Fixed more than 300 errors related to 508 usability compliance, making the web application usable for people with disabilities.</li>
				</ul>
			</div>
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Technical Writer III <span className="text-right text-lg font-normal">August 2018 - May 2021</span>
				</div>
				<div className="flex justify-between text-xl">Boeing Intelligence & Analytics (BI&A)</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Created, edited, modified, and compiled over 2,000 pages of tool documentation to give analysts a resource to refer to with questions on how a specific tool functions and the capabilities available within the tool.</li>
					<li>Worked with multiple style-guides for each tool’s documentation, maintaining a cohesive and consistent design.</li>
					<li>Assisted users in chat, email, over the phone, and through JIRA ticketing helpdesk to quickly solve issues and get them back into the tools necessary to accomplish the mission.</li>
					<li>Created documentation for frequently asked questions (FAQs) to give analysts a place to go prior to reaching out to the help desk.</li>
					<li>Worked directly with developers to learn the latest features and functionalities of the tools to better assist customers.</li>
					<li>Assisted in the creation and updating of learning materials to help train users how to take advantage of available features in the tool, ranging from basic introductions to advanced workflows.</li>
					<li>Provided outreach support over social platforms to aid in increasing user base and spreading new information.</li>
					<li>Tested new features before release to production, while reporting bugs and suggestions directly to developers.</li>
					<li>Worked efficiently in an agile environment, meeting deadlines and sprint goals.</li>
					<li>Assisted with proposal writings for multimillion-dollar contracts, focusing on grammar and style compliance.</li>
				</ul>
			</div>
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					All Source/ELINT Analyst <span className="text-right text-lg font-normal">August 2013 - August 2018</span>
				</div>
				<div className="flex justify-between text-xl">United States Marine Corps (USMC)</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Delivered full electromagnetic spectrum reporting of target electromagnetic space to enable combatant commanders to develop operational course of action as part of the E-Space Analysis Center program.</li>
					<li>Successfully briefed, deploying units and interested offices, the capabilities offered by the E-Space Analysis Center.</li>
					<li>Efficiently arranged and participated in the analysis, processing, and distribution of strategic and tactical intelligence.</li>
					<li>Created detailed analytic products including radio spectrum analysis and GSM network intelligence that enabled various tactical actions including target exploitation, SIGINT mission support, and force protection measures.</li>
					<li>Worked closely with customers, tailoring reports to meet their standards and requirements.</li>
					<li>Completed and collaborated on over 200 serialized reports, utilizing multiple secure databases and tools while maintaining 100% compliance.</li>
					<li>Enforced Quality Control (QC) on over 200 serialized reports to ensure all reporting contains reliable and accurate intelligence.</li>
					<li>Worked directly with many outside organizations in the Intelligence Community (IC), maintaining constant open contact and facilitating work to their needs/requests.</li>
				</ul>
			</div>
			<div className="pb-5 flex">
				<button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1">
					To Top
				</button>
			</div>
		</div>
	);

	const contactData = (
		<div className="flex justify-center text-white mx-auto max-w-4xl">
			<form name="contact-nick" method="POST" data-netlify="true" data-netlify-recaptcha="true" className="mx-auto mb-5 w-full md:w-3/4 lg:w-1/2">
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<label htmlFor="name" className="text-left pr-4">
							Your Name:
						</label>
						<div className="w-full">
							<input type="text" id="name" placeholder="Your name..." name="name" className="input bg-atom1 w-full" />
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="email" className="text-left pr-4">
							Your Email:
						</label>
						<div className="w-full">
							<input type="email" id="email" placeholder="Your email..." name="email" className="input bg-atom1 w-full" />
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="message" className="text-left pr-4">
							Message:
						</label>
						<div className="w-full">
							<textarea id="message" placeholder="Your message..." name="message" className="input bg-atom1 w-full h-32"></textarea>
						</div>
					</div>
				</div>
				<p className="mt-8 text-center">
					<button type="submit" className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-3 bg-atom1 hover:bg-atom2">
						Send
					</button>
				</p>
			</form>
		</div>
	);

	const projectData = (
		<div className="justify-center">
			<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center pb-10">
				<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
					<figure>
						<img src={SoccerfrontImg} />
					</figure>
					<div className="card-body">
						<p className="text-center text-2xl font-bold">
							<a href="https://soccerfront.io" target="_blank" className="text-blue-300 hover:text-blue-500">
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
							<a href="https://github.com/tpbnick/UnBIN" target="_blank" className="text-blue-300 hover:text-blue-500">
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
						<img src={DocsImg} />
					</figure>
					<div className="card-body">
						<p className="text-center text-2xl font-bold">
							<a href="https://docs.nicklyss.com" target="_blank" className="text-blue-300 hover:text-blue-500">
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
							<a href="https://nickplatt.dev" target="_blank" className="text-blue-300 hover:text-blue-500">
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
				<button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1">
					To Top
				</button>
			</div>
		</div>
	);

	const items = [
		{ name: "Education", data: educationData },
		{ name: "Experience", data: experienceData },
		{ name: "Skills", data: skillsData },
		{ name: "About", data: aboutData },
		{ name: "Projects", data: projectData },
		{ name: "Contact", data: contactData },
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
			}, 200);
		}
	};

	return (
		<div>
			<div className="flex justify-around mt-4 py-8">
				<div className="hidden sm:flex">
					{/* Buttons displayed as a single line on larger screens */}
					{items.map((item, index) => (
						<button key={index} className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg mx-3 ${selectedItem?.name === item.name ? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2" : "btn-outline"}`} onClick={() => handleClick(item)}>
							{item.name}
						</button>
					))}
				</div>
				<div className="sm:hidden grid grid-cols-2 gap-4">
					{/* Buttons displayed as two columns on smaller screens */}
					{items.map((item, index) => (
						<button key={index} className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg ${selectedItem?.name === item.name ? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2" : "btn-outline"}`} onClick={() => handleClick(item)}>
							{item.name}
						</button>
					))}
				</div>
			</div>

			{selectedItem && <div className={`mx-auto transition-opacity duration-500 ease-in mt-5 pb-20 ${isFading ? "opacity-0" : "opacity-100"}`}>{selectedItem.data}</div>}
		</div>
	);
};

export default Databox;
