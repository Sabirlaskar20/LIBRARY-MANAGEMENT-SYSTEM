import { useState } from "react";
import Button from "../../components/ui/Button";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Enter your email and password to continue.");
      return;
    }
    setError("");
    // TODO: call your auth service here
    console.log("Logging in with", form);
  };

  return (
    <div className="auth-card">
      <h1>Login</h1>
      <p className="auth-subtitle">Sign in to manage your library</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@library.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}