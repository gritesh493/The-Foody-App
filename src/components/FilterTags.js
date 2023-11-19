const FilterTags = () => {
  const items = [
    "Filter ",
    "SortBy ",
    "Fast Delivery",
    "Rating 4.0+",
    "Rs. 300-Rs. 600",
    "Less than Rs. 300",
  ];
  return (
    <div className="TagsContainer flex flex-wrap">
      {items.map((ele) => {
        return (
          <div
            className={
              ele +
              " min-w-fit my-1 mx-2 px-3 py-1 border-2 shadow-md rounded-3xl cursor-pointer contrast-70"
            }
            key={ele}
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
};

export default FilterTags;
