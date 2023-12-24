import React from "react";
import "../Styles/Test.css";
import { motion } from "framer-motion";

function Test() {
  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 1 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="test">
      <motion.div
        className="box"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {items.map((item) => (
          <motion.div variants={variants} key={item}>
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Test;
