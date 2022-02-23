import React from "react";
import "./styles.scss";

export default function About() {
  return (
    <div id="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img
          src={require("../../images/aboutPic.webp")}
          alt="A man playing Apex Legends."
        />
        <p>
          <span>Dedication</span> is a substantial part of how much success you
          have in this industry, and we’ve got it at <span>RCO-Esports.</span>{" "}
          Our team is <span>talented, committed and passionate</span> - the
          perfect combination for any eSports Team. We’re extremely grateful to
          our <span>supportive sponsors</span> and <span>fans</span> who make
          all of this <span>possible.</span> Keep browsing through our site to
          learn more.
        </p>
      </div>
    </div>
  );
}
