import { useEffect, useState } from "react";
import { RESRAURANT_URL } from "../assets/constant";
// import { sampleData } from "../assets/constant";
import { getRestaurantList } from "../assets/utils";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Simmer";
import { useContext } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";

const Body = () => {
  console.log("Body Rendered")
  const {restaurantList,loading,setLoading,updateRestaurantList}=useContext(RestaurantListContext);
  console.log(
    restaurantList.length == 0 ? "restaurantList is Empty - Shimmer Effect" : restaurantList
  );

  // const [restaurants, setRestaurants] = useState("");
  //   console.log(restaurants);

  // async function getRestaurants() {
  //   const apidata = await fetch(RESRAURANT_URL);
  //   const json = await apidata.json();
  //   setRestaurants(getRestaurantList(json));
  //   console.log(restaurants);
  // }

  useEffect(() => {
    setLoading(false)
  }, [restaurantList]);

  // return restaurants != "" ? <Shimmer /> : <Shimmer />;
  return (
    (restaurantList==""||loading)?(<Shimmer/>):(
    <div className="RestaurantCardsContainer content-center grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 my-4 sm:mt-20 lg:my-4 mx-2 sm:mx-[11%]">
      {restaurantList?.map((ele) => {
        return <RestaurantCard restaurantDetails={...ele?.info} key={ele?.info?.id}/>;
      })}
    </div>)
  );
};

export default Body;
