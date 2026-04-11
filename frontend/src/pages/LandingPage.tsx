import { TypeAnimation } from 'react-type-animation';
import carImage from '../assets/sebastian-puskeiler-tOtjBu6WVBo-unsplash.jpg';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <div
      className="h-screen relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${carImage})` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <Navbar />
      <div className="mt-40 relative flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-4xl font-extrabold">DriveEase</h1>
        <h1 className="text-4xl  font-bold">
          <TypeAnimation
            sequence={['Rent', 800, 'Ride', 800, 'Repeat', 1200]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </h1>
        <p className="text-2xl font-semibold">Find your perfect car in seconds.</p>
        <button
          type="button"
          className="mt-5 bg-white text-[#265E78] text-2xl font-semibold px-36 py-2 rounded-3xl hover:bg-[#265E78] hover:text-white">
          Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
