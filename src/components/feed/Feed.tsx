"use client";
import React, { useEffect, useState } from "react";
import Article from "../Articles/Article";
import { useSearchTextStore } from "../../../store/useSearchTextStore";

const Feed = ({ data }: { data: [] }) => {
  const [filteredpost, setFilteredPost] = useState([]);
  const { text }: any = useSearchTextStore();
  console.log(data);
  useEffect(() => {
    const filter = data.filter((post: any) => {
      return post.title.toLowerCase().includes(text.toLowerCase());
    });
    console.log("ss" + filter.length);
    if (filter.length > 0) {
      setFilteredPost(filter);
    } else {
      //   alert("No post found");
    }
    console.log(filteredpost);
  }, [text]);

  return (
    <div>
      {filteredpost.length > 0
        ? filteredpost.map((item: any) => (
            <Article key={item._id} props={...item} />
          ))
        : data?.map((item: any) => <Article key={item._id} props={...item} />)}
    </div>
  );
};

export default Feed;
