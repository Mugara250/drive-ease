import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <main className="bg-[#111827]">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default MainLayout;
