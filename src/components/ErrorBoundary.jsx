import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}

	// this lifecycle is invoked after an error has been thrown by any of its children components
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	/**
	 * this lifecycle is invoked after an error has been thrown by any of its children components
	 * @param {*} error: the error that was thrown.
	 * @param {*} errorInfo: an object with a componentStack key containing information about which component threw the error.
	 */
	componentDidCatch(error, errorInfo) {
		this.setState({ error: error, errorInfo: errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="p-4 basis-full md:basis-1/4 border border-red-400 flex flex-col justify-center rounded-lg items-center gap-2">
					<h1 className="font-bold text-xl text-red-500">
						حدث خطا أثناء معالجة البيانات
					</h1>
					<h3 className="text-red-400">تفاصيل الخطأ</h3>
					<pre
						dir="ltr"
						className="whitespace-pre-wrap break-all bg-gray-700 rounded-lg p-4"
					>
						<p className="text-red-400">{String(this.state.error)}</p>
						<p className="text-red-400 whitespace-pre-wrap">
							{JSON.stringify(this.state.errorInfo).toString()}
						</p>
					</pre>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
