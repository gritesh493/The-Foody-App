import HeroImg from "../assets/Hero.jpg";
const Hero = () => {
  return (
    <div className="HeroComponentContainer h-80 w-full mb-10 flex  items-center  sm:mt-20 lg:mt-0">
      <img
        src={HeroImg}
        className="pr-0 w-96 h-80 object-cover overflow-hidden rounded-b-3xl inline ml-[11%]"
      ></img>
      <div className=" flex justify-center items-center grow h-full p-2  text-3xl font-bold rounded-b-2xl bg-gradient-to-r from-white via-blue-50 to-slate-200">
        <div className="p-2 mr-[33%] text-3xl font-extralight text-slate-600 rounded-2xl bg-gradient-to-r from-slate-100 via-blue-50">
          Order Food <br></br>
          <span className=" text-6xl ">Online </span>in Kolkata
        </div>
      </div>
    </div>
  );
};
export default Hero;
