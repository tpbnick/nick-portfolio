export const TIMING = {
	INSTANT: 10,
	FAST: 100,
	STAGGER: {
		NAVIGATION: 100,
		EXPERIENCE: 150,
		ABOUT: 200,
	},
	DEFAULT: 200,
	SLOW: 300,
	ENTRANCE: 500,
	PAGE_TRANSITION: 700,
} as const;

export const DURATION_CLASS = {
	FAST: "duration-200",
	DEFAULT: "duration-300",
	SLOW: "duration-500",
	ENTRANCE: "duration-700",
} as const;

export const ANIMATION_CLASS = {
	FADE_IN: "opacity-100 translate-y-0",
	FADE_OUT: "opacity-0 translate-y-4",
	SCALE_IN: "scale-100",
	SCALE_OUT: "scale-95",
	BUTTON_HOVER: "hover:scale-105 transition-all duration-300 ease-out",
	LINK_HOVER: "transition-colors duration-200",
} as const;
