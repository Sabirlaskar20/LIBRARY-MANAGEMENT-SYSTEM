import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

const sampleMembers = [
  { name: "Aicharjya Baruah", email: "aicharjya@library.com", booksIssued: 2, status: "active" },
  { name: "Souraj Shil", email: "souraj@library.com", booksIssued: 1, status: "active" },
  { name: "Hardeep", email: "hardeep@library.com", booksIssued: 0, status: "active" },
  { name: "Sabir Ahmed Laskar", email: "sabir@library.com", booksIssued: 3, status: "active" },
  { name: "Jigyashu Gogoi", email: "jigyashu@library.com", booksIssued: 0, status: "inactive" },
];

function Members() {
  const [query, setQuery] = useState("");

  const filtered = sampleMembers.filter((m) =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="page-heading">
        <PageTitle title="Members" description="Manage registered library members." />
        <Link to="/members/add">
          <Button>Add Member</Button>
        </Link>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Books Issued</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="4" className="empty-state">No members found.</td></tr>
            ) : (
              filtered.map((m) => (
                <tr key={m.email}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.booksIssued}</td>
                  <td>
                    <span className={`tag tag-${m.status}`}>
                      {m.status.charAt(0).toUpperCase() + m.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Members;