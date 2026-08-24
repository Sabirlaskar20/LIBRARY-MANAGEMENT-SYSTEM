import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';

function MainLayout() {
	return (
		<div className="app-shell">
			<Sidebar />
			<div className="workspace">
				<Navbar />
				<main className="page-content">
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default MainLayout;
