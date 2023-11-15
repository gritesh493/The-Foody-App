import { getRestaurantList } from "../assets/utils";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  console.log(getRestaurantList);
  return (
    <div className="RestaurantCardsContainer content-center grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 my-4 sm:mt-20 lg:my-4 mx-[11%]">
      {getRestaurantList.map((ele) => {
        return <RestaurantCard restaurantDetails={...ele?.info} key={ele?.info?.id}/>;
      })}
    </div>
  );
};

export default Body;
