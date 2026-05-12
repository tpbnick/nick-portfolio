import { useState, useEffect } from "react";

export const useStaggeredEntrance = (count: number, delayMs: number, enabled = true): number[] => {
	const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

	useEffect(() => {
		if (!enabled) return;
		const timers = Array.from({ length: count }, (_, index) =>
			setTimeout(() => {
				setVisibleIndices(prev => [...prev, index]);
			}, index * delayMs)
		);
		return () => timers.forEach(clearTimeout);
	}, [count, delayMs, enabled]);

	return visibleIndices;
};
