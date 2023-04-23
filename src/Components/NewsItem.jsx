import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import "./NewsItem.css";
const NewsItem = ({
  logoImage,
  name,
  timestamp,
  image,
  desc,
  like,
  comment,
}) => {
  return (
    <div className="newsItem">
      <div className="newsTop">
        <Avatar src={logoImage} className="newsLogo" />
        <h6>
          {name}.{timestamp}
        </h6>
        <div className="newsMiddle">
          <p>{desc}</p>
          <img src={image} />
        </div>
        <div className="newsBottom">
          <div className="newsBottom_1">
            <ThumbUpAltIcon className="news-logo" />
            {like}
            <ThumbDownIcon className="news-logo" />
          </div>

          <div>
            <MessageIcon className="news_logo" />
            {comment}
            <MoreVertIcon className="news_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
