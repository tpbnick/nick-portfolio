import PDFViewer from "./PDFViewer";
import { usePDFViewer } from "../hooks/usePDFViewer";
import BachelorsDiploma from "../assets/pdfs/Nicholas Platt Diploma Bachelors.pdf";
import MastersDiploma from "../assets/pdfs/Nicholas Platt Diploma Masters.pdf";

interface Degree {
	level: string;
	field: string;
	institution: string;
	period: string;
	gpa: string;
	pdf: string;
	pdfTitle: string;
}

const degrees: Degree[] = [
	{
		level: "Master of Science",
		field: "Software Engineering",
		institution: "UNIVERSITY OF MARYLAND - GLOBAL CAMPUS",
		period: "January 2021 - April 2023",
		gpa: "4.0",
		pdf: MastersDiploma,
		pdfTitle: "Master's Degree Diploma",
	},
	{
		level: "Bachelor of Science",
		field: "Computer Networking & Cybersecurity",
		institution: "UNIVERSITY OF MARYLAND - GLOBAL CAMPUS",
		period: "July 2017 - May 2020",
		gpa: "3.8",
		pdf: BachelorsDiploma,
		pdfTitle: "Bachelor's Degree Diploma",
	},
];

const Education = () => {
	const { selectedPDF, openPDF, closePDF } = usePDFViewer();

	return (
		<>
			<div className="text-base-content mx-auto max-w-4xl">
				{degrees.map((degree, index) => (
					<div
						key={degree.pdfTitle}
						className={`flex justify-between ${index < degrees.length - 1 ? "mb-4 pb-4" : "mb-4"}`}
					>
						<div className="text-left">
							<p className="text-base sm:text-lg md:text-xl lg:text-xl">{degree.level}</p>
							<p className="text-base sm:text-lg md:text-xl lg:text-xl">{degree.field}</p>
							<p className="text-sm sm:text-base md:text-lg">{degree.institution}</p>
							<button
								onClick={() => openPDF(degree.pdf, degree.pdfTitle)}
								className="text-primary hover:text-primary/70 transition-colors duration-200 text-sm mt-2"
							>
								🎓 View Diploma
							</button>
						</div>
						<div className="text-right">
							<p className="text-sm sm:text-base md:text-lg lg:text-xl">{degree.period}</p>
							<p className="text-sm sm:text-base md:text-lg">GPA: {degree.gpa}</p>
						</div>
					</div>
				))}
			</div>

			{selectedPDF && (
				<PDFViewer
					isOpen
					onClose={closePDF}
					pdfUrl={selectedPDF.url}
					title={selectedPDF.title}
				/>
			)}
		</>
	);
};

export default Education;
