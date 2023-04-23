import React, { useState } from "react";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import Search from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import VideocamIcon from "@mui/icons-material/Videocam";
import "./Header.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header-left">
        <MenuOutlined
          style={{ fontSize: 28, marginBottom: "13px" }}
          className="header-icon"
        />
        <Link to="/">
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            className="header-logo"
          />
        </Link>
      </div>
      <div className="header-middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`} className="header-input-icon">
          <Search className="search-icon" />
        </Link>
      </div>
      {/* <KeyboardVoiceIcon /> */}

      <div className="header-right">
        <VideocamIcon style={{ fontSize: 28 }} className="header-icon" />
        <NotificationsIcon style={{ fontSize: 28 }} className="header-icon" />
        <AppsIcon style={{ fontSize: 28 }} className="header-icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
          className="header-avatar"
        />
      </div>
    </div>
  );
};

export default Header;
