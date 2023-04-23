import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { SubscriptionsSharp } from "@mui/icons-material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow selected Icon={WhatshotIcon} title="Trending" />
      <SidebarRow selected Icon={SubscriptionsSharp} title="Subscription" />
      <hr />
      <SidebarRow selected Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow selected Icon={HistoryIcon} title="History" />
      <SidebarRow selected Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow selected Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow selected Icon={ThumbUpAltOutlinedIcon} title="Liked Video" />
      <SidebarRow selected Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
      <SidebarRow selected Icon={SettingsIcon} title="Settings" />
      <SidebarRow selected Icon={FlagIcon} title="Report History" />
      <SidebarRow selected Icon={HelpIcon} title="Help" />
      <SidebarRow selected Icon={FeedbackIcon} title="Send Feedback" />
      <hr />
      <div className="sidebar-creator">
        <h4>CREATED BY</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore odit
          hic corporis autem sit animi architecto doloribus accusantium iure
          dolores!
        </p>
        <div className="sidebar-avatar">
          <Avatar src="https://static.vecteezy.com/system/resources/previews/008/909/434/original/ebs-logo-ebs-letter-ebs-letter-logo-design-initials-ebs-logo-linked-with-circle-and-uppercase-monogram-logo-ebs-typography-for-technology-business-and-real-estate-brand-vector.jpg" />
          <h5>
            EBS Coding
            <br />
            2023
          </h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis
          quis nemo, quibusdam error quaerat.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
