import logo from "../../../assets/images/logo header.png";
import carBackgroundImage from "../../../assets/images/car-background-image.jpg";

const Landing = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={carBackgroundImage}
        className="absolute w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative text-white h-full">
        <div className=" bg-[#111827] flex justify-center rounded-b-xl">
          <div className="">
            <img src={logo} alt="application logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
