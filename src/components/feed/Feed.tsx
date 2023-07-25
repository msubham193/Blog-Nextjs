"use client";
import React, { useEffect, useState } from "react";
import Article from "../Articles/Article";
import { useSearchTextStore } from "../../../store/useSearchTextStore";

const Feed = ({ data }: { data: [] }) => {
  const [filteredpost, setFilteredPost] = useState([]);
  const { text }: any = useSearchTextStore();
 
  useEffect(() => {
    const filter = data?.filter((post: any) => {
      return post.title.toLowerCase().includes(text.toLowerCase());
    });

    if (filter?.length > 0) {
      setFilteredPost(filter);
    } else {
     
    }
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
