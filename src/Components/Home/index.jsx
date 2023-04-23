import React from "react";
import RecommendedVideos from "../RecommendedVideos";
import Sidebar from "../Sidebar";
const Home = () => {
  return (
    <div className="d-flex" style={{ display: "flex" }}>
      <Sidebar />
      <div
        className="d-flex"
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default Home;
