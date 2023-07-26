import Search from "@/Icons/Search";
import React from "react";
import { useSearchTextStore } from "../../../store/useSearchTextStore";

const SearchBar = () => {
  const { text, setText }: any = useSearchTextStore();
  const onSearchTextChange = (e: any) => {
  
    setText(e.target.value);
  };

 
  return (
    <div className="  flex border border-black rounded-2xl p-1 items-center w-44">
      <input
        type="text"
        className=" rounded-2xl p-1 w-full text-sm  outline-none"
        placeholder="Search...."
        onChange={onSearchTextChange}
      />
      <Search />
    </div>
  );
};

export default SearchBar;
