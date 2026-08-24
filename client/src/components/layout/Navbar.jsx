import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<header className="topbar">
			<h1>Library Management System</h1>
			<nav className="topbar-actions">
				<NavLink className="nav-link" to="/">Home</NavLink>
				<NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
				<NavLink className="nav-link" to="/profile">Profile</NavLink>
				<NavLink className="nav-link" to="/login">Login</NavLink>
			</nav>
		</header>
	);
}

export default Navbar;
