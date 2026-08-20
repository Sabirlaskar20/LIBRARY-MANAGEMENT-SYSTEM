import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Books from './pages/Books';
import Members from './pages/Members';
import IssueReturn from './pages/IssueReturn';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Workspace />} />
    </Routes>
  );
}

function Workspace() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="workspace">
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/members" element={<Members />} />
            <Route path="/issue-return" element={<IssueReturn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <section className="empty-state">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <NavLink className="button button-primary" to="/">Return to dashboard</NavLink>
    </section>
  );
}

export default App;
