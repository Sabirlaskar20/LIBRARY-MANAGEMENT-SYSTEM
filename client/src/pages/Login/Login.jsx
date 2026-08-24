function Login() {
  return (
    <main className="login-page">
      <div className="login-brand">
        <span>LM</span>
        <p>
          Library
          <br />
          <strong>management</strong>
        </p>
      </div>

      <section className="login-panel">
        <p className="eyebrow">Staff access</p>
        <h1>Welcome back.</h1>
        <p className="muted">Sign in to continue to your library workspace.</p>

        <form>
          <label>
            Email address
            <input type="email" placeholder="you@library.org" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>
          <button className="button button-primary" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
