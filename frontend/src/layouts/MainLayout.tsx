import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <main className="">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default MainLayout;
