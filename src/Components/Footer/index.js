import React from "react";
import "./footer.scss";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import linkedIn from "../../assets/images/linkedIn.png";

const date = new Date();
const fullYear = date.getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="container social">
      <a
        href="https://twitter.com/diwna201"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="twitter" />
      </a>
      <a
        href="https://www.facebook.com/DwinaTech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammed-dwina-3842b1141/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="linkedIn" />
      </a>
    </div>
    <span className="copyright">
      &copy; Copy rights Mohammed Dwina {fullYear}
    </span>
  </footer>
);

export default Footer;
