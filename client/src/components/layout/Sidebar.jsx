import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Books", to: "/books" },
  { label: "Members", to: "/members" },
  { label: "Issue / Return", to: "/issue-return" },
  { label: "Fines", soon: true },
  { label: "Reports", soon: true },
  { label: "Profile", to: "/profile" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        Library<span>MS</span>
      </div>

      <ul className="sidebar-nav">
        {navItems.map((item) =>
          item.soon ? (
            <li key={item.label}>
              <span className="sidebar-nav-disabled">
                {item.label} <small>Soon</small>
              </span>
            </li>
          ) : (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;