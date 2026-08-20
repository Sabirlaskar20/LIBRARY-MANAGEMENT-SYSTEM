const members = [['M-1048', 'Priya Nair', 'priya.nair@email.com', '12 books'], ['M-1047', 'Jon Bell', 'jon.bell@email.com', '8 books'], ['M-1046', 'Maya Chen', 'maya.chen@email.com', '21 books'], ['M-1045', 'Owen Brooks', 'owen.brooks@email.com', '4 books']];

function Members() {
  return <section><div className="page-heading"><div><p className="eyebrow">Community</p><h2>Members</h2><p className="muted">Keep member records accurate and up to date.</p></div><button className="button button-primary" type="button">+ Add member</button></div><div className="toolbar"><input aria-label="Search members" placeholder="Search name, email, or member ID" /><span className="result-count">1,842 active members</span></div><div className="table-wrap"><table><thead><tr><th>Member ID</th><th>Name</th><th>Email</th><th>Borrowed</th></tr></thead><tbody>{members.map((member) => <tr key={member[0]}>{member.map((value) => <td key={value}>{value}</td>)}</tr>)}</tbody></table></div></section>;
}

export default Members;
