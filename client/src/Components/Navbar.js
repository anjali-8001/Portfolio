import React from "react";
import { SiGithub } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import "../Styles/Navbar.css";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbarLogo">
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
          }}
        >
          AS
        </motion.p>
      </div>
      <div className="navbarItemBox">
        <a className="navbarItem navbarLink" href="#Home">Home</a>
        <a className="navbarItem navbarLink" href="#Skills">
          Skills
        </a>
        <a className="navbarItem navbarLink" href="#Projects">Projects</a>

        <a className="navbarItem navbarLink" href="#Contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
