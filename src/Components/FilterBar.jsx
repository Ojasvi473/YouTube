import React from "react";
import "./FilterBar.css";
const FilterBar = () => {
  return (
    <div className="FilterBar">
      <ul>
        <li className="main">All</li>
        <li>Cricket</li>
        <li>Comedy</li>
        <li>Naruto</li>
        <li>Javascript</li>
        <li>Thrillers</li>
        <li>Trailer</li>
        <li>Netflix</li>
        <li>Games of Throne</li>
        <li>Football</li>
        <li>Hotstar</li>
        <li>Recently Uploaded</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default FilterBar;
