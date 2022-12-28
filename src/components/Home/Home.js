import React from "react";
import AddPost from "./AddPost";
import TopPosts from "./TopPosts";

const Home = () => {
  return (
    <div className="container">
      <AddPost />
      <TopPosts/>
    </div>
  );
};

export default Home;
