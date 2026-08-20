const stats = [
  ['Total books', '12,480', '+4.8%', 'Across 8 categories'],
  ['Books issued', '428', '+12.2%', 'Since last month'],
  ['Active members', '1,842', '+6.4%', 'This quarter'],
  ['Overdue items', '37', '-8.1%', 'Needs attention']
];

function Dashboard() {
  return <>
    <section className="page-heading"><div><p className="eyebrow">Thursday, 20 August 2026</p><h2>Overview</h2><p className="muted">A clear view of what is happening across the library.</p></div><button className="button button-primary" type="button">+ New issue</button></section>
    <section className="stats-grid" aria-label="Library statistics">{stats.map(([label, value, change, note]) => <article className="stat-card" key={label}><p>{label}</p><strong>{value}</strong><span className={change.startsWith('-') ? 'change positive' : 'change'}>{change}</span><small>{note}</small></article>)}</section>
    <section className="content-grid">
      <article className="panel"><div className="panel-heading"><div><p className="eyebrow">Circulation</p><h3>Borrowing activity</h3></div><span className="panel-period">Last 7 days</span></div><div className="chart-placeholder"><div className="bars">{[52, 76, 61, 88, 70, 94, 82].map((height, index) => <div className="bar-column" key={index}><span style={{ height: `${height}%` }}></span><small>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</small></div>)}</div></div></article>
      <article className="panel"><div className="panel-heading"><div><p className="eyebrow">To do</p><h3>Needs attention</h3></div></div><ul className="activity-list"><li><span className="status-dot amber"></span><div><strong>37 overdue books</strong><small>Review overdue notices</small></div><span className="list-arrow">→</span></li><li><span className="status-dot red"></span><div><strong>5 damaged returns</strong><small>Awaiting inspection</small></div><span className="list-arrow">→</span></li><li><span className="status-dot green"></span><div><strong>12 new members</strong><small>Registered this week</small></div><span className="list-arrow">→</span></li></ul></article>
    </section>
  </>;
}

export default Dashboard;
