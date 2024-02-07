import React, { useEffect, useRef, useState } from "react";
import "../Styles/About.css";
import AboutImg from "../Images/AboutImg.svg";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { MdDownload } from "react-icons/md";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <div ref={ref} className="about" id="about">
      <motion.div
        animate={
          isVisible && { x: [100, 0], transition: { duration: 1, delay: 1 } }
        }
        className="aboutTitle1"
      >
        Get to know more
      </motion.div>
      <motion.h1
        animate={
          isVisible && { x: [100, 0], transition: { duration: 1, delay: 1 } }
        }
        className="aboutTitle2"
      >
        About <span>Me</span>
      </motion.h1>
      <div className="aboutContainer">
        <motion.div
          animate={
            isVisible && { x: [-100, 0], transition: { duration: 1, delay: 1 } }
          }
          className="aboutImage"
        >
          <img src={AboutImg} alt="" />
        </motion.div>
        <motion.div
          animate={
            isVisible && { x: [100, 0], transition: { duration: 1, delay: 1 } }
          }
          className="aboutContent"
        >
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
            <p>
              I'm doing my bachelor's from Dr. Akhilesh Das Gupta Institue of
              Professional Studies affiliated to GGSIPU, Delhi. I'm passionate
              about crafting seamless digital experiences through MongoDB,
              Express.js, React, and Node.js. I'm an eager learner, tech
              explorer, and future-focused creator in the making.
            </p>
            <button whileHover={{ scale: 1.1 }} className="AboutButton">
              <a href="https://drive.google.com/file/d/1buBspsogAuCqd-FMpvaWFCBhnGhYjmT_/view?usp=sharing" target="_blank">
                <p className="bannerButtonText">Resume</p>
              </a>
              <MdDownload className="downloadIcon" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
