import { useContext, useState } from "react";
import RestaurantListContext from "../assets/Contexts/RestaurantListContext";
// import backIcon from "../assets/backIcon.png";

const Search = ({
  setSearchResults,
  setIsSearchFocused,
  setIsListFocused,
  setIsSearchBlurred,
  setIsItemClicked,
}) => {
  const [searchText, setSearchText] = useState("");
  const { restaurantList } = useContext(RestaurantListContext);

  function getFilteredData(value) {
    const list = restaurantList; //fetching the state of restaurantList from the context.
    const results = list.filter((restaurant) => {
      // console.log(restaurant);
      return (
        // restaurant &&
        // restaurant.info &&
        // restaurant.info.name &&
        value &&
        restaurant?.info?.name?.toLowerCase().includes(value.toLowerCase())
        // ||
        //   restaurant?.info?.cuisines.map((ele) =>
        //     ele.toLowerCase().includes(value.toLowerCase())
        //   )
      );
    });

    // console.log(results);
    setSearchResults(results);
    return results;
  }
  function handleChange(value) {
    setSearchText(value);
    const results = getFilteredData(value); //ideally the value must be passed to the backend, and this function should be async
    console.log(results);
  }

  const handleFocusChange = (event) => {
    console.log(event.type);
    // setIsListFocused(event.type === "focus"); //Not Necessary
    setIsSearchFocused(event.type === "focus");
    searchText && setIsListFocused(true); //Necessary - after mouseLeave, onFocus must reset the isListFocused to true.
    setIsSearchBlurred(false);
    // setIsSearchBlurred(!(event.type === "focus"));
  };

  return (
    <>
      <button
        className=" z-10 cursor-default flex justify-self-end items-center h-14 w-full max-w-[472px] rounded-xl text-lg focus-within:shadow-lg bg-slate-100  p-0 focus-within:bg-white"
        onMouseLeave={() => setIsListFocused(false)}
      >
        {/* <button
          className={
            isSearchFocused && isListFocused && !isSearchBlurred
              ? "show "
              : "hidden "
          }
          onClick={() => setIsListFocused(false)}
        >
          <img src={backIcon} className="h-6 mx-3 opacity-50"></img>
        </button> */}

        <input
          type="text"
          placeholder="Search for restaurant and food"
          className="w-full bg-inherit rounded-l-xl outline-none pl-8 h-full z-20 "
          value={searchText}
          onClick={() => {
            setIsItemClicked(true);
            searchText && setIsListFocused(true);
            setIsSearchFocused(true);
            setIsSearchBlurred(false);
          }}
          onChange={(e) => {
            setIsItemClicked(true);
            handleChange(e.target.value);
            setIsSearchFocused(true);
            setIsListFocused(true); //Necessary - after mouseLeave, onChange must reset the isListFocused to true.
            setIsSearchBlurred(false);
            e.currentTarget.className = e.currentTarget.className + " -z-10";
          }}
          onFocus={handleFocusChange}
          onBlur={() => {
            setIsSearchBlurred(true);
            setIsSearchFocused(true);
          }}
        ></input>
        <button className="Search h-full p-3 rounded-r-xl pointer-events-none bg-inherit overflow-hidden">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            aria-hidden="true"
            strokeColor="rgba(2, 6, 12, 0.6)"
            fillColor="rgba(2, 6, 12, 0.6)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0998 8.84232C13.0998 11.7418 10.7493 14.0922 7.84989 14.0922C4.95046 14.0922 2.6 11.7418 2.6 8.84232C2.6 5.94289 4.95046 3.59243 7.84989 3.59243C10.7493 3.59243 13.0998 5.94289 13.0998 8.84232ZM12.1431 14.1802C10.9686 15.1261 9.47534 15.6922 7.84989 15.6922C4.0668 15.6922 1 12.6254 1 8.84232C1 5.05923 4.0668 1.99243 7.84989 1.99243C11.633 1.99243 14.6998 5.05923 14.6998 8.84232C14.6998 10.4974 14.1128 12.0153 13.1357 13.1993L18.319 17.9606C18.7226 18.3313 18.7359 18.9637 18.3483 19.3511C17.9634 19.7357 17.3365 19.7254 16.9645 19.3282L12.1431 14.1802Z"
              fill="rgba(2, 6, 12, 0.6)"
              fill-opacity="0.92"
            ></path>
          </svg>
        </button>
      </button>
      {/*  */}
    </>
  );
};

export default Search;
