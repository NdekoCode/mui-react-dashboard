import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import "./topbar.scss";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Link className="logo">Lama Admin</Link>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="topbarImageContainer">
            <img src={avatar} alt="Avatar" className="topAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
