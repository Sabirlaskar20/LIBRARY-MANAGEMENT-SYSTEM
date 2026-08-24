function Login() {
	return (
		<>
			<div className="login-brand">
				<span>LM</span>
				<p>Library MS</p>
			</div>
			<h1>Sign in</h1>
			<p className="muted">Placeholder Login page — replace with your existing Login.jsx content.</p>
			<form>
				<label>
					Username
					<input type="text" name="username" />
				</label>
				<label>
					Password
					<input type="password" name="password" />
				</label>
				<button type="submit" className="button button-primary">Sign in</button>
			</form>
		</>
	);
}

export default Login;
