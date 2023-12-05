import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";
import CartItemsContext from "../assets/Contexts/CartItemsContext";
import Shimmer from "./Simmer";
import CartButton from "./CartButton";

const RestaurantDetails = () => {
  const [aboutRestaurant, setAboutRestaurant] = useState([]);
  const params = useParams();
  const { restaurantList } = useContext(RestaurantListContext);
  const { setCartItems, cartItems } = useContext(CartItemsContext);

  useEffect(() => {
    const restaurant = restaurantList.filter((ele) => {
      return ele?.info?.id == params.id;
    });
    setAboutRestaurant(restaurant);
    console.log(restaurant);
  }, [params]);
  console.log(params.id);
  console.log(aboutRestaurant);
  const imageLink =
    aboutRestaurant.length != 0
      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${aboutRestaurant[0]?.info?.cloudinaryImageId}`
      : "";
  // const {}=aboutRestaurant

  //Search Params by itterating in restaurant list and display its data
  return aboutRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="RestaurantDetailsPage md:mx-[22%]">
      <div className="mt-4 mb-2 text-xs font-semibold text-slate-500">
        Home / Kolkata / {aboutRestaurant[0]?.info?.name}
      </div>

      <div className="RestaurantDetailsContainer ">
        <div className="topContainer border-dashed border-b p-2 m-2 flex flex-wrap justify-between">
          <div className="leftSection">
            <h1 className="mt-4 mb-2 text-lg font-bold text-slate-900">
              {aboutRestaurant[0]?.info?.name}
            </h1>
            <div className="text-sm  text-slate-500">
              {aboutRestaurant[0]?.info?.cuisines[0] &&
                aboutRestaurant[0]?.info?.cuisines[0] +
                  ", " +
                  aboutRestaurant[0]?.info?.cuisines[1] &&
                aboutRestaurant[0]?.info?.cuisines[1]}
            </div>
            <div className="text-sm  text-slate-500">
              {aboutRestaurant[0]?.info?.areaName + " "}

              {aboutRestaurant[0]?.info?.sla?.lastMileTravelString && (
                <span className="text-sm  text-slate-500 ">
                  {"| " + aboutRestaurant[0]?.info?.sla?.lastMileTravelString}
                </span>
              )}
            </div>
            <div className="text-sm ml-0 pl-0 m-2 p-2  text-slate-500 grayscale">
              {aboutRestaurant[0]?.info?.sla?.lastMileTravelString &&
                "Far " +
                  "(" +
                  aboutRestaurant[0]?.info?.sla?.lastMileTravelString +
                  ")  |  Additional delivery fee will apply"}
            </div>
          </div>
          <div className="rightSection border flex flex-col justify-evenly m-2 px-3 py-2 rounded-xl max-h-24 min-w-fit">
            <div className="text-center pb-1">
              {"⭐" + aboutRestaurant[0]?.info?.avgRating}
            </div>
            {aboutRestaurant[0]?.info?.totalRatingsString && (
              <div className="text-xs font-semibold border-t pt-2">
                {aboutRestaurant[0]?.info?.totalRatingsString + ""}
                <span className="text-xs font-semibold"> Rating</span>
              </div>
            )}
          </div>
        </div>

        <div className="middleContainer flex font-bold text-slate-800 mr-2 my-4 text-lg">
          <div className="mx-2 px-2">
            {aboutRestaurant[0]?.info?.sla?.slaString}
          </div>
          <div className="border-l pl-4 mx-2 px-2">
            {aboutRestaurant[0]?.info?.costForTwo}
          </div>
        </div>

        <div className="offerSection h-32 p-2 m-auto border-b px-[10%] py-5 bg-gradient-to-r from-white via-blue-50 to-slate-200 relative -top-[50%]">
          <div className=" border max-w-2xl rounded-xl h-full flex items-center justify-center bg-white bg-opacity-40">
            <div className=" m-auto text-center font-light ">
              Offers will be available soon !!!
            </div>
          </div>
        </div>
        <div className={" w-full h-80 p-2 m-2 mr-0 pr-0"}>
          <img
            src={imageLink}
            className="w-full h-full object-cover rounded-xl p-1"
            alt={" Restaurant Image"}
          />
        </div>
        <div className="bottomContainer">
          <div className="listContainer">
            {aboutRestaurant[0]?.info?.cuisines.map((ele) => {
              return (
                <div className="listItemContainer flex max-h-32 justify-between items-center m-2 p-2 border-b-2 mt-4">
                  <div className="itemInfo flex flex-col">
                    <h1 className="font-semibold text-lg">{ele}</h1>
                    <div className="font-normal ">
                      So Flavourful, So tastey, Just smelling like wow !!!
                    </div>
                    <div className="font-thin pt-2 text-sm ">
                      Put this in the cart now.
                    </div>
                  </div>

                  <div
                    className={ele + "Image" + " w-32 h-32 p-2 m-2 mr-0 pr-0"}
                  >
                    <img
                      src={imageLink}
                      key={
                        ele?.info?.name + " | " + ele?.info?.cloudinaryImageId
                      }
                      className="w-full h-full object-cover rounded-xl p-1"
                      alt={ele?.info?.name + " - Image"}
                    />
                    <div
                      className="AddtoCartButton inline shadow-lg border z-1 relative bg-white bg-opacity-90 -top-[25%] left-[20%] px-1 rounded-md cursor-pointer"
                      onClick={() =>
                        setCartItems([
                          ...cartItems,
                          {
                            restaurant: aboutRestaurant[0],
                            item: ele,
                            itemId:
                              restaurantList[0]?.info?.id +
                              Math.random().toString(36),
                            // ele +
                            // cartItems.length,
                          },
                        ])
                      }
                    >
                      AddItem
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CartButton />
    </div>
  );
};

export default RestaurantDetails;
