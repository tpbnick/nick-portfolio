import { useEffect, useState } from "react";
import PDFViewer from "./PDFViewer";
import ResumePDF from "../assets/pdfs/platt_resume_2026_cleared.pdf";

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
			"Developed and maintained full-stack web applications in Agile teams using Python (FastAPI), React/TypeScript, Docker, and AWS, owning features end-to-end from API design to UI implementation.",
			"Designed and deployed cloud infrastructure on AWS using EC2, S3, ECR, CloudFormation, and Secrets Manager.",
			"Built and maintained CI/CD pipelines (GitHub, Jenkins), adding automated checks for unit tests and code formatting compliance.",
			"Designed and executed automated test suites (unit, acceptance, E2E) using Pytest, Jest, and Selenium, maintaining ≥95% coverage.",
			"Diagnosed and resolved defects through root-cause analysis and debugging, improving system stability and maintainability.",
			"Managed source control across GitHub and GitLab, performing code reviews and merging pull requests.",
			"Implemented documentation-as-code practices and maintained developer/user documentation and architecture diagrams using Sphinx, LaTeX, and Markdown.",
			"Delivered technical briefings and live demonstrations to senior leadership on new features and system capabilities."
		]
	},
	{
		id: 2,
		title: "Software Engineer",
		company: "Boeing Intelligence & Analytics (BI&A)",
		period: "May 2021 - July 2022",
		responsibilities: [
			"Developed and maintained web applications using Java, AngularJS, JavaScript, MongoDB, and Maven in an Agile environment.",
			"Enhanced UI/UX while ensuring compliance with Section 508 accessibility standards.",
			"Designed and executed automated test suites (JUnit, Selenium) to validate functionality and release readiness.",
			"Produced interactive Swagger documentation to support external system integration.",
			"Managed source code with Git and tracked defects, enhancements, and tasks in JIRA.",
			"Collaborated directly with customers to gather requirements and deliver new features and bug fixes.",
			"Provided technical support to end users and developers, answering feature and integration questions via help desk channels.",
			"Diagnosed and resolved user issues using internal backend tools, restoring functionality and minimizing downtime."
		]
	},
	{
		id: 3,
		title: "Technical Writer III / Systems Engineer",
		company: "Boeing Intelligence & Analytics (BI&A)",
		period: "August 2018 - May 2021",
		responsibilities: [
			"Authored and maintained 2,000+ pages of technical documentation in Confluence, covering system capabilities, procedures, and troubleshooting.",
			"Partnered with developers to document new features, workflows, and operational guidance.",
			"Produced training materials ranging from introductory guides to advanced user workflows.",
			"Tested pre-release features, validated functionality, and reported defects to engineering teams.",
			"Provided Tier 1–2 technical support via chat, email, and phone, resolving user issues with internal backend tools.",
			"Managed user requests and incidents by creating and tracking tickets in JIRA, including bug reports and feature requests.",
			"Supported proposal development for multimillion-dollar contracts, ensuring grammar, style, and compliance requirements."
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
				setVisibleJobs((prev: number[]) => [...prev, index]);
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
						onClick={() => openPDF(ResumePDF, "Nicholas Platt Resume 2026")}
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
