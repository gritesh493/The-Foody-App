export const getRestaurantList = (data) => {
  console.log(data);
  return data?.data?.cards?.filter((ele) => {
    return (
      ele?.card?.card?.gridElements?.infoWithStyle?.restaurants != undefined
    );
  })[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
};
