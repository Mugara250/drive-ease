import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<main className="min-h-screen bg-slate-100 text-slate-900">
			<Outlet />
		</main>
	);
}

export default Layout;
