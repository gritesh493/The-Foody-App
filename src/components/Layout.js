import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";
import SecondaryHeader from "./SecondaryHeader";
import Shimmer from "./Simmer";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Hero />
      <h1 className="font-bold text-2xl mx-[11%] mt-8 mb-4 px-8 pt-8 border-t hidden md:block">
        Restaurants with online food delivery in Kolkata
      </h1>
      <h1 className="font-bold text-2xl sm:mx-[11%] mt-8 mb-4 px-8 pt-8 border-t md:hidden block">
        All Restaurants Nearby
      </h1>
      <SecondaryHeader />
      <Body />
    </div>
  );
};

export default Layout;
