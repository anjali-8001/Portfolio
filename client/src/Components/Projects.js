import React, { useEffect, useRef, useState } from "react";
import "../Styles/Projects.css";
import projectTitleImage from "../Images/ProjectTitle.avif";
import { motion, useInView } from "framer-motion";
import project1img from "../Images/Project1img.png";
import project2img from "../Images/project2img.png";
import project3img from "../Images/project3img.png";
import project4img from "../Images/project4img.png";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref);
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      console.log(isInView);

      console.log(isVisible);
    }
  }, [isInView, isVisible]);

  const projectsVariants = {
    show: {
      opacity: 1,
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="projects">
      <motion.div className="projectsTextContainer">
        <p className="p">
          I wish to use my technical knowledge <br />
          to create a positive impact.
        </p>
        <hr className="hr" />
      </motion.div>
      <motion.div
        ref={ref}
        animate={
          isVisible && {
            x: [-100, 0],
            transition: { duration: 1 },
          }
        }
        className="projectsTitleContainer"
      >
        <div className="projectsTitle1">
          <img src={projectTitleImage} alt="image" />
          <h1>
            <b>Projects</b>
          </h1>
        </div>
        <div className="projectsTitle2">
          <h1>
            I've <b>Worked</b> On
          </h1>
          <a href="https://github.com/anjali-8001" target="_blank">
            <button>All Projects</button>
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={projectsVariants}
        initial="hidden"
        animate={isVisible && "show"}
        className="projectsBoxContainer"
      >
        <motion.div
          variants={projectsVariants}
          whileHover={{ scale: 1.1 }}
          className="projectsBox"
        >
          <h1>Doctor Appointment Web App</h1>
          <div className="project">
            <img src={project1img}></img>
            <div className="hiddenTech"></div>
          </div>
          <div className="projectLinks">
            <a
              className="firstLink"
              href="https://github.com/anjali-8001/doctor-appoint"
              target="_blank"
            >
              Code
            </a>
            <a href="https://doctor-appoint-h13l.onrender.com" target="_blank">
              Website
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={projectsVariants}
          whileHover={{ scale: 1.1 }}
          className="projectsBox "
        >
          <h1>Amazon Clone</h1>
          <div className="project">
            <img src={project2img}></img>
          </div>
          <div className="projectLinks">
            <a
              className="firstLink"
              href="https://github.com/anjali-8001/amazon-clone"
              target="_blank"
            >
              Code
            </a>
            <a
              href="https://tangerine-biscochitos-3d30d6.netlify.app/"
              target="_blank"
            >
              Website
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={projectsVariants}
          whileHover={{ scale: 1.1 }}
          className="projectsBox"
        >
          <h1>Pothole Detection Web App</h1>
          <div className="project">
            <img src={project3img}></img>
          </div>
          <div className="projectLinks">
            <a
              className="firstLink"
              href="https://github.com/DevanshSahni/Pothole-Detection"
              target="_blank"
            >
              Code
            </a>
            <a
              href="https://github.com/DevanshSahni/Pothole-Detection"
              target="_blank"
            >
              Website
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={projectsVariants}
          whileHover={{ scale: 1.1 }}
          className="projectsBox"
        >
          <h1>Portfolio Website</h1>
          <div className="project">
            <img src={project4img}></img>
          </div>
          <div className="projectLinks">
            <a
              className="firstLink"
              href="ithub.com/anjali-8001/Portfolio/"
              target="_blank"
            >
              Code
            </a>
            <a href="" target="_blank">
              Website
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
