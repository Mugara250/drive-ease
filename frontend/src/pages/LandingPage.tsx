import { TypeAnimation } from 'react-type-animation';
import carImage from '../assets/sebastian-puskeiler-tOtjBu6WVBo-unsplash.jpg';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <div className="h-screen  bg-cover bg-center" style={{ backgroundImage: `url(${carImage})` }}>
      <Navbar />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <TypeAnimation
          sequence={['Rent.', 800, 'Ride.', 800, 'Repeat.', 1200]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
        />
      </h1>
    </div>
  );
}

export default LandingPage;
