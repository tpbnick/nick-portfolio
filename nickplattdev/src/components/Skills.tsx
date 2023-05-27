const Skills = () => (
	<div className="text-white mx-auto max-w-4xl">
		<div className="pb-4">
			<p className="pb-3">
				Over the past few years, starting in late 2018, I have dedicated myself to
				learning various programming languages. I pursued this knowledge through
				self-guided learning as well as online courses. It was during this time that
				I discovered my genuine passion for programming. One of the defining moments
				was when I created a personalized dashboard for my browser's homepage using
				basic HTML and CSS. I find it truly fascinating how you can begin with a
				blank canvas and gradually transform lines of code into powerful and
				visually appealing creations.
			</p>
			<p className="pb-8">
				I began taking notes and decided to create a{" "}
				<a
					href="https://docs.nicklyss.com"
					target="_blank"
					className="text-blue-300 hover:text-blue-500"
				>
					documentation website
				</a>{" "}
				to better organize them, using Markdown and Material for MKDocs. My notes
				website can be found . I took Harvard University's CS50x - Introduction to
				Computer Science during the 2020 pandemic and learned basics for both C,
				Python, JavaScript, and SQL! For my final project, I developed{" "}
				<a
					href="https://soccerfront.io"
					target="_blank"
					className="text-blue-300 hover:text-blue-500"
				>
					SoccerFront.io
				</a>
				, which is a soccer live scores website built using Nodejs, Expressjs, HTML,
				CSS, and JS.
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

export default Skills;
