import React, { useState } from "react";
import "../Styles/Sidebar.css";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 25px 25px)",
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linksVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkItemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const sidebarItems = ["Home", "Skills", "About", "Projects", "Contact"];

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <motion.div className="links" variants={linksVariants}>
          {sidebarItems.map((item) => (
            <motion.a
              variants={linkItemsVariants}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item}`}
              key={item}
              className="sidebarItem"
              onClick={() => setOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="sidebarButton">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
    </motion.div>
  );
}

export default Sidebar;
