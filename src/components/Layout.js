import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Hero />
      <h1 className="font-bold text-2xl mx-[11%] my-8 px-8 pt-8 border-t">
        {/* NotResponsive */}
        Restaurants with online food delivery in Kolkata
      </h1>
      <Body />
    </div>
  );
};

export default Layout;
