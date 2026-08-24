import { Outlet } from 'react-router-dom';

function AuthLayout() {
	return (
		<div className="login-page">
			<div className="login-panel">
				<Outlet />
			</div>
		</div>
	);
}

export default AuthLayout;
