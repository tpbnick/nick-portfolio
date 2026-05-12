import { useState, useCallback } from "react";

interface PDFSelection {
	url: string;
	title: string;
}

export const usePDFViewer = () => {
	const [selectedPDF, setSelectedPDF] = useState<PDFSelection | null>(null);

	const openPDF = useCallback((url: string, title: string) => {
		setSelectedPDF({ url, title });
	}, []);

	const closePDF = useCallback(() => {
		setSelectedPDF(null);
	}, []);

	return { selectedPDF, openPDF, closePDF };
};
