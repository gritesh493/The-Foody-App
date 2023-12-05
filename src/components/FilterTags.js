import { useContext, useEffect, useState } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";

const FilterTags = ({ setTag, tag }) => {
  console.log("Filter Tags rendered");

  const allTags = [
    // "Filter ",
    // "SortBy ",
    "All",
    "Rating 4.0+",
    "Fast Delivery",
    "Rs. 300-Rs. 600",
    "Less than Rs. 300",
  ];
  // console.log(tag);
  return (
    <div className="TagsContainer flex flex-wrap">
      {allTags.map((ele) => {
        // console.log(ele);
        return (
          <button
            className={
              tag == ele
                ? "min-w-fit my-1 mx-2 px-3 py-1 border-2 shadow-md rounded-3xl cursor-pointer contrast-70 transition-all hover:scale-110 border-[#F29863] "
                : "min-w-fit my-1 mx-2 px-3 py-1 border-2 shadow-md rounded-3xl cursor-pointer contrast-70 transition-all hover:scale-110" +
                  " min-w-fit my-1 mx-2 px-3 py-1 border-2 shadow-md rounded-3xl cursor-pointer contrast-70 transition-all hover:scale-110"
            }
            key={ele}
            onClick={() => {
              setTag(ele);
            }}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTags;
