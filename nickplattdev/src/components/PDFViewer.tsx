import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface PDFViewerProps {
	isOpen: boolean;
	onClose: () => void;
	pdfUrl: string;
	title: string;
}

const PDFViewer = ({ isOpen, onClose, pdfUrl, title }: PDFViewerProps) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		const timer = setTimeout(() => setIsVisible(true), 10);
		return () => clearTimeout(timer);
	}, [isOpen]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 200);
	};

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) handleClose();
	};

	return createPortal(
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/75 transition-all duration-200 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
			onClick={handleBackdropClick}
		>
			<div className={`bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col transition-all duration-200 ease-in-out ${
				isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
			}`}>
				<div className="flex justify-between items-center p-4">
					<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
					<button
						onClick={handleClose}
						className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors duration-200"
						aria-label="Close PDF viewer"
					>
						×
					</button>
				</div>
				<div className="flex-1 p-4">
					<iframe
						src={pdfUrl}
						className="w-full h-full min-h-[70vh] border-0 rounded"
						title={title}
					/>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default PDFViewer;
