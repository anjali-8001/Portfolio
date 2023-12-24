import React from "react";
import "../Styles/About.css";
import AboutImg from "../Images/AboutImg.svg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutTitle1">Get to know more</div>
      <h1 className="aboutTitle2">About <span>Me</span></h1>
      <div className="aboutContainer">
        <div className="aboutImage">
          <img src={AboutImg} alt="" />
        </div>
        <div className="aboutContent">
          <div className="aboutContent1">
            <div className="subContent">
              <HiOutlineBadgeCheck className="img1" />
              <h2>Experience</h2>
              <p>Fresher</p>
              <p>MERN Stack Developer</p>
            </div>
            <div className="subContent">
              <CiUser className="img2" />
              <h2>Education</h2>
              <p>BTech</p>
              <p>Computer Science & Engineering</p>
            </div>
          </div>
          <div className="aboutContent2">
            I'm doing my bachelor's from Dr. Akhilesh Das Gupta Institue of Professional Studies affiliated to GGSIPU, Delhi. Passionate about crafting seamless digital experiences through MongoDB, Express.js, React, and Node.js. Eager learner, tech explorer, and future-focused creator in the making.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
