function Profile() {
  return (
    <section>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Account</p>
          <h2>Profile</h2>
          <p className="muted">Review your details and staff preferences.</p>
        </div>
      </div>

      <div className="form-grid">
        <form className="panel form-panel">
          <p className="eyebrow">Personal details</p>
          <h3>Alex Morgan</h3>
          <label>
            Full name
            <input defaultValue="Alex Morgan" />
          </label>
          <label>
            Email address
            <input defaultValue="alex.morgan@library.org" />
          </label>
          <label>
            Role
            <input defaultValue="Senior Librarian" />
          </label>
          <button className="button button-primary" type="button">Save changes</button>
        </form>

        <div className="panel">
          <p className="eyebrow">Security</p>
          <h3>Access overview</h3>
          <ul className="activity-list">
            <li>
              <span className="status-dot green"></span>
              <div>
                <strong>Two-factor authentication</strong>
                <small>Enabled</small>
              </div>
            </li>
            <li>
              <span className="status-dot amber"></span>
              <div>
                <strong>Password last changed</strong>
                <small>18 days ago</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Profile;
