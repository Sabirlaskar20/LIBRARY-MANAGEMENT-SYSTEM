function Navbar() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Library operations</p>
        <h1>Good morning, librarian</h1>
      </div>
      <div className="topbar-actions">
        <button className="icon-button" type="button" aria-label="View notifications">Bell</button>
        <div className="user-chip">AM<span>Alex Morgan</span></div>
      </div>
    </header>
  );
}

export default Navbar;
