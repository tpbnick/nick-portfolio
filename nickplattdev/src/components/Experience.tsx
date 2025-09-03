import { useEffect, useState } from "react";
import PDFViewer from "./PDFViewer";
import ResumePDF from "../assets/pdfs/Nicholas Platt Resume 2025.pdf";

interface Job {
	id: number;
	title: string;
	company: string;
	period: string;
	responsibilities: string[];
}

const jobs: Job[] = [
	{
		id: 1,
		title: "Software Engineer",
		company: "Erias Ventures",
		period: "July 2022 - Present",
		responsibilities: [
			"Worked within an Agile environment developing web applications using the following technologies: Python, Pytest, TypeScript, React, and Docker.",
			"Utilized GitHub to manage the version control of different repositories of data.",
			"Generated integration, unit, and acceptance tests utilizing the Pytest framework.",
			"Tested new features before release to users to ensure operability and document any issues/bugs.",
			"Created multiple Sphinx documentation directives to improve automated documentation creation.",
			"Completed numerous pull request reviews to merge code into multiple codebases."
		]
	},
	{
		id: 2,
		title: "Software Engineer",
		company: "Boeing Intelligence & Analytics (BI&A)",
		period: "May 2021 - July 2022",
		responsibilities: [
			"Worked within an Agile environment developing web applications using the following technologies: Java, React, MongoDB, JavaScript, HTML, CSS, and Apache Tomcat/Maven.",
			"Utilized GitLab to manage different repositories of data.",
			"Updated API documentation for new features and to improve user's ability to integrate with our tools.",
			"Answered user questions through JIRA and created help tickets to track fixes for future cases.",
			"Created Swagger API documentation for over 100 endpoints.",
			"Fixed more than 300 errors related to 508 usability compliance, making the web application usable for people with disabilities."
		]
	},
	{
		id: 3,
		title: "Technical Writer III",
		company: "Boeing Intelligence & Analytics (BI&A)",
		period: "August 2018 - May 2021",
		responsibilities: [
			"Created, edited, modified, and compiled over 2,000 pages of tool documentation to give analysts a resource to refer to with questions on how a specific tool functions and the capabilities available within the tool.",
			"Worked with multiple style-guides for each tool's documentation, maintaining a cohesive and consistent design.",
			"Assisted users in chat, email, over the phone, and through JIRA ticketing helpdesk to quickly solve issues and get them back into the tools necessary to accomplish the mission.",
			"Created documentation for frequently asked questions (FAQs) to give analysts a place to go prior to reaching out to the help desk.",
			"Worked directly with developers to learn the latest features and functionalities of the tools to better assist customers.",
			"Assisted in the creation and updating of learning materials to help train users how to take advantage of available features in the tool, ranging from basic introductions to advanced workflows.",
			"Provided outreach support over social platforms to aid in increasing user base and spreading new information.",
			"Tested new features before release to production, while reporting bugs and suggestions directly to developers.",
			"Worked efficiently in an agile environment, meeting deadlines and sprint goals.",
			"Assisted with proposal writings for multimillion-dollar contracts, focusing on grammar and style compliance."
		]
	},
	{
		id: 4,
		title: "All Source/ELINT Analyst",
		company: "United States Marine Corps (USMC)",
		period: "August 2013 - August 2018",
		responsibilities: [
			"Delivered full electromagnetic spectrum reporting of target electromagnetic space to enable combatant commanders to develop operational course of action as part of the E-Space Analysis Center program.",
			"Successfully briefed, deploying units and interested offices, the capabilities offered by the E-Space Analysis Center.",
			"Efficiently arranged and participated in the analysis, processing, and distribution of strategic and tactical intelligence.",
			"Created detailed analytic products including radio spectrum analysis and GSM network intelligence that enabled various tactical actions including target exploitation, SIGINT mission support, and force protection measures.",
			"Worked closely with customers, tailoring reports to meet their standards and requirements.",
			"Completed and collaborated on over 200 serialized reports, utilizing multiple secure databases and tools while maintaining 100% compliance.",
			"Enforced Quality Control (QC) on over 200 serialized reports to ensure all reporting contains reliable and accurate intelligence.",
			"Worked directly with many outside organizations in the Intelligence Community (IC), maintaining constant open contact and facilitating work to their needs/requests."
		]
	}
];

const Experience = () => {
	const [visibleJobs, setVisibleJobs] = useState<number[]>([]);
	const [selectedPDF, setSelectedPDF] = useState<{ url: string; title: string } | null>(null);

	// Stagger job animations
	useEffect(() => {
		jobs.forEach((_, index) => {
			setTimeout(() => {
				setVisibleJobs(prev => [...prev, index]);
			}, index * 150); // 150ms delay between each job
		});
	}, []);

	const openPDF = (url: string, title: string) => {
		setSelectedPDF({ url, title });
	};

	const closePDF = () => {
		setSelectedPDF(null);
	};

	return (
		<>
			<div className="text-white text-left mx-auto max-w-4xl">
				{/* Resume Button Section */}
				<div className="text-center mb-8 pb-6 border-b border-gray-600">
					<button
						onClick={() => openPDF(ResumePDF, "Nicholas Platt Resume 2025")}
						className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 transform-gpu"
					>
						📄 View Resume
					</button>
				</div>

				{/* Jobs List */}
				{jobs.map((job, index) => (
					<div 
						key={job.id}
						className={`pb-5 transition-all duration-500 ease-out ${
							visibleJobs.includes(index) 
								? 'opacity-100 translate-y-0' 
								: 'opacity-0 translate-y-4'
						}`}
					>
						<div className="flex justify-between text-2xl font-bold">
							{job.title}{" "}
							<span className="text-right text-lg font-normal">{job.period}</span>
						</div>
						<div className="text-xl">{job.company}</div>
						<ul className="list-disc pl-6 pt-3">
							{job.responsibilities.map((responsibility, respIndex) => (
								<li key={respIndex}>{responsibility}</li>
							))}
						</ul>
					</div>
				))}
				
				<div className="pb-5 flex">
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1 transition-colors duration-200"
					>
						To Top
					</button>
				</div>
			</div>

			{/* PDF Viewer - Rendered at root level for proper positioning */}
			{selectedPDF && (
				<PDFViewer
					isOpen={!!selectedPDF}
					onClose={closePDF}
					pdfUrl={selectedPDF.url}
					title={selectedPDF.title}
				/>
			)}
		</>
	);
};

export default Experience;
