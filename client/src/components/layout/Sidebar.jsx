import { NavLink } from 'react-router-dom';

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="brand-mark">
				<span>LM</span>
				<strong>Library MS</strong>
			</div>

			<p className="nav-label">Menu</p>
			<NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
			<NavLink className="nav-link" to="/profile">Profile</NavLink>

			<div className="sidebar-bottom">
				<small>&copy; 2026 Library Management System</small>
			</div>
		</aside>
	);
}

export default Sidebar;
