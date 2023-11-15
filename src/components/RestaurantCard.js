const RestaurantCard = ({ restaurantDetails }) => {
  return (
    <div className="card grid grid-rows-2 gap-3 p-1 max-h-96 hover:p-4 transition-all ease-in-out duration-100 cursor-pointer">
      <div className="RestaurantImageContainer max-w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantDetails?.cloudinaryImageId}`}
          key={restaurantDetails?.cloudinaryImageId}
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
      <div className="RestaurantDetailsContainer max-w-full overflow-hidden">
        <div className="Name font-bold text-gray-900 p-1 mx-1">
          {restaurantDetails?.name}
        </div>
        <span className="pl-2 font-medium">
          ⭐ {restaurantDetails?.avgRating}
        </span>
        <span className="border-l-2 font-medium mx-2 px-2">
          {restaurantDetails?.sla?.deliveryTime} mins
        </span>
        <div className="AreaName px-2 mx-2 mt-1">
          {restaurantDetails?.areaName}
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
  );
};
export default RestaurantCard;
