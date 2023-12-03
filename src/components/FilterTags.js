import { useContext, useEffect, useState } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";

const FilterTags = ({ setTag }) => {
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

  return (
    <div className="TagsContainer flex flex-wrap">
      {allTags.map((ele) => {
        return (
          <div
            className={
              ele +
              " min-w-fit my-1 mx-2 px-3 py-1 border-2 shadow-md rounded-3xl cursor-pointer contrast-70"
            }
            key={ele}
            onClick={() => {
              setTag(ele);
            }}
          >
            {ele}
          </div>
        );
      })}
    </div>
  );
};

export default FilterTags;
