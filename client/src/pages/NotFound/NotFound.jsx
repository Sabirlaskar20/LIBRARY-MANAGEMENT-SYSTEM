import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<section className="empty-state">
			<p className="eyebrow">404</p>
			<h1>Page Not Found</h1>
			<Link className="button button-primary" to="/">Back to Home</Link>
		</section>
	);
}

export default NotFound;
