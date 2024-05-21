import React from "react";
import profilephoto from "../ProfilePictureV1.png";
import "./About.css";
import MessageBox from "../dialogBoxV2.png";
import AboutMe from "./AboutMe";
export default function About() {
  return (
    <div className="about-container">
      <div className="row">
        <div className="col-1">
          <div className="about-left">
          <AboutMe></AboutMe>  
          </div>
        </div>
        <div className="col-2">
        <img
              src={profilephoto}
              alt="Profile Photo"
              className="profile-photo"
            />
        </div>
      </div>
    </div>
  );
}
