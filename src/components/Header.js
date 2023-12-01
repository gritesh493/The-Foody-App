import { useRef, useState } from "react";
import logo from "../assets/logo.png";
import locationPin from "../assets/marker.svg";
import login from "../assets/user.svg";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";
const Header = () => {
  // const [searchList,setSearchList]=useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isListFocused, setIsListFocused] = useState(false);
  const [isSearchBlurred, setIsSearchBlurred] = useState(true);
  const [isItemClicked, setIsItemClicked] = useState(true);

  console.log("Header Rendered");
  return (
    <>
      <div className="Header w-full flex items-center h-20 border-b border-gray-200 shadow-xl align-middle px-[11%] sticky top-0 bg-white z-10">
        <div className="HeaderIconContainer justify-center min-w-fit hidden sm:flex">
          <Link to="/">
            <img
              className="HeaderIcon w-40 h-full m-auto border-r-1 mr-3"
              src={logo}
              alt="Logo"
            ></img>
          </Link>
        </div>

        <div className="HeaderLocationContainer flex min-w-fit mr-5 pl-5 py-1 border-l-2">
          <img className="LocationPin w-6 h-6 opacity-30" src={locationPin} />
          <h1 className="font-medium text-md mx-1 opacity-80 via-slate-800">
            Kolkata, West Bengal, India
          </h1>
        </div>

        <div className="HeaderTagsComponent hidden">
          Filter, Sort, etc. (Will be updated later!!!)
        </div>

        <div className="focus:bg-white HeaderSearchBarContainer items-center grow min-w-[360px] h-14 my-3 hidden sm:absolute sm:flex sm:items-center sm:justify-center md:justify-end sm:top-20 lg:top-0 lg:relative focus-within:bg-white">
          <Search
            setSearchResults={setSearchResults}
            setIsSearchFocused={setIsSearchFocused}
            setIsListFocused={setIsListFocused}
            setIsSearchBlurred={setIsSearchBlurred}
            setIsItemClicked={setIsItemClicked}
            isSearchFocused={isSearchFocused}
            isListFocused={isListFocused}
            isSearchBlurred={isSearchBlurred}
            isItemClicked={isItemClicked}
          />
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            isSearchFocused={isSearchFocused}
            setIsSearchFocused={setIsSearchFocused}
            isListFocused={isListFocused}
            setIsListFocused={setIsListFocused}
            isSearchBlurred={isSearchBlurred}
            setIsSearchBlurred={setIsSearchBlurred}
            isItemClicked={isItemClicked}
            setIsItemClicked={setIsItemClicked}
          />
        </div>

        <div className="HeaderLoginContainer ml-2 sm:ml-8 mr-4 flex w-full lg:w-auto justify-end invert">
          <img
            src={login}
            className="w-12 h-12 min-w-[48px] opacity-80 rounded-full bg-slate-100 border-4 border-slate-200 justify-self-end"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
