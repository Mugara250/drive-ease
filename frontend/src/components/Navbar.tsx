import logo from '../assets/logo header.png';

function Navbar() {
  return (
    <div className="relative bg-[#111827] h-[4.2rem] flex justify-center rounded-b-xl">
      <div>
        <img src={logo} alt="application logo" className="size-20 object-cover" />
      </div>
      <div className="absolute bg-inherit size-24 -z-10 -bottom-5 rounded-full"></div>
    </div>
  );
}

export default Navbar;
