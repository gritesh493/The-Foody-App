import Header from "./Header";
import Body from "./Body";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <h1 className="font-bold text-2xl mx-[11%] my-8 px-8">
        {/* NotResponsive */}
        Restaurants with online food delivery in Kolkata
      </h1>
      <Body />
    </div>
  );
};

export default Layout;
