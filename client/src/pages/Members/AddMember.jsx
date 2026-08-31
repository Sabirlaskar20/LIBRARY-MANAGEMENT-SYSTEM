import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

export default function AddMember() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New member (frontend only):", form);
    navigate("/members");
  };

  return (
    <div>
      <PageTitle title="Add Member" description="Register a new library member." />
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <Button type="submit">Save Member</Button>
      </form>
    </div>
  );
}