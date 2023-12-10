import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isListFocused, setIsListFocused] = useState(false);
  const [isSearchBlurred, setIsSearchBlurred] = useState(true);
  const [isItemClicked, setIsItemClicked] = useState(true);
  return (
    <div className="focus:bg-white SearchBarContainer items-center grow min-w-[240px] h-[75vh] my-3 flex flex-col focus-within:bg-white pt-4">
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
      <div className="top-[12%] absolute items-center grow min-w-full my-3 flex flex-col justify-center">
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
    </div>
  );
};

export default SearchPage;
