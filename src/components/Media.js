import React from "react";
import { useLoaderData } from "react-router-dom";
import AllPost from "./AllPost";

// const queryClient = new QueryClient();

const Media = () => {
  const allPost = useLoaderData();

  return (
    <div className="media-area">
      <div className="container">
        <h2 className="font-bold text-center py-5 my-6  text-4xl">
          All <span className="text-[#D53F8C]">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allPost?.map((posts) => (
            <AllPost key={posts?.id} posts={posts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
