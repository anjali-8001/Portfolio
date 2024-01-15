import React, { useEffect, useRef, useState } from "react";
import "../Styles/Skills.css";
import c from "../Images/c++.svg";
import html5 from "../Images/html5.svg";
import css3 from "../Images/css3.svg";
import reactjs from "../Images/reactjs.svg";
import nodejs from "../Images/nodejs.svg";
import expressjs from "../Images/express.svg";
import mongodb from "../Images/mongodb.svg";
import vscode from "../Images/vscode.svg";
import git from "../Images/github2.svg";
import bootstrap from "../Images/bootstrap.svg";
import javascript from "../Images/javascript.svg";
import git2 from "../Images/git.svg";
import { motion, useInView } from "framer-motion";

function Skills() {
  const ref = useRef();
  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  const skillsVariants = {
    showSkills: {
      opacity: 1,
      scale: [0.8, 1.1],
      transition: { duration: 0.2, staggerChildren: 0.1 },
    },
    hideSkills: {
      opacity: 0,
    },
  };
  return (
    <div className="skills" id="skills">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={
          isVisible && {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }
        }
        className="skillsHeading"
      >
        My <p>Skills</p>
      </motion.div>
      <motion.div
        variants={skillsVariants}
        initial="hideSkills"
        animate={isVisible && "showSkills"}
        className="skillsContainer"
      >
        <motion.div variants={skillsVariants} className="item">
          <img src={c} alt="" />
        </motion.div>
        <motion.div variants={skillsVariants} className="item">
          <img src={html5} alt="" />
        </motion.div>
        <motion.div variants={skillsVariants} className="item">
          <img src={css3} alt="" />
        </motion.div>
        <motion.div variants={skillsVariants} className="item">
          <img src={reactjs} alt="" />
        </motion.div>

        <motion.div variants={skillsVariants} className="item">
          <img src={javascript} alt="" />
        </motion.div>

        <motion.div variants={skillsVariants} className="item">
          <img src={nodejs} alt="" />
        </motion.div>
        <motion.div variants={skillsVariants} className="item">
          <img src={expressjs} alt="" />
        </motion.div>

        <motion.div variants={skillsVariants} className="item">
          <img src={mongodb} alt="" />
        </motion.div>

        <motion.div variants={skillsVariants} className="item">
          <img src={vscode} alt="" />
        </motion.div>

        <motion.div variants={skillsVariants} className="item">
          <img src={git} alt="" />
        </motion.div>
        <motion.div variants={skillsVariants} className="item">
          <img src={bootstrap} alt="" />
        </motion.div>
        <motion.div variants={skillsVariants} className="item">
          <img src={git2} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
