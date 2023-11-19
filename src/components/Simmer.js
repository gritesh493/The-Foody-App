const Shimmer = () => {
  return (
    <div className="RestaurantCardsContainer content-center grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 my-4 sm:mt-20 lg:my-4 mx-2 sm:mx-[11%]">
      {[...Array(12)].map((ele) => {
        return (
          <div className="Tags border bg-gray-200 rounded-2xl px-1 m-1 min-w-fit inline-flex mb-20 animate-pulse">
            <div className="h-40 min-w-8"></div>
          </div>
        );
      })}
    </div>
  );
};
export default Shimmer;
