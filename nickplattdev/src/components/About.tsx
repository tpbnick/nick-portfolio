import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useEffect, useState } from "react";

import Image1 from "../assets/nicklyss.webp";
import Image2 from "../assets/nick.webp";
import Image3 from "../assets/pup.webp";

const images = [
	{ src: Image1, alt: "Nicklyss Image", caption: "Nicklyss" },
	{ src: Image2, alt: "Nick Image", caption: "Nick at the top of Mt. Whitney" },
	{ src: Image3, alt: "Pup Image", caption: "Pup" },
];

const About = () => {
	const [visibleImages, setVisibleImages] = useState<number[]>([]);
	const [commitInfo, setCommitInfo] = useState<{ hash: string; date: string } | null>(null);

	// Stagger image animations
	useEffect(() => {
		images.forEach((_, index) => {
			setTimeout(() => {
				setVisibleImages(prev => [...prev, index]);
			}, index * 200); // 200ms delay between each image
		});
	}, []);

	// Get commit information
	useEffect(() => {
		const commitHash = import.meta.env.VITE_COMMIT_HASH;
		const buildDate = import.meta.env.VITE_BUILD_DATE;
		
		if (commitHash && commitHash !== 'main') {
			const formattedDate = new Date(buildDate).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});

			setCommitInfo({
				hash: commitHash,
				date: formattedDate
			});
		} else {
			setCommitInfo({
				hash: 'dev',
				date: new Date().toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			});
		}
	}, []);

	return (
		<div className="text-white mx-auto max-w-4xl">
			<p className="pb-8">
				Hi, my name is Nick Platt. I am currently a software engineer for Erias
				Ventures and work within a large development project. My education includes a
				BS in Computer Networking and Cybersecurity and a MS in Software Engineering,
				both from the University of Maryland. I have working knowledge in Python,
				TypeScript, HTML, CSS, JavaScript, Java, SQL, and Markdown (hopefully more to come in the
				near future). Outside of work, I love watching European soccer (Go Bayern!),
				building keyboards, and spending time with my wife and pup. If you have any
				questions, please feel free to reach out to me through the contact info
				below. I also created an{" "}
				<a
					href="https://nicklyss.com"
					target="_blank"
					className="text-blue-300 hover:text-blue-500"
				>
					online photo album
				</a>
				, if you want to see recent trips/adventures.
			</p>
			<div className="photo-gallery">
				<PhotoProvider>
					<div className="photo-gallery flex justify-around flex-wrap">
						{images.map((image, index) => (
							<PhotoView key={index} src={image.src}>
								<div className="w-72 h-72 pt-3 pb-10 px-3 mx-auto relative mb-4">
									<img
										src={image.src}
										alt={image.alt}
										className={`rounded-lg object-cover object-center absolute w-full h-full transition-all duration-500 ease-out ${
											visibleImages.includes(index) 
												? 'opacity-100 translate-y-0 scale-100' 
												: 'opacity-0 translate-y-4 scale-95'
										}`}
									/>
								</div>
							</PhotoView>
						))}
					</div>
				</PhotoProvider>
			</div>
			
			{/* Commit Info Section */}
			{commitInfo && (
				<div className="text-center mt-8 pt-6 border-t border-gray-600">
					<p className="text-sm text-gray-400">
						This portfolio was last updated on {commitInfo.date} -{" "}
						{commitInfo.hash === 'dev' ? (
							<span className="text-yellow-400">dev mode</span>
						) : (
							<a
								href={`https://github.com/tpbnick/nick-portfolio/commit/${commitInfo.hash}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-300 hover:text-blue-500 transition-colors duration-200"
							>
								{commitInfo.hash.substring(0, 7)}
							</a>
						)}
					</p>
					{commitInfo.hash === 'dev' && (
						<p className="text-xs text-gray-500 mt-2">
							Run <code className="bg-gray-700 px-2 py-1 rounded">npm run build</code> to see commit info
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default About;
