import React from "react";
import "./styles.scss";

import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <a href="twitter.com" target="_blank">
          <TwitterIcon fontSize="large" />
        </a>
        <a href="http://youtube.com" target="_blank">
          <YouTubeIcon fontSize="large" />
        </a>
        <a href="instagram.com" target="_blank">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="facebook.com" target="_blank">
          <FacebookIcon fontSize="large" />
        </a>
      </div>
      <span>
        This site was created by{" "}
        <a href="https://bperez4197-personalsite.netlify.app/">Bryce Perez</a>
      </span>
    </footer>
  );
}
