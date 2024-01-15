import React from "react";
import "../Styles/PreLoader.css";
import { motion } from "framer-motion";

function PreLoader() {
  const loaderVariants = {
    showLoader: {
      opacity: 1,
      transition: { staggerChildren: 1 },
    },
    hideLoader: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={loaderVariants}
      initial="hideLoader"
      animate="showLoader"
      className="preloader"
    >
      <motion.span variants={loaderVariants}>Develop ,</motion.span>{" "}
      <motion.span variants={loaderVariants}>Unmask ,</motion.span>{" "}
      <motion.span variants={loaderVariants}>Shine</motion.span>
    </motion.div>
  );
}

export default PreLoader;
