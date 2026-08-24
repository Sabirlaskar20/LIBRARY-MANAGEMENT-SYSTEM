const books = [
  ['The Night Circus', 'Erin Morgenstern', 'Fiction', 'Available'],
  ['Tomorrow, and Tomorrow, and Tomorrow', 'Gabrielle Zevin', 'Fiction', 'Issued'],
  ['A Brief History of Time', 'Stephen Hawking', 'Science', 'Available'],
  ['The Design of Everyday Things', 'Don Norman', 'Design', 'Reserved']
];

function Books() {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Collection</p>
          <h2>Books</h2>
          <p className="muted">Manage the library catalogue and availability.</p>
        </div>
        <button className="button button-primary" type="button">+ Add book</button>
      </div>

      <div className="toolbar">
        <input aria-label="Search books" placeholder="Search by title or author" />
        <select aria-label="Filter by category">
          <option>All categories</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Design</option>
        </select>
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
            {books.map((book) => (
              <tr key={book[0]}>
                {book.map((value, index) => (
                  <td key={`${book[0]}-${index}`}>
                    {index === 3 ? <span className={`tag ${value.toLowerCase()}`}>{value}</span> : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Books;
