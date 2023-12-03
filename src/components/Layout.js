import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";
import { getRestaurantList } from "../assets/utils";
import { RESRAURANT_URL, sampleData } from "../assets/constant.js";

const Layout = () => {
  console.log("Layout Rendered");
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(
    restaurantList.length == 0 ? "restaurantList is Empty" : restaurantList
  );

  async function updateRestaurantList() {
    setLoading(true);
    let apidata;
    try {
      const response = await fetch(RESRAURANT_URL);
      if (response.ok) {
        apidata = await response.json();
        // Use apidata for further processing
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
      apidata = sampleData; // Use the sample data object in case of fetch failure
    }
    const fetchedRestaurantList = await getRestaurantList(apidata);
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
        {/* <button onClick={() => updateRestaurantList()}>update</button> */}
        <Header updateRestaurantList={updateRestaurantList} />
        <Outlet />
        <Footer />
      </div>
    </RestaurantListContext.Provider>
  );
};

export default Layout;
