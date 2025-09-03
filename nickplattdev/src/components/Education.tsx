import { useState } from "react";
import PDFViewer from "./PDFViewer";
import BachelorsDiploma from "../assets/pdfs/Nicholas Platt Diploma Bachelors.pdf";
import MastersDiploma from "../assets/pdfs/Nicholas Platt Diploma Masters.pdf";

const Education = () => {
	const [selectedPDF, setSelectedPDF] = useState<{ url: string; title: string } | null>(null);

	const openPDF = (url: string, title: string) => {
		setSelectedPDF({ url, title });
	};

	const closePDF = () => {
		setSelectedPDF(null);
	};

	return (
		<>
			<div className="text-white mx-auto max-w-4xl">
				<div className="flex justify-between mb-4 pb-4">
					<div className="text-left">
						<p className="text-base sm:text-lg md:text-xl lg:text-xl">
							Master of Science
						</p>
						<p className="text-base sm:text-lg md:text-xl lg:text-xl">
							Software Engineering
						</p>
						<p className="text-sm sm:text-base md:text-lg">
							UNIVERSITY OF MARYLAND - GLOBAL CAMPUS
						</p>
						<button
							onClick={() => openPDF(MastersDiploma, "Master's Degree Diploma")}
							className="text-blue-300 hover:text-blue-500 transition-colors duration-200 text-sm mt-2"
						>
							🎓 View Diploma
						</button>
					</div>
					<div className="text-right">
						<p className="text-sm sm:text-base md:text-lg lg:text-l">
							January 2021 - April 2023
						</p>
						<p className="text-sm sm:text-base md:text-lg">GPA: 4.0</p>
					</div>
				</div>
				<div className="flex justify-between mb-4">
					<div className="text-left">
						<p className="text-base sm:text-lg md:text-xl lg:text-xl">
							Bachelor of Science
						</p>
						<p className="text-base sm:text-lg md:text-xl lg:text-xl">
							Computer Networking & Cybersecurity
						</p>
						<p className="text-sm sm:text-base md:text-lg">
							UNIVERSITY OF MARYLAND - GLOBAL CAMPUS
						</p>
						<button
							onClick={() => openPDF(BachelorsDiploma, "Bachelor's Degree Diploma")}
							className="text-blue-300 hover:text-blue-500 transition-colors duration-200 text-sm mt-2"
						>
							🎓 View Diploma
						</button>
					</div>
					<div className="text-right">
						<p className="text-sm sm:text-base md:text-lg lg:text-xl">
							July 2017 - May 2020
						</p>
						<p className="text-sm sm:text-base md:text-lg">GPA: 3.8</p>
					</div>
				</div>
			</div>

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

export default Education;
