import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/ui/PageTitle";

const stats = [
  { label: "Total Books", value: 1240 },
  { label: "Total Members", value: 356 },
  { label: "Issued Books", value: 87 },
  { label: "Overdue Books", value: 12 },
];

const recentBorrowings = [
  { book: "Clean Code", member: "Aicharjya Baruah", date: "2026-08-20", status: "issued" },
  { book: "The Pragmatic Programmer", member: "Souraj Shil", date: "2026-08-18", status: "overdue" },
  { book: "Introduction to Algorithms", member: "Hardeep", date: "2026-08-15", status: "issued" },
  { book: "Database System Concepts", member: "Sabir Ahmed Laskar", date: "2026-08-12", status: "available" },
];

function Dashboard() {
  return (
    <div>
      <PageTitle title="Dashboard" description="Overview of your library's current activity." />

      <div className="stats-grid">
        {stats.map((s) => (
          <Card key={s.label}>
            <span className="stat-label">{s.label}</span>
            <strong>{s.value}</strong>
          </Card>
        ))}
      </div>

      <div className="page-heading">
        <h3>Recent Borrowings</h3>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Member</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBorrowings.map((row) => (
              <tr key={row.book + row.member}>
                <td>{row.book}</td>
                <td>{row.member}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`tag tag-${row.status}`}>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="page-heading" style={{ marginTop: "1.75rem" }}>
        <h3>Quick Actions</h3>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link to="/books/add"><Button>Add Book</Button></Link>
        <Link to="/members/add"><Button variant="secondary">Add Member</Button></Link>
        <Link to="/issue-return"><Button variant="secondary">Issue Book</Button></Link>
      </div>
    </div>
  );
}

export default Dashboard;