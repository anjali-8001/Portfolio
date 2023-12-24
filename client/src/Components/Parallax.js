import React, { useRef } from "react";
import "../Styles/Parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }} className="parallaxHeading">
        What I Know?
      </motion.h1>
      <motion.div className="parallaxMountains"></motion.div>
      <motion.div
        style={{ x: yBg}}
        className="parallaxStars"
      ></motion.div>
    </motion.div>
  );
}

export default Parallax;
