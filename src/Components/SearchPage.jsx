import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import ChannelVideo from "./ChannelVideo";
import "./SearchPage.css";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AGIKgqOD8nQtlP5ytSFAjmiOvDb9VC1WYYhBB3nSsduWKQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="T-Series"
        verified
        subs="160M"
        noOfVideos={(14, 780)}
        description="Music can change the world.T-series is India"
      />
      <hr />
      <h5>Latest from T-Series</h5>
      <ChannelVideo
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojKd2q7V4DbFHK1I-OP3QWsVM2VIOqYuDIQ&usqp=CAU"
        title="Sawan Mein Lag Gyi.Ginny weds Sunny "
        views="50M"
        timestamp="1 month ago"
        description="The official party anthem of list of songs"
      />
    </div>
  );
};

export default SearchPage;
