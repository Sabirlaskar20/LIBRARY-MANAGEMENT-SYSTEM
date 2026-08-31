import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-title">
        Library Management System
      </Link>

      <div className="navbar-user">
        <span>Admin User</span>
        <div className="avatar">A</div>
      </div>
    </header>
  );
}

export default Navbar;