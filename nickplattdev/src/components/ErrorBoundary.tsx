import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback || (
				<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
					<div className="text-center p-8">
						<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
							Something went wrong
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-6">
							Sorry, but something unexpected happened. Please try refreshing the page.
						</p>
						<button
							onClick={() => window.location.reload()}
							className="btn btn-primary"
						>
							Refresh Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary; 