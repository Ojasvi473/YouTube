import React from "react";
import NewsItem from "./NewsItem";
import "./News.css";
const News = () => {
  return (
    <div className="news">
      <NewsItem
        logoImage="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
        name="Excel Movies"
        timestamp="8 hours ago"
        image="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
        desc="  Ek hi baar kahenge inse panga na le #Mirjapur"
        like="31k"
        comment="213"
      />
      <NewsItem
        logoImage="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
        name="Excel Movies"
        timestamp="8 hours ago"
        image="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
        desc="  Ek hi baar kahenge inse panga na le #Mirjapur"
        like="31k"
        comment="213"
      />
      <NewsItem
        logoImage="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
        name="Excel Movies"
        timestamp="8 hours ago"
        image="https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
        desc="  Ek hi baar kahenge inse panga na le #Mirjapur"
        like="31k"
        comment="213"
      />
    </div>
  );
};

export default News;
