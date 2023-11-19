import { useEffect, useState } from "react";
import { RESRAURANT_URL } from "../assets/constant";
// import { sampleData } from "../assets/constant";
import { getRestaurantList } from "../assets/utils";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Simmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState("");

  async function getRestaurants() {
    const apidata = await fetch(RESRAURANT_URL);
    const json = await apidata.json();
    setRestaurants(getRestaurantList(json));
    console.log(restaurants);
  }

  useEffect(() => {
    getRestaurants().catch((err) => {
      console.error(err);
    });
  }, []);

  // return restaurants != "" ? <Shimmer /> : <Shimmer />;
  return (
    (restaurants=="")?(<Shimmer/>):(
    <div className="RestaurantCardsContainer content-center grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 my-4 sm:mt-20 lg:my-4 mx-2 sm:mx-[11%]">
      {restaurants?.map((ele) => {
        return <RestaurantCard restaurantDetails={...ele?.info} key={ele?.info?.id}/>;
      })}
    </div>)
  );
};

export default Body;
