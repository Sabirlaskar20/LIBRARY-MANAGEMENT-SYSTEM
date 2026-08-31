import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

export default function AddBook() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", author: "", category: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New book (frontend only):", form);
    navigate("/books");
  };

  return (
    <div>
      <PageTitle title="Add Book" description="Register a new book in the catalog." />
      <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input id="author" name="author" value={form.author} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input id="category" name="category" value={form.category} onChange={handleChange} required />
        </div>
        <Button type="submit">Save Book</Button>
      </form>
    </div>
  );
}