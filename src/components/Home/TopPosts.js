import React, { useEffect, useState } from "react";
import AllPost from "../AllPost";

const TopPosts = () => {
  const [topPosts, setTopPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setTopPosts(data);
      });
  }, []);

  return (
    <div className="media-area">
      <div className="container">
        <h2 className="font-bold text-center py-5 my-6  text-4xl">
          Special <span className="text-[#D53F8C]">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topPosts.slice(0, 3)?.map((posts) => (
            <AllPost key={posts.id} posts={posts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
