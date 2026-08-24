import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Overview'],
  ['/books', 'Books'],
  ['/members', 'Members'],
  ['/issue-return', 'Issue & return'],
  ['/profile', 'Profile']
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-mark">
        <span>LM</span>
        <div>
          Library
          <br />
          <strong>management</strong>
        </div>
      </div>
      <nav aria-label="Primary navigation">
        <p className="nav-label">Workspace</p>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <NavLink className="nav-link" to="/login">Sign out</NavLink>
        <small>v0.1.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;
