import marker from "../assets/marker.svg";
import { Link } from "react-router-dom";
const RestaurantCard = ({ restaurantDetails }) => {
  return (
    <Link to={"/restaurant/" + restaurantDetails?.id}>
      <div className="card grid grid-cols-2 grid-rows-1 sm:grid-rows-2 sm:grid-cols-1 gap-3 p-1 md:max-h-96 hover:p-4 transition-all ease-in-out duration-100 cursor-pointer">
        <div className="RestaurantImageContainer max-w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantDetails?.cloudinaryImageId}`}
            key={restaurantDetails?.cloudinaryImageId}
            className="w-full h-full object-cover rounded-lg "
            alt={restaurantDetails?.name}
          />
        </div>
        <div className="RestaurantDetailsContainer max-w-full overflow-hidden">
          <div className="Name font-bold text-gray-900 p-1 mx-1">
            {restaurantDetails?.name}
          </div>
          <span className="pl-2 font-medium">
            ⭐ {restaurantDetails?.avgRating}
          </span>
          <span className="border-l-2 font-medium mx-2 px-2 inline-block">
            {restaurantDetails?.sla?.deliveryTime} mins
          </span>
          <div className="AreaName px-2 mx-2 mt-1">
            {restaurantDetails?.areaName}
            <img
              className="w-3 h-3 opacity-70 inline mx-1"
              src={marker}
              alt=""
            ></img>
          </div>

          <div className="TagsContainer p-1 mx-1 mb-1 mt-0 max-w-full">
            {restaurantDetails?.cuisines.map((ele) => (
              <div
                className="Tags border rounded-2xl px-1 m-1 min-w-fit inline-flex"
                key={restaurantDetails?.id + ele}
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RestaurantCard;
