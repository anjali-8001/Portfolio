import React, { useEffect, useState } from "react";
import "../Styles/Banner.css";
import bannerImage from "../Images/bannerImg.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
      x: -50,
    },
  };

  const imageAnimation = {
    increase: {
      scale: [1, 1.1],
      opacity: 1,
      transition: {
        duration: 1.5,
        // repeatType: "mirror",
        // repeat: Infinity,
      },
    },
  };

  return (
    <div className="banner">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="bannerIntro"
      >
        <motion.p variants={variants} className="bannerHeading">
          <span>Hey, I'm</span>
          <br /> Anjali Sharma!
        </motion.p>
        <motion.p variants={variants} className="bannerContent1">
          I'm a //text.
        </motion.p>
        <motion.p variants={variants} className="bannerContent2">
         I'm a final-year Computer Science student pursuing my B.Tech. I'm deeply passionate about the ever-evolving world of technology. With an insatiable curiosity for innovation, I'm constantly exploring the latest trends and advancements in the digital realm. 
        </motion.p>
        <motion.button
          variants={variants}
          whileHover={{ scale: 1.1 }}
          className="bannerButton"
        >
          <a href="https://www.linkedin.com/in/anjali-sharma-4086831b9/" target="_blank">
            <p className="bannerButtonText">Let's Connect</p>
          </a>

          <AiOutlineArrowRight
            // whileTap={{ x: -100 }}
            className="bannerButtonArrow"
          />
        </motion.button>
      </motion.div>
      <motion.div className="bannerImage">
        <motion.img
          variants={imageAnimation}
          whileInView="increase"
          src={bannerImage}
          alt="Banner Image"
        />
      </motion.div>
    </div>
  );
}

export default Banner;
