import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const features = [
  { icon: "📚", title: "Book Catalog", text: "Browse and search the full library collection by title, author or category." },
  { icon: "🪪", title: "Member Management", text: "Track member records, active borrowings and history in one place." },
  { icon: "🔄", title: "Issue & Return", text: "Issue books to members and process returns with automatic due-date tracking." },
];

function Home() {
  return (
    <div>
      <header className="public-nav">
        <div className="brand">Library<span>MS</span></div>
        <nav className="public-nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">BCA Final Project</p>
        <h1>Library Management System</h1>
        <p>
          A simple, organized way to manage books, members, and borrowing —
          built to make running a library easier for staff and students alike.
        </p>
        <div className="hero-actions">
          <Link to="/books"><Button>Search Books</Button></Link>
          <Link to="/login"><Button variant="secondary">Login</Button></Link>
        </div>
      </section>

      <section className="features-section">
        <PageHeading />
        <div className="features-grid">
          {features.map((f) => (
            <Card key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-body">{f.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <footer className="public-footer">
        &copy; {new Date().getFullYear()} Library Management System — BCA Final Project
      </footer>
    </div>
  );
}

function PageHeading() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Everything your library needs</h2>
      <p className="muted">Built for staff, students, and everyday library operations.</p>
    </div>
  );
}

export default Home;