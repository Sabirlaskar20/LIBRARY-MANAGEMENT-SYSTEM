import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/ui/PageTitle";

const user = {
  name: "Admin User",
  email: "admin@library.com",
  role: "Librarian",
  memberSince: "January 2026",
};

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" description="Your account information." />

      <Card className="profile-card">
        <div className="profile-row">
          <span>Name</span>
          <span>{user.name}</span>
        </div>
        <div className="profile-row">
          <span>Email</span>
          <span>{user.email}</span>
        </div>
        <div className="profile-row">
          <span>Role</span>
          <span>{user.role}</span>
        </div>
        <div className="profile-row">
          <span>Member Since</span>
          <span>{user.memberSince}</span>
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <Button>Edit Profile</Button>
        </div>
      </Card>
    </div>
  );
}

export default Profile;