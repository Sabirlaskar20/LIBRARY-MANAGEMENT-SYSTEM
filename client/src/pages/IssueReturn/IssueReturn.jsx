import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

const initialIssues = [
  { book: "Clean Code", member: "Aicharjya Baruah", issueDate: "2026-08-10", dueDate: "2026-08-24", status: "issued" },
  { book: "The Pragmatic Programmer", member: "Souraj Shil", issueDate: "2026-08-01", dueDate: "2026-08-15", status: "overdue" },
  { book: "Introduction to Algorithms", member: "Hardeep", issueDate: "2026-08-18", dueDate: "2026-09-01", status: "issued" },
];

function IssueReturn() {
  const [issues, setIssues] = useState(initialIssues);

  const handleReturn = (book, member) => {
    setIssues((prev) => prev.filter((row) => !(row.book === book && row.member === member)));
  };

  return (
    <section>
      <div className="page-heading">
        <PageTitle title="Issue / Return" description="Track currently issued books and process returns." />
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Book</th><th>Member</th><th>Issue Date</th><th>Due Date</th><th>Status</th><th></th>
            </tr>
          </thead>
          <tbody>
            {issues.length === 0 ? (
              <tr><td colSpan="6" className="empty-state">No active issues.</td></tr>
            ) : (
              issues.map((row) => (
                <tr key={row.book + row.member}>
                  <td>{row.book}</td>
                  <td>{row.member}</td>
                  <td>{row.issueDate}</td>
                  <td>{row.dueDate}</td>
                  <td><span className={`tag tag-${row.status}`}>{row.status.charAt(0).toUpperCase() + row.status.slice(1)}</span></td>
                  <td><Button variant="secondary" onClick={() => handleReturn(row.book, row.member)}>Return</Button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default IssueReturn;