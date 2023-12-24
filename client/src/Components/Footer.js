import React from "react";
import "../Styles/Footer.css";
import linkedin from "../Images/linkedin.svg";
import github from "../Images/github.svg";
import leetcode from "../Images/leetcode.svg";
import mail from "../Images/mail.svg";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <div className="footer">
      <p className="footerLogo">AS</p>
      <p className="footerQuote">
        Living, Learning and Growing
      </p>
      <div className="footerLinks">
        <a href="https://www.linkedin.com/in/anjali-sharma-4086831b9/" target="_blank" className="footerLinksItem">
          <img src={linkedin} />
        </a>
        <a href="https://github.com/anjali-8001" target="_blank" className="footerLinksItem">
          <img src={github} />
        </a>
        <a className="footerLinksItem">
          <img src={mail} />
        </a>
        <a href="https://leetcode.com/anjali_8001/" target="_blank" className="footerLinksItem">
          <img src={leetcode} />
        </a>
      </div>
      <p className="footerRights">Copyrights © 2023 Anjali Sharma. All rights reserved.</p>
    </div>
  );
}

export default Footer;
