import { data } from "./constant";

export const getRestaurantList = data?.data?.cards?.filter((ele) => {
  return ele?.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined;
})[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
