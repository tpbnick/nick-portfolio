interface ScrollToTopButtonProps {
	className?: string;
}

const ScrollToTopButton = ({ className = "" }: ScrollToTopButtonProps) => {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className={`pb-5 flex ${className}`}>
			<button
				onClick={handleClick}
				className="btn btn-outline btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto hover:scale-105 transition-all duration-300 ease-out"
				aria-label="Scroll to top of page"
			>
				To Top
			</button>
		</div>
	);
};

export default ScrollToTopButton;
