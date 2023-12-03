import { useEffect, useState } from "react";
// import { RESRAURANT_URL } from "../assets/constant";
// // import { sampleData } from "../assets/constant";
// import { getRestaurantList } from "../assets/utils";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Simmer";
import { useContext, useState } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";
import Hero from "./Hero";
import SecondaryHeader from "./SecondaryHeader";

const Body = () => {
  console.log("Body Rendered")
  const {restaurantList,loading,setLoading}=useContext(RestaurantListContext);
  const [restaurants,setRestaurants]=useState(restaurantList);
  console.log(
    restaurantList.length == 0 ? "restaurantList is Empty - Shimmer Effect" : restaurantList
  );
  console.log(
    restaurants.length == 0 ? "filteredRestaurants is Empty - Shimmer Effect" : restaurants
  );

  //filter section----------------------
  const [tag, setTag] = useState("");

  const filterRestaurants = (ele) => {
    if (ele == "All") {
      console.log("All tag");
      const filteredRestaurant = restaurantList;
      setRestaurants(filteredRestaurant);
    } else if (ele == "Rating 4.0+") {
      const filteredRestaurant = restaurantList.filter((restaurant) => {
        return restaurant?.info?.avgRating >= 4.0;
      });
      setRestaurants(filteredRestaurant);
    } else if (ele == "Fast Delivery") {
      const filteredRestaurant = restaurantList.filter((restaurant) => {
        return restaurant?.info?.sla?.deliveryTime <= 30;
      });
      setRestaurants(filteredRestaurant);
    }
    else if (ele == "Rs. 300-Rs. 600") {
      const filteredRestaurant = restaurantList.filter((restaurant) => {
        const str = restaurant?.info?.costForTwo;
        const number = str.match(/\d+/g);
        return number>=300 &&number<=600
      });
      setRestaurants(filteredRestaurant);
    }
    else if (ele == "Less than Rs. 300") {
      const filteredRestaurant = restaurantList.filter((restaurant) => {
        const str = restaurant?.info?.costForTwo;
        const number = str.match(/\d+/g);
        return number<=300
      });
      setRestaurants(filteredRestaurant);
    }
  };


  useEffect(() => {
    if (tag == "") {
      console.log("Tag Empty => All");
      const filteredRestaurant = restaurantList;
      setRestaurants(filteredRestaurant);
    }
    filterRestaurants(tag);
    
  },[tag]);
  return (<>
  <Hero/>
  <h1 className="font-bold text-2xl mx-[11%] mt-8 mb-4 px-8 pt-8 border-t hidden md:block">
          Restaurants with online food delivery in Kolkata
        </h1>
        <h1 className="font-bold text-2xl sm:mx-[11%] mt-8 mb-4 px-8 pt-8 border-t md:hidden block">
          All Restaurants Nearby
        </h1>
        <SecondaryHeader setRestaurants={setRestaurants} tag={tag} setTag={setTag}/>

    {(restaurants==""||loading)?(<Shimmer/>):(
    <div className="RestaurantCardsContainer content-center grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 my-4 sm:mt-20 lg:my-4 mx-2 sm:mx-[11%]">
      {restaurants?.map((ele) => {
        return <RestaurantCard restaurantDetails={...ele?.info} key={ele?.info?.id}/>;
      })}
    </div>)}
    </>
  );
};

export default Body;
