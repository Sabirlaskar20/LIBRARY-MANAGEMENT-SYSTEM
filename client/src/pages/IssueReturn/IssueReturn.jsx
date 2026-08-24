function IssueReturn() {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Circulation desk</p>
          <h2>Issue & return</h2>
          <p className="muted">Record a new loan or bring a book back into circulation.</p>
        </div>
      </div>

      <div className="form-grid">
        <form className="panel form-panel">
          <p className="eyebrow">New transaction</p>
          <h3>Issue a book</h3>
          <label>
            Member ID
            <input placeholder="e.g. M-1048" />
          </label>
          <label>
            Book ISBN
            <input placeholder="e.g. 978-0-374-27563-1" />
          </label>
          <label>
            Due date
            <input type="date" />
          </label>
          <button className="button button-primary" type="button">Issue book</button>
        </form>

        <form className="panel form-panel">
          <p className="eyebrow">Check-in</p>
          <h3>Return a book</h3>
          <label>
            Book ISBN
            <input placeholder="Scan or enter ISBN" />
          </label>
          <label>
            Condition
            <select>
              <option>Good condition</option>
              <option>Minor wear</option>
              <option>Damaged</option>
            </select>
          </label>
          <button className="button button-secondary" type="button">Complete return</button>
        </form>
      </div>
    </section>
  );
}

export default IssueReturn;
