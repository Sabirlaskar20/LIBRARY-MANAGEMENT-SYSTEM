import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

const sampleBooks = [
  { title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", status: "issued" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Software Engineering", status: "overdue" },
  { title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", status: "issued" },
  { title: "Database System Concepts", author: "Abraham Silberschatz", category: "Databases", status: "available" },
  { title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking", status: "available" },
];

function Books() {
  const [query, setQuery] = useState("");

  const filtered = sampleBooks.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="page-heading">
        <PageTitle title="Books" description="Browse and manage the library catalog." />
        <Link to="/books/add">
          <Button>Add Book</Button>
        </Link>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="4" className="empty-state">No books found.</td></tr>
            ) : (
              filtered.map((b) => (
                <tr key={b.title}>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.category}</td>
                  <td>
                    <span className={`tag tag-${b.status}`}>
                      {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
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

export default Books;