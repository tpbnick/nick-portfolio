const Experience = () => (
	<div className="text-white text-left mx-auto max-w-4xl">
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Software Engineer{" "}
				<span className="text-right text-lg font-normal">July 2022 - Present</span>
			</div>
			<div className="text-xl">Erias Ventures</div>
			<ul className="list-disc pl-6 pt-3">
				<li>
					Worked within an Agile environment developing web applications using the
					following technologies: Python, Pytest, TypeScript, React, and Docker.
				</li>
				<li>
					Utilized GitHub to manage the version control of different repositories of
					data.
				</li>
				<li>
					Generated integration, unit, and acceptance tests utilizing the Pytest
					framework.
				</li>
				<li>
					Tested new features before release to users to ensure operability and
					document any issues/bugs.
				</li>
				<li>
					Created multiple Sphinx documentation directives to improve automated
					documentation creation.
				</li>
				<li>
					Completed numerous pull request reviews to merge code into multiple
					codebases.
				</li>
			</ul>
		</div>
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Software Engineer{" "}
				<span className="text-right text-lg font-normal">May 2021 - July 2022</span>
			</div>
			<div className="flex justify-between text-xl">
				Boeing Intelligence & Analytics (BI&A)
			</div>
			<ul className="list-disc pl-6 pt-3">
				<li>
					Worked within an Agile environment developing web applications using the
					following technologies: Java, React, MongoDB, JavaScript, HTML, CSS, and
					Apache Tomcat/Maven.
				</li>
				<li>Utilized GitLab to manage different repositories of data.</li>
				<li>
					Updated API documentation for new features and to improve user's ability to
					integrate with our tools.
				</li>
				<li>
					Answered user questions through JIRA and created help tickets to track
					fixes for future cases.
				</li>
				<li>Created Swagger API documentation for over 100 endpoints.</li>
				<li>
					Fixed more than 300 errors related to 508 usability compliance, making the
					web application usable for people with disabilities.
				</li>
			</ul>
		</div>
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Technical Writer III{" "}
				<span className="text-right text-lg font-normal">
					August 2018 - May 2021
				</span>
			</div>
			<div className="flex justify-between text-xl">
				Boeing Intelligence & Analytics (BI&A)
			</div>
			<ul className="list-disc pl-6 pt-3">
				<li>
					Created, edited, modified, and compiled over 2,000 pages of tool
					documentation to give analysts a resource to refer to with questions on how
					a specific tool functions and the capabilities available within the tool.
				</li>
				<li>
					Worked with multiple style-guides for each tool’s documentation,
					maintaining a cohesive and consistent design.
				</li>
				<li>
					Assisted users in chat, email, over the phone, and through JIRA ticketing
					helpdesk to quickly solve issues and get them back into the tools necessary
					to accomplish the mission.
				</li>
				<li>
					Created documentation for frequently asked questions (FAQs) to give
					analysts a place to go prior to reaching out to the help desk.
				</li>
				<li>
					Worked directly with developers to learn the latest features and
					functionalities of the tools to better assist customers.
				</li>
				<li>
					Assisted in the creation and updating of learning materials to help train
					users how to take advantage of available features in the tool, ranging from
					basic introductions to advanced workflows.
				</li>
				<li>
					Provided outreach support over social platforms to aid in increasing user
					base and spreading new information.
				</li>
				<li>
					Tested new features before release to production, while reporting bugs and
					suggestions directly to developers.
				</li>
				<li>
					Worked efficiently in an agile environment, meeting deadlines and sprint
					goals.
				</li>
				<li>
					Assisted with proposal writings for multimillion-dollar contracts, focusing
					on grammar and style compliance.
				</li>
			</ul>
		</div>
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				All Source/ELINT Analyst{" "}
				<span className="text-right text-lg font-normal">
					August 2013 - August 2018
				</span>
			</div>
			<div className="flex justify-between text-xl">
				United States Marine Corps (USMC)
			</div>
			<ul className="list-disc pl-6 pt-3">
				<li>
					Delivered full electromagnetic spectrum reporting of target electromagnetic
					space to enable combatant commanders to develop operational course of
					action as part of the E-Space Analysis Center program.
				</li>
				<li>
					Successfully briefed, deploying units and interested offices, the
					capabilities offered by the E-Space Analysis Center.
				</li>
				<li>
					Efficiently arranged and participated in the analysis, processing, and
					distribution of strategic and tactical intelligence.
				</li>
				<li>
					Created detailed analytic products including radio spectrum analysis and
					GSM network intelligence that enabled various tactical actions including
					target exploitation, SIGINT mission support, and force protection measures.
				</li>
				<li>
					Worked closely with customers, tailoring reports to meet their standards
					and requirements.
				</li>
				<li>
					Completed and collaborated on over 200 serialized reports, utilizing
					multiple secure databases and tools while maintaining 100% compliance.
				</li>
				<li>
					Enforced Quality Control (QC) on over 200 serialized reports to ensure all
					reporting contains reliable and accurate intelligence.
				</li>
				<li>
					Worked directly with many outside organizations in the Intelligence
					Community (IC), maintaining constant open contact and facilitating work to
					their needs/requests.
				</li>
			</ul>
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

export default Experience;
