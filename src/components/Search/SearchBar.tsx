import Search from "@/Icons/Search";
import React from "react";

const SearchBar = () => {
  return (
    <div className="border border-black rounded-2xl p-1 flex items-center w-44">
      <input type="text" className=" rounded-2xl p-1 w-full text-sm  outline-none" placeholder="Search...." />
      <Search />
    </div>
  );
};

export default SearchBar;
