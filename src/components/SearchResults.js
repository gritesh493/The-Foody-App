// import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({
  searchResults,
  isSearchFocused,
  isListFocused,
  setIsListFocused,
  isSearchBlurred,
  setIsSearchBlurred,
  setIsSearchFocused,
  isItemClicked,
  setIsItemClicked,
}) => {
  const navigate = useNavigate();

  console.log("isSearchFocused - " + isSearchFocused);
  console.log("isListFocused - " + isListFocused);
  console.log("isSearchBlurred - " + isSearchBlurred);
  console.log("isItemClicked - " + isItemClicked);

  function handleClick(id) {
    // setIsSearchBlurred(false);
    console.log(id);
    navigate(id);
    // setIsListFocused(false);
  }
  const handleMouseLeave = (event) => {
    console.log(event.type);
    setIsListFocused(false);
    setIsItemClicked(false);
  };
  const handleMouseOver = (event) => {
    console.log(event.type);
    console.log("isSearchFocused - " + isSearchFocused);
    console.log("isListFocused - " + isListFocused);
    console.log("isSearchBlurred - " + isSearchBlurred);
    console.log("isItemClicked - " + isItemClicked);
    setIsItemClicked(true);
    setIsSearchBlurred(false);
    setIsSearchFocused(true);
    setIsListFocused(true);
  };

  return (
    <div
      className={
        (isSearchFocused && isListFocused && (!isSearchBlurred || isItemClicked)
          ? "show "
          : "hidden ") +
        (searchResults.length == 0 ? "-z-10 " : "z-10 ") +
        "pb-2 pt-1 max-h-[80vh]  overflow-y-auto overscroll-contain border-t-0 absolute top-10  flex-col justify-self-end pl-8 w-full max-w-[472px] rounded-b-xl text-lg drop-shadow-xl bg-white p-2 transition-all"
      }
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      {searchResults.map((ele) => {
        // console.log(ele?.info?.name);
        console.log("/restaurant/" + ele?.info?.id);
        return (
          <div
            key={ele?.info?.name}
            className={`min-h-36 max-h-36 hover:bg-slate-200 rounded-md cursor-pointer py-1 px-2 mr-[11%] transition-all flex items-center overflow-hidden`}
            onClick={() => {
              // console.log(clickedInside);
              setIsListFocused(true);
              // setIsItemClicked(true);
              handleClick("/restaurant/" + ele?.info?.id);

              setIsSearchFocused(true);
              setIsSearchBlurred(false);
              setIsListFocused(false);
              setIsItemClicked(false);
            }}
          >
            <div className="h-16 m-1 w-16 content-center">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${ele?.info?.cloudinaryImageId}`}
                key={ele?.info?.name + " - " + ele?.info?.cloudinaryImageId}
                className="w-full h-full object-cover rounded-lg "
                alt={ele?.info?.name + " - Image"}
              />
            </div>
            <div className=" font-bold text-slate-800 ml-2 pl-2">
              {ele?.info?.name}
              <div className=" font-normal text-sm ml-1 pl-2">
                {ele?.info?.cuisines[0] && ele?.info?.cuisines[0]}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
