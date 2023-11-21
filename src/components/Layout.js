import Header from "./Header";
import Body from "./Body";
import Hero from "./Hero";
import SecondaryHeader from "./SecondaryHeader";
import Shimmer from "./Simmer";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";
import { getRestaurantList } from "../assets/utils";
import { RESRAURANT_URL } from "../assets/constant.js";

const Layout = () => {
  console.log("Layout Rendered");
  const [restaurantList, setRestaurantList] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(
    restaurantList.length == 0 ? "restaurantList is Empty" : restaurantList
  );

  async function updateRestaurantList() {
    setLoading(true);
    const apidata = await fetch(RESRAURANT_URL);
    const json = await apidata.json();
    const fetchedRestaurantList = getRestaurantList(json);
    setRestaurantList(fetchedRestaurantList);
    console.log(restaurantList);
    console.log(fetchedRestaurantList);
  }

  useEffect(() => {
    updateRestaurantList();
    setLoading(false);
  }, []);

  return (
    <RestaurantListContext.Provider
      value={{ restaurantList, updateRestaurantList, loading, setLoading }}
    >
      <div className="Layout">
        <button onClick={() => updateRestaurantList()}>update</button>
        <Header />
        <Hero />
        <h1 className="font-bold text-2xl mx-[11%] mt-8 mb-4 px-8 pt-8 border-t hidden md:block">
          Restaurants with online food delivery in Kolkata
        </h1>
        <h1 className="font-bold text-2xl sm:mx-[11%] mt-8 mb-4 px-8 pt-8 border-t md:hidden block">
          All Restaurants Nearby
        </h1>
        <SecondaryHeader />
        <Outlet />
        <Footer />
      </div>
    </RestaurantListContext.Provider>
  );
};

export default Layout;
