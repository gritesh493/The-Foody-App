import HeroImg from "../assets/HeroImage_Food.jpg";
const Hero = () => {
  return (
    <div className="HeroComponentContainer h-80 mb-10 ">
      <img
        src={HeroImg}
        className=" w-full h-full object-cover overflow-hidden rounded-b-3xl "
      ></img>
      <div className="absolute top-64 left-80 text-3xl font-bold text-white">
        Order Food <br></br>Online in Kolkata
      </div>
    </div>
  );
};
export default Hero;
