import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <section className="empty-state">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <NavLink className="button button-primary" to="/">
        Return to dashboard
      </NavLink>
    </section>
  );
}

export default NotFound;
