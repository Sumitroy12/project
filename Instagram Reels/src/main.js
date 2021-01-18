import React, { useState , useEffect } from "react";
import "./main.css";
import VideoCard from "./VideoCard";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";

function Main() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  const callback=()=>{
      console.log(sessionStorage.getItem("name"))
  }
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
        <div className="app_icon">
          <HomeOutlinedIcon fontSize="medium" />
          <SendIcon fontSize="medium" />
          <ExploreOutlinedIcon fontSize="medium" />
          <FavoriteBorderOutlinedIcon fontSize="medium" />
          <AccountCircleOutlinedIcon fontSize="medium" />

        </div>
      </div>
      {callback()}
      <div className="app_videos" id="video-container">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
